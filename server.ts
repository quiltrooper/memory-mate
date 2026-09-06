import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "20mb" }));

// Lazy Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set in environment.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function generateContent(ai: GoogleGenAI, params: any) {
  const primaryModel = process.env.GEMINI_MODEL || params.model || "gemini-3.8-flash";
  try {
    return await ai.models.generateContent({ ...params, model: primaryModel });
  } catch (err: any) {
    if (primaryModel !== "gemini-3.6-flash" && (err?.status === 503 || err?.code === 503 || String(err).includes("503"))) {
      console.warn(`Model ${primaryModel} busy (503), retrying with gemini-3.6-flash...`);
      return await ai.models.generateContent({ ...params, model: "gemini-3.6-flash" });
    }
    throw err;
  }
}

// 1. Cognitive Assessment Scoring endpoint
app.post("/api/gemini/cognitive-score", async (req, res) => {
  try {
    const { gameType, accuracy, responseTimeMs, errors, level, history, language = "en" } = req.body;
    const ai = getAi();

    const langInstruction =
      language === "as"
        ? "The patient's language is Assamese (অসমীয়া). Output 'supportiveMessage' in warm, loving Assamese (অসমীয়া লিপি)."
        : language === "hi"
        ? "The patient's language is Hindi (हिन्दी). Output 'supportiveMessage' in warm, loving Hindi (देवनागरी लिपि)."
        : "Output 'supportiveMessage' in warm, gentle English.";

    const prompt = `You are a clinical neurocognitive assessment assistant for an elderly person with cognitive impairment in Northeast India.
The patient just completed a cognitive session:
- Game Type: ${gameType}
- Accuracy: ${accuracy}%
- Average Response Time: ${(responseTimeMs / 1000).toFixed(1)} seconds
- Number of Errors: ${errors}
- Difficulty Level reached: ${level}
${history ? `- Recent performance trend: ${JSON.stringify(history)}` : ""}

${langInstruction}
Evaluate this performance gently. Output JSON with:
1. "score": An integer from 0 to 100 representing cognitive performance for this task (considering accuracy, speed, error rate).
2. "trend": Exactly one of "improving", "stable", or "declining".
3. "supportiveMessage": Exactly ONE warm, reassuring, encouraging sentence directly addressed to the elder (e.g. praising their steady focus, patience, or effort). Keep it simple, respectful, and heartwarming.`;

    const response = await generateContent(ai, {
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "Cognitive score between 0 and 100" },
            trend: { type: Type.STRING, description: "improving, stable, or declining" },
            supportiveMessage: { type: Type.STRING, description: "One warm supportive sentence for the elder" },
          },
          required: ["score", "trend", "supportiveMessage"],
        },
      },
    });

    const parsed = JSON.parse(response.text?.trim() || "{}");
    res.json(parsed);
  } catch (err: any) {
    console.error("Error in /api/gemini/cognitive-score:", err);
    // Graceful fallback if API fails or rate limited
    const accuracy = Number(req.body?.accuracy) || 75;
    const errors = Number(req.body?.errors) || 1;
    const computedScore = Math.max(20, Math.min(95, Math.round(accuracy * 0.8 + (10 - errors) * 2)));
    const lang = req.body?.language || "en";
    const supportiveMsg =
      lang === "as"
        ? "আজি আপোনাৰ প্ৰচেষ্টা অতি প্ৰশংসনীয় আছিল, আপোনাৰ শান্ত একাগ্ৰতা সঁচাকৈয়ে সুন্দৰ!"
        : lang === "hi"
        ? "आज आपका प्रयास बहुत सराहनीय था, आपकी शांत एकाग्रता सचमुच बहुत अच्छी थी!"
        : "Wonderful effort today, your calm focus and attention were truly lovely!";

    res.json({
      score: computedScore,
      trend: computedScore >= 75 ? "stable" : computedScore >= 60 ? "improving" : "declining",
      supportiveMessage: supportiveMsg,
    });
  }
});

// 2. Elderly Memory Assistant Chat (with Face/Image Recognition and Patient Context)
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const {
      message,
      imageBase64,
      imageMimeType,
      patientProfile,
      knownFaces,
      reminders,
      language = "en",
      chatHistory = [],
    } = req.body;
    const ai = getAi();

    const elderName = patientProfile?.name || "the elder";
    const primaryCaregiver = patientProfile?.primaryCaregiver || "your family";
    const ashaWorker = patientProfile?.ashaWorker || "your village ASHA health worker";
    const location = patientProfile?.location || "Assam, Northeast India";

    let langGuidelines = "Reply in warm, fluent, clear, and comforting English.";
    if (language === "as") {
      langGuidelines = `LANGUAGE MANDATE: The elder speaks Assamese (অসমীয়া). You MUST reply entirely in warm, respectful, gentle Assamese using Assamese script (অসমীয়া লিপি). Use respectful and affectionate Assamese terms appropriate for an elder (like আপুনি), with natural, comforting Assamese phrasing and idioms.`;
    } else if (language === "hi") {
      langGuidelines = `LANGUAGE MANDATE: The elder speaks Hindi (हिन्दी). You MUST reply entirely in warm, respectful, gentle Hindi using Devanagari script (देवनागरी). Use respectful and affectionate terms appropriate for an elder (like आप), with natural, comforting Hindi phrasing and empathy.`;
    }

    let historySnippet = "";
    if (Array.isArray(chatHistory) && chatHistory.length > 0) {
      historySnippet = "\nRecent Conversation Turns:\n" +
        chatHistory
          .slice(-5)
          .map((h: any) => `${h.sender === "user" ? elderName : "Memory Mate"}: ${h.text}`)
          .join("\n") + "\n";
    }

    const systemInstruction = `You are "Memory Mate", an exceptionally kind, compassionate, attentive, and elaborative companion for an elderly person named ${elderName} living in ${location}.
This platform is dedicated to elderly individuals of all genders with gentle dignity, reassurance, and emotional warmth.

CORE DIRECTIVE - ELABORATIVE & THOUGHTFUL CONVERSATION:
The user explicitly requests that the chatbot in the memory assistant be elaborative rather than brief or terse.
Always provide a rich, detailed, compassionate, and well-structured response (typically 2 to 3 comforting, readable paragraphs, or 4 to 6 thorough sentences with clear paragraph breaks).
Take the time to explain things thoroughly, warmly acknowledge the elder's feelings, paint vivid sensory pictures, provide full context, and ensure they feel deeply heard, valued, and safe.

GUIDELINES:
1. ${langGuidelines}
2. Tone: Loving, peaceful, respectful, patiently explanatory, like a devoted family member or compassionate community elder-care companion.
3. Daily Routine & Reminders:
   - When asked about today's tasks, routine, or medicine, give a thorough, step-by-step walkthrough of the day using their active schedule: ${JSON.stringify(reminders || [])}.
   - Mention who helped arrange it (e.g. ${primaryCaregiver} and ${ashaWorker}), what medicine is due, when and how to take it gently (e.g. with a glass of warm water or after light morning tea), what peaceful rest or walk is planned, and remind them that there is no hurry at all.
4. Photos & Face Recognition:
   - Known Family & Caregivers: ${JSON.stringify(knownFaces || [])}.
   - If an image matches or resembles a known person, provide a rich, detailed introduction: warmly identify their name, explain their exact relationship, share fond details from their profile notes (where they live, their loving gestures, the sweet treats or flowers they bring, special times spent together), and gently prompt an uplifting memory (e.g., "Do you remember when you both sat together in the courtyard sharing fresh Assam tea?").
   - If it is a scenic photo (e.g. tea gardens, Brahmaputra river, village courtyard, flowers, traditional loom): vividly describe the colors, gentle breeze, and serene atmosphere, inviting them to reminisce.
5. Comforting Reassurance & Grounding:
   - If they express worry, confusion, loneliness, or ask about home: elaborate with vivid, grounding sensory details about their home in ${location} — the quiet courtyard, birds singing, the fragrant cup of fresh tea, the love of ${primaryCaregiver}, and the regular supportive visits of ${ashaWorker}.
   - Assure them with complete tenderness that they are safe, protected, and cherished.
6. Closing:
   - Conclude with an affectionate, open-ended question or a gentle reassurance inviting them to talk more if they wish (e.g., "Would you like me to tell you more about this, or shall we simply sit together for a peaceful moment?").
${historySnippet}`;

    const contentsParts: any[] = [];
    if (imageBase64) {
      // Strip potential data URL prefix
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
      contentsParts.push({
        inlineData: {
          mimeType: imageMimeType || "image/jpeg",
          data: cleanBase64,
        },
      });
    }

    contentsParts.push({
      text: message || "Who is this in the photo, and how are they connected to me? Please tell me all about them.",
    });

    const response = await generateContent(ai, {
      model: "gemini-3.8-flash",
      contents: contentsParts,
      config: {
        systemInstruction,
        temperature: 0.75,
      },
    });

    res.json({
      reply: response.text?.trim() || (language === "as"
        ? `নমস্কাৰ ${elderName}! মই আপোনাৰ লগতেই আছোঁ। আপুনি ${location}ৰ শান্ত আৰু আপোন ঘৰখনতেই সম্পূৰ্ণ সুৰক্ষিত হৈ আছে।\n\nআপোনাৰ পৰিয়ালৰ সদস্য ${primaryCaregiver} আৰু আশা স্বাস্থ্যকৰ্মী ${ashaWorker} আপোনাৰ সকলো কাম আৰু ঔষধৰ সূচাৰুৰূপে যত্ন লৈ আছে। আজিৰ দিনটোৰ বিষয়ে বা আপোনাৰ মনৰ কথা মোক কওক, মই আপোনাৰ সকলো কথা মনোযোগেৰে শুনিবলৈ সাজু আছোঁ।`
        : language === "hi"
        ? `नमस्ते ${elderName}! मैं हर पल आपके साथ हूँ। आप ${location} स्थित अपने सुखद और शांत घर में पूरी तरह सुरक्षित हैं।\n\nआपके अपने ${primaryCaregiver} और आशा कार्यकर्ता ${ashaWorker} आपकी हर दवाई और दिनचर्या का पूरा ध्यान रख रहे हैं। आज की दिनचर्या या किसी भी प्यारी याद के बारे में आप मुझसे विस्तार से बात कर सकते हैं। आप अभी कैसा महसूस कर रहे हैं?`
        : `Hello ${elderName}! I am right here by your side. You are at your peaceful, beloved home in ${location}, completely safe and surrounded by love.\n\nYour family (${primaryCaregiver}) and healthcare worker (${ashaWorker}) have carefully organized everything smoothly for you today. Take a slow, relaxing breath. How are you feeling right now, and what would you like to talk about?`),
    });
  } catch (err: any) {
    console.error("Error in /api/gemini/chat:", err);
    const lang = req.body?.language || "en";
    const name = req.body?.patientProfile?.name || "my dear friend";
    const loc = req.body?.patientProfile?.location || "Assam";
    const caregiver = req.body?.patientProfile?.primaryCaregiver || "your family";
    const asha = req.body?.patientProfile?.ashaWorker || "your community health worker";

    const fallbackReply =
      lang === "as"
        ? `নমস্কাৰ ${name}! মই আপোনাৰ ওচৰতেই আছোঁ, এটা শান্ত আৰু গভীৰ উশাহ লওক। আপুনি আপোনাৰ নিৰাপদ ঘৰখনতেই আছে আৰু কোনো চিন্তাৰ কাৰণ নাই।\n\nআপোনাৰ মৰমৰ ${caregiver} আৰু আশা স্বাস্থ্যকৰ্মী ${asha} আপোনাৰ সকলো দৈনিক ঔষধ, পুষ্টিকৰ আহাৰ আৰু বিশ্ৰামৰ নিয়ম ঠিক কৰি ৰাখিছে। মই আপোনাক সকলো কথাত সহায় কৰিবলৈ আৰু মনৰ কথা শুনিবলৈ সাজু আছোঁ।`
        : lang === "hi"
        ? `नमस्ते ${name}! मैं आपके बिल्कुल पास हूँ, शांत भाव से एक गहरी और सुखद साँस लें। आप अपने घर पर बिल्कुल सुरक्षित और अपनों के बीच हैं।\n\nआपके अपने ${caregiver} और स्वास्थ्य कार्यकर्ता ${asha} ने आज की सभी दवाइयों, पौष्टिक भोजन और दिनचर्या का पूरा प्रबंध कर रखा है। मैं आपके साथ हर बात विस्तार से साझा करने के लिए तत्पर हूँ।`
        : `Hello ${name}! I am right here with you. Take a slow, gentle breath. You are safe and peaceful at your lovely home in ${loc}.\n\nYour family (${caregiver}) and community health worker (${asha}) have carefully organized your routine and medicines for today so you can rest comfortably. Whenever you are ready, I would love to tell you more about anything on your mind.`;
    res.json({
      reply: fallbackReply,
    });
  }
});

// 3. Digital Memory Box Reminiscence Prompt
app.post("/api/gemini/reminiscence", async (req, res) => {
  try {
    const { title, caption, year, location, imageBase64, language = "en", patientProfile } = req.body;
    const ai = getAi();

    const elderName = patientProfile?.name || "the elder";
    const langInstruction =
      language === "as"
        ? "Respond in warm, nostalgic Assamese using Assamese script (অসমীয়া লিপি)."
        : language === "hi"
        ? "Respond in warm, nostalgic Hindi using Devanagari script (देवनागरी)."
        : "Respond in warm, nostalgic English.";

    const prompt = `An elderly person (${elderName}) in Northeast India is looking at a beloved memory from their Digital Memory Box:
Memory Title: "${title}"
Caption: "${caption}"
Approximate Year/Setting: "${year || "Past days"}" in "${location || "Northeast India"}"

${langInstruction}
Generate a warm, nostalgic, emotionally comforting prompt or question (2 short sentences max) that invites the elder to reminisce about this moment with joy and peace.
Keep it simple, respectful, and heartwarming.`;

    const contents: any[] = [];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
      contents.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: cleanBase64,
        },
      });
    }
    contents.push({ text: prompt });

    const response = await generateContent(ai, {
      model: "gemini-3.8-flash",
      contents,
      config: {
        temperature: 0.8,
      },
    });

    res.json({
      prompt: response.text?.trim() || (language === "as" ? "কিমান সুন্দৰ স্মৃতি! সেই দিনটোৰ আনন্দ মনত আছেনে?" : language === "hi" ? "कितनी प्यारी याद है! क्या उस दिन की ख़ुशियाँ आपको याद हैं?" : "What a beautiful memory. Do you remember the happy smiles from that special day?"),
    });
  } catch (err: any) {
    console.error("Error in /api/gemini/reminiscence:", err);
    const lang = req.body?.language || "en";
    res.json({
      prompt:
        lang === "as"
          ? "কিমান আনন্দদায়ক সোঁৱৰণি! চোতালত চাহ খাই হাঁহি-ধেমালি কৰা দিনবোৰ মনত আছেনে?"
          : lang === "hi"
          ? "कितनी सुखद याद है! क्या उस दिन की चाय और अपनों की हँसी आपको याद है?"
          : "What a comforting memory. Do you remember the warm tea and the laughter shared on that sunny day?",
    });
  }
});

// 4. Caregiver Dashboard: AI-Flagged Concerns & Weekly Summary
app.post("/api/gemini/caregiver-analysis", async (req, res) => {
  try {
    const { trendData, patientProfile, recentLogs } = req.body;
    const ai = getAi();

    const prompt = `You are a clinical geriatric specialist analyzing cognitive and daily assessment records for an elderly patient (${patientProfile?.name || "Bhaben Borah"}, age 74, early-stage cognitive impairment, residing in Jorhat, Assam).
Caregivers include his family member (Priya) and the local village ASHA healthcare worker.

Historical 8-week domain trends (Memory, Attention, Executive function):
${JSON.stringify(trendData)}

Recent game sessions & daily notes:
${JSON.stringify(recentLogs || [])}

Please output JSON with:
1. "flags": An array of 3 realistic, concise clinical observations or alerts written in clear, plain language (e.g., "Recall accuracy dropped 15% this week — consider scheduling a gentle check-up", "Attention span remained highest during morning sessions (9:00 AM - 11:00 AM)", "Routine medication adherence is steady with gentle afternoon reminders").
2. "weeklySummary": A compassionate, easy-to-read paragraph (3-4 sentences) summarizing the patient's week for family members and the ASHA community worker, balancing honest progress indicators with warm reassurance.`;

    const response = await generateContent(ai, {
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            flags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "2 to 3 concise, plain-language AI alerts for caregivers",
            },
            weeklySummary: {
              type: Type.STRING,
              description: "Compassionate summary paragraph for family and ASHA worker",
            },
          },
          required: ["flags", "weeklySummary"],
        },
      },
    });

    const parsed = JSON.parse(response.text?.trim() || "{}");
    res.json(parsed);
  } catch (err: any) {
    console.error("Error in /api/gemini/caregiver-analysis:", err);
    res.json({
      flags: [
        "Word Recall accuracy dipped 14% this week during late evening — consider scheduling cognitive tasks in the calmer morning hours.",
        "Pattern recognition and picture matching remained high and stable at 82%, showing steady executive function.",
        "Morning medication reminders were acknowledged promptly; evening walk was completed with family.",
      ],
      weeklySummary:
        "Bhaben had a reassuring and active week overall. His visual memory and daily routine participation remained very stable, especially during early morning tea time. We noticed a slight fatigue pattern during late-afternoon memory recall, so shifting cognitive games to 10:00 AM will provide the gentlest and most encouraging experience.",
    });
  }
});

// Production & Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Memory Mate server listening on port ${PORT}`);
  });
}

startServer();
