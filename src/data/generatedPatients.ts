import { PatientDataset } from '../types';

// 100 synthetic Northeast India patient profiles for demo, trend visualization,
// and AI training dataset export. This is a SYNTHETIC DEMO DATASET modeled on
// general, widely-documented dementia progression patterns seen in medical
// literature worldwide (gradual decline, stabilization, and improvement under
// structured cognitive care) — it does not represent real patient records.
export const GENERATED_PATIENTS: (PatientDataset & { trendShape: 'declining' | 'improving' | 'stable' })[] = [
  {
    "profile": {
      "id": "patient-gen-1",
      "name": "Hemanta Ralte",
      "age": 68,
      "gender": "Male",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Karma Ralte (Grandson)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-1-1",
        "name": "Karma Ralte",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-1-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-1-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-1-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-1-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-1-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Ralte"
      },
      {
        "id": "rem-1-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-1-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-1-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-1-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-11"
      },
      {
        "id": "mem-1-3",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 77,
        "executive": 71,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 81,
        "attention": 82,
        "executive": 75,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 81,
        "attention": 84,
        "executive": 75,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 86,
        "attention": 87,
        "executive": 75,
        "composite": 83
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 85,
        "attention": 86,
        "executive": 80,
        "composite": 84
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 90,
        "attention": 88,
        "executive": 78,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 90,
        "attention": 90,
        "executive": 80,
        "composite": 87
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 89,
        "attention": 88,
        "executive": 86,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 94,
        "attention": 91,
        "executive": 85,
        "composite": 90
      }
    ],
    "gameSessions": [
      {
        "id": "sess-1-1",
        "timestamp": "3 days ago at 17:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 88,
        "responseTimeMs": 3766,
        "errors": 0,
        "level": 1,
        "score": 84,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-1-2",
        "timestamp": "6 days ago at 18:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 98,
        "responseTimeMs": 3280,
        "errors": 1,
        "level": 4,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-1-3",
        "timestamp": "2 days ago at 16:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 99,
        "responseTimeMs": 1935,
        "errors": 2,
        "level": 5,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-1-4",
        "timestamp": "1 days ago at 16:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 84,
        "responseTimeMs": 3501,
        "errors": 0,
        "level": 1,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-2",
      "name": "Rukmini Ao",
      "age": 68,
      "gender": "Female",
      "location": "Tezpur, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Yaiphaba Ao (Nephew)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Tezpur Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-2-1",
        "name": "Yaiphaba Ao",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Tezpur, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-2-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Tezpur Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-2-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tezpur, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-2-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Ao"
      },
      {
        "id": "rem-2-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-2-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-2-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Ao"
      }
    ],
    "memories": [
      {
        "id": "mem-2-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-19"
      },
      {
        "id": "mem-2-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-2-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 78,
        "attention": 83,
        "executive": 84,
        "composite": 82
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 85,
        "executive": 79,
        "composite": 82
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 80,
        "attention": 82,
        "executive": 81,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 79,
        "attention": 84,
        "executive": 83,
        "composite": 82
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 81,
        "attention": 85,
        "executive": 85,
        "composite": 84
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 81,
        "attention": 81,
        "executive": 80,
        "composite": 81
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 79,
        "attention": 84,
        "executive": 82,
        "composite": 82
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 80,
        "executive": 78,
        "composite": 81
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 81,
        "attention": 83,
        "executive": 79,
        "composite": 81
      }
    ],
    "gameSessions": [
      {
        "id": "sess-2-1",
        "timestamp": "5 days ago at 16:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 75,
        "responseTimeMs": 1734,
        "errors": 0,
        "level": 5,
        "score": 71,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-2-2",
        "timestamp": "1 days ago at 08:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 81,
        "responseTimeMs": 1780,
        "errors": 4,
        "level": 1,
        "score": 85,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-2-3",
        "timestamp": "4 days ago at 11:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 88,
        "responseTimeMs": 3217,
        "errors": 4,
        "level": 5,
        "score": 87,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-2-4",
        "timestamp": "5 days ago at 13:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 77,
        "responseTimeMs": 2036,
        "errors": 2,
        "level": 4,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-3",
      "name": "Chandana Baruah",
      "age": 61,
      "gender": "Female",
      "location": "Tura, Meghalaya",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Lhakpa Baruah (Daughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Tura Civil Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-3-1",
        "name": "Lhakpa Baruah",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Tura, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-3-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Tura Civil Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-3-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tura, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-3-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-3-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-3-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lhakpa Baruah"
      },
      {
        "id": "rem-3-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lhakpa Baruah"
      }
    ],
    "memories": [
      {
        "id": "mem-3-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-3-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "2016",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-3-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 83,
        "executive": 85,
        "composite": 82
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 84,
        "attention": 83,
        "executive": 81,
        "composite": 83
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 82,
        "attention": 81,
        "executive": 87,
        "composite": 83
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 84,
        "attention": 82,
        "executive": 87,
        "composite": 84
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 83,
        "attention": 86,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 85,
        "attention": 82,
        "executive": 83,
        "composite": 83
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 84,
        "attention": 82,
        "executive": 87,
        "composite": 84
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 83,
        "attention": 84,
        "executive": 88,
        "composite": 85
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 81,
        "attention": 82,
        "executive": 84,
        "composite": 82
      }
    ],
    "gameSessions": [
      {
        "id": "sess-3-1",
        "timestamp": "2 days ago at 09:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 85,
        "responseTimeMs": 3586,
        "errors": 3,
        "level": 5,
        "score": 84,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-3-2",
        "timestamp": "2 days ago at 10:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 91,
        "responseTimeMs": 3943,
        "errors": 3,
        "level": 3,
        "score": 87,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-3-3",
        "timestamp": "4 days ago at 09:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 88,
        "responseTimeMs": 2278,
        "errors": 2,
        "level": 1,
        "score": 87,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-3-4",
        "timestamp": "6 days ago at 16:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 81,
        "responseTimeMs": 1786,
        "errors": 2,
        "level": 5,
        "score": 81,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-4",
      "name": "Ongbi Deka",
      "age": 84,
      "gender": "Female",
      "location": "Kohima, Nagaland",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Tenzin Deka (Granddaughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Naga Hospital Authority Kohima",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-4-1",
        "name": "Tenzin Deka",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Kohima, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-4-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Naga Hospital Authority Kohima",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-4-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Kohima, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-4-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-4-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tenzin Deka"
      },
      {
        "id": "rem-4-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-4-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-4-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-4-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-4-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-4-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 67,
        "attention": 73,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 74,
        "executive": 65,
        "composite": 70
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 71,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 63,
        "attention": 72,
        "executive": 59,
        "composite": 65
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 67,
        "executive": 58,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 61,
        "attention": 64,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 61,
        "attention": 66,
        "executive": 55,
        "composite": 61
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 58,
        "attention": 62,
        "executive": 55,
        "composite": 58
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 64,
        "executive": 54,
        "composite": 59
      }
    ],
    "gameSessions": [
      {
        "id": "sess-4-1",
        "timestamp": "5 days ago at 11:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 54,
        "responseTimeMs": 2855,
        "errors": 4,
        "level": 4,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-4-2",
        "timestamp": "3 days ago at 17:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 50,
        "responseTimeMs": 3858,
        "errors": 3,
        "level": 4,
        "score": 53,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-4-3",
        "timestamp": "3 days ago at 14:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 68,
        "responseTimeMs": 2617,
        "errors": 3,
        "level": 4,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-4-4",
        "timestamp": "6 days ago at 14:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 57,
        "responseTimeMs": 2022,
        "errors": 4,
        "level": 5,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-5",
      "name": "Toshi Reang",
      "age": 82,
      "gender": "Male",
      "location": "Jorhat, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Zhavise Reang (Daughter-in-law)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-5-1",
        "name": "Zhavise Reang",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-5-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-5-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-5-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-5-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-5-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zhavise Reang"
      },
      {
        "id": "rem-5-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zhavise Reang"
      },
      {
        "id": "rem-5-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-5-6",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-5-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-15"
      },
      {
        "id": "mem-5-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-5-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 69,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 70,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 68,
        "attention": 75,
        "executive": 71,
        "composite": 71
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 72,
        "attention": 77,
        "executive": 72,
        "composite": 74
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 69,
        "attention": 75,
        "executive": 73,
        "composite": 72
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 72,
        "attention": 80,
        "executive": 76,
        "composite": 76
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 73,
        "attention": 82,
        "executive": 74,
        "composite": 76
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 77,
        "attention": 79,
        "executive": 76,
        "composite": 77
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 79,
        "attention": 81,
        "executive": 77,
        "composite": 79
      }
    ],
    "gameSessions": [
      {
        "id": "sess-5-1",
        "timestamp": "2 days ago at 16:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 87,
        "responseTimeMs": 2282,
        "errors": 0,
        "level": 2,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-5-2",
        "timestamp": "1 days ago at 15:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 77,
        "responseTimeMs": 1570,
        "errors": 0,
        "level": 3,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-5-3",
        "timestamp": "5 days ago at 17:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 77,
        "responseTimeMs": 3674,
        "errors": 2,
        "level": 4,
        "score": 74,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-5-4",
        "timestamp": "3 days ago at 12:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 80,
        "responseTimeMs": 1994,
        "errors": 1,
        "level": 3,
        "score": 79,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-5-5",
        "timestamp": "5 days ago at 10:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 84,
        "responseTimeMs": 3483,
        "errors": 2,
        "level": 5,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-6",
      "name": "Priyanka Wangchuk",
      "age": 70,
      "gender": "Female",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Gita Wangchuk (Grandson)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-6-1",
        "name": "Gita Wangchuk",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-6-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-6-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-6-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-6-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-6-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-6-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-6-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-11"
      },
      {
        "id": "mem-6-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-6-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Monsoon 2012",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 64,
        "attention": 62,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 61,
        "attention": 62,
        "executive": 60,
        "composite": 61
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 61,
        "attention": 58,
        "executive": 56,
        "composite": 58
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 59,
        "executive": 54,
        "composite": 58
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 56,
        "attention": 55,
        "executive": 56,
        "composite": 56
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 52,
        "attention": 55,
        "executive": 53,
        "composite": 53
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 56,
        "attention": 56,
        "executive": 54,
        "composite": 55
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 54,
        "attention": 51,
        "executive": 52,
        "composite": 52
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 48,
        "attention": 51,
        "executive": 51,
        "composite": 50
      }
    ],
    "gameSessions": [
      {
        "id": "sess-6-1",
        "timestamp": "6 days ago at 17:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 45,
        "responseTimeMs": 2603,
        "errors": 4,
        "level": 1,
        "score": 47,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-6-2",
        "timestamp": "2 days ago at 10:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 49,
        "responseTimeMs": 3514,
        "errors": 0,
        "level": 4,
        "score": 51,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-6-3",
        "timestamp": "0 days ago at 10:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 48,
        "responseTimeMs": 3529,
        "errors": 2,
        "level": 4,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-7",
      "name": "Yaiphaba Hazarika",
      "age": 71,
      "gender": "Male",
      "location": "Lunglei, Mizoram",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Nongthombam Hazarika (Niece)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Lunglei District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-7-1",
        "name": "Nongthombam Hazarika",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Lunglei, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-7-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Lunglei District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-7-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Lunglei, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-7-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-7-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nongthombam Hazarika"
      },
      {
        "id": "rem-7-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nongthombam Hazarika"
      },
      {
        "id": "rem-7-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-7-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-7-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-7-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 78,
        "attention": 79,
        "executive": 75,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 79,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 77,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 76,
        "attention": 78,
        "executive": 71,
        "composite": 75
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 72,
        "attention": 78,
        "executive": 72,
        "composite": 74
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 76,
        "executive": 70,
        "composite": 72
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 75,
        "attention": 73,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 68,
        "attention": 71,
        "executive": 66,
        "composite": 68
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 71,
        "attention": 69,
        "executive": 66,
        "composite": 69
      }
    ],
    "gameSessions": [
      {
        "id": "sess-7-1",
        "timestamp": "5 days ago at 09:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 66,
        "responseTimeMs": 3685,
        "errors": 3,
        "level": 3,
        "score": 68,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-7-2",
        "timestamp": "6 days ago at 16:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 73,
        "responseTimeMs": 2461,
        "errors": 2,
        "level": 2,
        "score": 76,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-7-3",
        "timestamp": "6 days ago at 18:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 2726,
        "errors": 0,
        "level": 1,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-7-4",
        "timestamp": "2 days ago at 14:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 75,
        "responseTimeMs": 3187,
        "errors": 4,
        "level": 2,
        "score": 73,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-7-5",
        "timestamp": "3 days ago at 17:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 63,
        "responseTimeMs": 3888,
        "errors": 1,
        "level": 2,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-7-6",
        "timestamp": "5 days ago at 08:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 3738,
        "errors": 1,
        "level": 1,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-8",
      "name": "Pema Ao",
      "age": 81,
      "gender": "Female",
      "location": "Shillong, Meghalaya",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Zohmingliana Ao (Niece)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "NEIGRIHMS Shillong",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-8-1",
        "name": "Zohmingliana Ao",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Shillong, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-8-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "NEIGRIHMS Shillong",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-8-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Shillong, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-8-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-8-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zohmingliana Ao"
      },
      {
        "id": "rem-8-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-8-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zohmingliana Ao"
      }
    ],
    "memories": [
      {
        "id": "mem-8-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Winter 2008",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-8-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-13"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 72,
        "attention": 69,
        "executive": 69,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 75,
        "attention": 70,
        "executive": 68,
        "composite": 71
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 75,
        "executive": 67,
        "composite": 73
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 80,
        "attention": 73,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 77,
        "executive": 71,
        "composite": 75
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 83,
        "attention": 78,
        "executive": 76,
        "composite": 79
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 77,
        "executive": 73,
        "composite": 79
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 87,
        "attention": 81,
        "executive": 76,
        "composite": 81
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 79,
        "executive": 80,
        "composite": 82
      }
    ],
    "gameSessions": [
      {
        "id": "sess-8-1",
        "timestamp": "3 days ago at 09:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 91,
        "responseTimeMs": 3701,
        "errors": 1,
        "level": 4,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-8-2",
        "timestamp": "5 days ago at 16:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 79,
        "responseTimeMs": 2132,
        "errors": 3,
        "level": 1,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-8-3",
        "timestamp": "2 days ago at 08:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 84,
        "responseTimeMs": 3321,
        "errors": 1,
        "level": 3,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-8-4",
        "timestamp": "5 days ago at 13:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 92,
        "responseTimeMs": 2277,
        "errors": 0,
        "level": 4,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-9",
      "name": "Sonam Sarma",
      "age": 62,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Maya Sarma (Daughter)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-9-1",
        "name": "Maya Sarma",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-9-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-9-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-9-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-9-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Maya Sarma"
      },
      {
        "id": "rem-9-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-9-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Maya Sarma"
      },
      {
        "id": "rem-9-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Maya Sarma"
      }
    ],
    "memories": [
      {
        "id": "mem-9-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-9-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-9-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-23"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 80,
        "executive": 82,
        "composite": 80
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 81,
        "attention": 80,
        "executive": 83,
        "composite": 81
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 80,
        "attention": 77,
        "executive": 84,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 79,
        "attention": 79,
        "executive": 79,
        "composite": 79
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 81,
        "attention": 80,
        "executive": 81,
        "composite": 81
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 80,
        "attention": 80,
        "executive": 82,
        "composite": 81
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 78,
        "attention": 82,
        "executive": 81,
        "composite": 80
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 79,
        "attention": 79,
        "executive": 80,
        "composite": 79
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 82,
        "attention": 78,
        "executive": 82,
        "composite": 81
      }
    ],
    "gameSessions": [
      {
        "id": "sess-9-1",
        "timestamp": "5 days ago at 08:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 90,
        "responseTimeMs": 2940,
        "errors": 0,
        "level": 5,
        "score": 89,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-9-2",
        "timestamp": "1 days ago at 09:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3005,
        "errors": 0,
        "level": 3,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-9-3",
        "timestamp": "4 days ago at 17:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 4194,
        "errors": 2,
        "level": 1,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-9-4",
        "timestamp": "2 days ago at 13:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 76,
        "responseTimeMs": 2086,
        "errors": 4,
        "level": 4,
        "score": 79,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-9-5",
        "timestamp": "0 days ago at 09:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 74,
        "responseTimeMs": 3358,
        "errors": 2,
        "level": 2,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-10",
      "name": "Dolkar Sema",
      "age": 85,
      "gender": "Female",
      "location": "Guwahati, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Sengphan Sema (Daughter)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "GMCH Guwahati",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-10-1",
        "name": "Sengphan Sema",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Guwahati, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-10-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "GMCH Guwahati",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-10-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Guwahati, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-10-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Sema"
      },
      {
        "id": "rem-10-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Sema"
      },
      {
        "id": "rem-10-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Sema"
      },
      {
        "id": "rem-10-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-10-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-10-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Spring 2010",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-10-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-10-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 74,
        "attention": 80,
        "executive": 74,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 81,
        "executive": 76,
        "composite": 77
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 70,
        "attention": 77,
        "executive": 75,
        "composite": 74
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 70,
        "attention": 76,
        "executive": 72,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 71,
        "attention": 77,
        "executive": 69,
        "composite": 72
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 68,
        "attention": 74,
        "executive": 68,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 65,
        "attention": 73,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 62,
        "attention": 69,
        "executive": 67,
        "composite": 66
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 70,
        "executive": 66,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-10-1",
        "timestamp": "3 days ago at 08:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 67,
        "responseTimeMs": 2675,
        "errors": 0,
        "level": 1,
        "score": 65,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-10-2",
        "timestamp": "4 days ago at 16:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 69,
        "responseTimeMs": 3841,
        "errors": 1,
        "level": 3,
        "score": 68,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-10-3",
        "timestamp": "0 days ago at 15:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 67,
        "responseTimeMs": 2906,
        "errors": 0,
        "level": 5,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-11",
      "name": "Dilip Sailo",
      "age": 83,
      "gender": "Male",
      "location": "Tura, Meghalaya",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Ongbi Sailo (Granddaughter)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Tura Civil Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-11-1",
        "name": "Ongbi Sailo",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Tura, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-11-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Tura Civil Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-11-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tura, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-11-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Sailo"
      },
      {
        "id": "rem-11-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-11-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Sailo"
      },
      {
        "id": "rem-11-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-11-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-11-6",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-11-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Monsoon 2012",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-11-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-11"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 79,
        "executive": 80,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 80,
        "attention": 80,
        "executive": 83,
        "composite": 81
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 80,
        "attention": 80,
        "executive": 80,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 80,
        "attention": 80,
        "executive": 83,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 81,
        "attention": 84,
        "executive": 85,
        "composite": 83
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 85,
        "attention": 87,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 84,
        "executive": 88,
        "composite": 86
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 88,
        "executive": 87,
        "composite": 86
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 90,
        "attention": 88,
        "executive": 91,
        "composite": 90
      }
    ],
    "gameSessions": [
      {
        "id": "sess-11-1",
        "timestamp": "6 days ago at 16:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 91,
        "responseTimeMs": 2156,
        "errors": 2,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-11-2",
        "timestamp": "1 days ago at 15:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 83,
        "responseTimeMs": 3199,
        "errors": 0,
        "level": 4,
        "score": 82,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-11-3",
        "timestamp": "0 days ago at 13:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 87,
        "responseTimeMs": 1905,
        "errors": 2,
        "level": 2,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-11-4",
        "timestamp": "3 days ago at 10:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 81,
        "responseTimeMs": 1521,
        "errors": 0,
        "level": 1,
        "score": 85,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-11-5",
        "timestamp": "5 days ago at 17:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 84,
        "responseTimeMs": 2680,
        "errors": 1,
        "level": 3,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-11-6",
        "timestamp": "6 days ago at 17:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 81,
        "responseTimeMs": 3547,
        "errors": 4,
        "level": 5,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-12",
      "name": "Dhan Reang",
      "age": 68,
      "gender": "Male",
      "location": "Silchar, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Padam Reang (Niece)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-12-1",
        "name": "Padam Reang",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-12-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-12-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-12-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Padam Reang"
      },
      {
        "id": "rem-12-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-12-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-12-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-12-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Padam Reang"
      }
    ],
    "memories": [
      {
        "id": "mem-12-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-12-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-12-3",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-15"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 82,
        "executive": 72,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 79,
        "attention": 79,
        "executive": 75,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 85,
        "executive": 77,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 81,
        "attention": 86,
        "executive": 76,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 79,
        "attention": 87,
        "executive": 80,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 82,
        "attention": 89,
        "executive": 77,
        "composite": 83
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 82,
        "attention": 90,
        "executive": 83,
        "composite": 85
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 86,
        "attention": 88,
        "executive": 85,
        "composite": 86
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 87,
        "attention": 89,
        "executive": 86,
        "composite": 87
      }
    ],
    "gameSessions": [
      {
        "id": "sess-12-1",
        "timestamp": "3 days ago at 08:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 94,
        "responseTimeMs": 4142,
        "errors": 2,
        "level": 3,
        "score": 96,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-12-2",
        "timestamp": "1 days ago at 18:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 96,
        "responseTimeMs": 3023,
        "errors": 3,
        "level": 1,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-12-3",
        "timestamp": "2 days ago at 18:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 80,
        "responseTimeMs": 1964,
        "errors": 0,
        "level": 2,
        "score": 79,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-13",
      "name": "Akoli Lotha",
      "age": 78,
      "gender": "Female",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Karma Lotha (Son)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-13-1",
        "name": "Karma Lotha",
        "relationship": "Son (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-13-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-13-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-13-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-13-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Lotha"
      },
      {
        "id": "rem-13-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Lotha"
      },
      {
        "id": "rem-13-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Lotha"
      }
    ],
    "memories": [
      {
        "id": "mem-13-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-11"
      },
      {
        "id": "mem-13-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 82,
        "executive": 77,
        "composite": 79
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 83,
        "executive": 77,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 88,
        "executive": 78,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 83,
        "attention": 88,
        "executive": 78,
        "composite": 83
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 85,
        "attention": 89,
        "executive": 82,
        "composite": 85
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 88,
        "attention": 93,
        "executive": 85,
        "composite": 89
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 88,
        "attention": 94,
        "executive": 84,
        "composite": 89
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 87,
        "attention": 92,
        "executive": 88,
        "composite": 89
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 94,
        "executive": 86,
        "composite": 89
      }
    ],
    "gameSessions": [
      {
        "id": "sess-13-1",
        "timestamp": "1 days ago at 17:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 94,
        "responseTimeMs": 1624,
        "errors": 3,
        "level": 5,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-13-2",
        "timestamp": "1 days ago at 18:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 92,
        "responseTimeMs": 1798,
        "errors": 0,
        "level": 2,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-13-3",
        "timestamp": "2 days ago at 17:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 87,
        "responseTimeMs": 2807,
        "errors": 2,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-14",
      "name": "Zhavise Thapa",
      "age": 78,
      "gender": "Male",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Bhim Bahadur Thapa (Daughter-in-law)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-14-1",
        "name": "Bhim Bahadur Thapa",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-14-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-14-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-14-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-14-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-14-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-14-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Thapa"
      }
    ],
    "memories": [
      {
        "id": "mem-14-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-14-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Winter 2008",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-14-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-29"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 61,
        "attention": 66,
        "executive": 59,
        "composite": 62
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 63,
        "attention": 63,
        "executive": 60,
        "composite": 62
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 63,
        "attention": 65,
        "executive": 57,
        "composite": 62
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 60,
        "executive": 53,
        "composite": 58
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 57,
        "attention": 58,
        "executive": 57,
        "composite": 57
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 53,
        "attention": 58,
        "executive": 52,
        "composite": 54
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 52,
        "attention": 57,
        "executive": 52,
        "composite": 54
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 50,
        "attention": 54,
        "executive": 48,
        "composite": 51
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 49,
        "attention": 55,
        "executive": 51,
        "composite": 52
      }
    ],
    "gameSessions": [
      {
        "id": "sess-14-1",
        "timestamp": "6 days ago at 17:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 61,
        "responseTimeMs": 3890,
        "errors": 3,
        "level": 2,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-14-2",
        "timestamp": "6 days ago at 14:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 55,
        "responseTimeMs": 2492,
        "errors": 0,
        "level": 5,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-14-3",
        "timestamp": "2 days ago at 14:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 44,
        "responseTimeMs": 2335,
        "errors": 3,
        "level": 5,
        "score": 39,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-14-4",
        "timestamp": "5 days ago at 08:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 60,
        "responseTimeMs": 3797,
        "errors": 2,
        "level": 4,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-14-5",
        "timestamp": "3 days ago at 16:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 50,
        "responseTimeMs": 4134,
        "errors": 2,
        "level": 5,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-14-6",
        "timestamp": "4 days ago at 12:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 46,
        "responseTimeMs": 2719,
        "errors": 2,
        "level": 2,
        "score": 43,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-15",
      "name": "Yangchen Gurung",
      "age": 72,
      "gender": "Female",
      "location": "Lunglei, Mizoram",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Jitu Gurung (Daughter)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Lunglei District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-15-1",
        "name": "Jitu Gurung",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Lunglei, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-15-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Lunglei District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-15-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Lunglei, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-15-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-15-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Gurung"
      },
      {
        "id": "rem-15-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-15-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Gurung"
      },
      {
        "id": "rem-15-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-15-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-15-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-15-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-22"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 76,
        "executive": 72,
        "composite": 75
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 71,
        "executive": 73,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 70,
        "attention": 74,
        "executive": 74,
        "composite": 73
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 68,
        "attention": 73,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 66,
        "attention": 71,
        "executive": 65,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 65,
        "attention": 68,
        "executive": 68,
        "composite": 67
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 67,
        "attention": 69,
        "executive": 64,
        "composite": 67
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 61,
        "attention": 63,
        "executive": 64,
        "composite": 63
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 62,
        "attention": 62,
        "executive": 62,
        "composite": 62
      }
    ],
    "gameSessions": [
      {
        "id": "sess-15-1",
        "timestamp": "1 days ago at 08:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 72,
        "responseTimeMs": 3329,
        "errors": 2,
        "level": 3,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-15-2",
        "timestamp": "2 days ago at 18:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 64,
        "responseTimeMs": 1754,
        "errors": 0,
        "level": 4,
        "score": 65,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-15-3",
        "timestamp": "5 days ago at 12:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 55,
        "responseTimeMs": 2708,
        "errors": 2,
        "level": 5,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-16",
      "name": "Namgyal Saikia",
      "age": 76,
      "gender": "Male",
      "location": "Silchar, Assam",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Neikho Saikia (Grandson)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-16-1",
        "name": "Neikho Saikia",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-16-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-16-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-16-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-16-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-16-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Saikia"
      },
      {
        "id": "rem-16-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-16-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Saikia"
      }
    ],
    "memories": [
      {
        "id": "mem-16-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-16-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 77,
        "attention": 76,
        "executive": 69,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 79,
        "attention": 80,
        "executive": 76,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 80,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 83,
        "attention": 81,
        "executive": 75,
        "composite": 80
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 82,
        "attention": 83,
        "executive": 79,
        "composite": 81
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 81,
        "attention": 84,
        "executive": 80,
        "composite": 82
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 82,
        "attention": 87,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 86,
        "attention": 89,
        "executive": 84,
        "composite": 86
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 86,
        "attention": 89,
        "executive": 83,
        "composite": 86
      }
    ],
    "gameSessions": [
      {
        "id": "sess-16-1",
        "timestamp": "4 days ago at 18:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 78,
        "responseTimeMs": 1681,
        "errors": 3,
        "level": 4,
        "score": 73,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-16-2",
        "timestamp": "6 days ago at 08:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 2684,
        "errors": 1,
        "level": 5,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-16-3",
        "timestamp": "6 days ago at 13:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 88,
        "responseTimeMs": 2086,
        "errors": 4,
        "level": 2,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-16-4",
        "timestamp": "4 days ago at 10:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 82,
        "responseTimeMs": 1692,
        "errors": 2,
        "level": 4,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-17",
      "name": "Thoibi Meitei",
      "age": 74,
      "gender": "Female",
      "location": "Silchar, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Anjali Meitei (Son)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-17-1",
        "name": "Anjali Meitei",
        "relationship": "Son (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-17-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-17-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-17-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Meitei"
      },
      {
        "id": "rem-17-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-17-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-17-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-17-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-17-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-17-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Autumn 2014",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-27"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 83,
        "executive": 73,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 77,
        "attention": 82,
        "executive": 70,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 74,
        "attention": 79,
        "executive": 69,
        "composite": 74
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 71,
        "attention": 79,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 69,
        "attention": 78,
        "executive": 64,
        "composite": 70
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 70,
        "attention": 77,
        "executive": 64,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 69,
        "attention": 70,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 67,
        "attention": 70,
        "executive": 61,
        "composite": 66
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 64,
        "attention": 70,
        "executive": 58,
        "composite": 64
      }
    ],
    "gameSessions": [
      {
        "id": "sess-17-1",
        "timestamp": "6 days ago at 18:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 55,
        "responseTimeMs": 3189,
        "errors": 1,
        "level": 2,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-17-2",
        "timestamp": "4 days ago at 15:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 68,
        "responseTimeMs": 4112,
        "errors": 4,
        "level": 4,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-17-3",
        "timestamp": "4 days ago at 14:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 2625,
        "errors": 4,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-18",
      "name": "Dhan Sharma",
      "age": 86,
      "gender": "Male",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Chandra Sharma (Daughter)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-18-1",
        "name": "Chandra Sharma",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-18-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-18-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-18-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-18-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-18-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-18-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-18-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-22"
      },
      {
        "id": "mem-18-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-18-3",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 71,
        "attention": 75,
        "executive": 75,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 79,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 74,
        "attention": 81,
        "executive": 72,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 69,
        "attention": 82,
        "executive": 74,
        "composite": 75
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 70,
        "attention": 79,
        "executive": 71,
        "composite": 73
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 70,
        "attention": 82,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 74,
        "attention": 80,
        "executive": 72,
        "composite": 75
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 72,
        "attention": 83,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 72,
        "attention": 82,
        "executive": 73,
        "composite": 76
      }
    ],
    "gameSessions": [
      {
        "id": "sess-18-1",
        "timestamp": "6 days ago at 18:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 71,
        "responseTimeMs": 2797,
        "errors": 2,
        "level": 1,
        "score": 70,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-18-2",
        "timestamp": "2 days ago at 12:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 66,
        "responseTimeMs": 2267,
        "errors": 3,
        "level": 4,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-18-3",
        "timestamp": "0 days ago at 09:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 77,
        "responseTimeMs": 3945,
        "errors": 4,
        "level": 3,
        "score": 76,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-19",
      "name": "Kamala Lalrinliana",
      "age": 74,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Imliakum Lalrinliana (Daughter-in-law)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-19-1",
        "name": "Imliakum Lalrinliana",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-19-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-19-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-19-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Imliakum Lalrinliana"
      },
      {
        "id": "rem-19-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-19-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-19-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-19-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-19-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Autumn 2014",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 76,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 80,
        "attention": 78,
        "executive": 81,
        "composite": 80
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 81,
        "attention": 76,
        "executive": 83,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 82,
        "attention": 79,
        "executive": 85,
        "composite": 82
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 84,
        "attention": 79,
        "executive": 84,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 86,
        "attention": 83,
        "executive": 85,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 90,
        "attention": 81,
        "executive": 84,
        "composite": 85
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 91,
        "attention": 83,
        "executive": 89,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 89,
        "attention": 87,
        "executive": 90,
        "composite": 89
      }
    ],
    "gameSessions": [
      {
        "id": "sess-19-1",
        "timestamp": "3 days ago at 13:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 99,
        "responseTimeMs": 1903,
        "errors": 2,
        "level": 2,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-19-2",
        "timestamp": "5 days ago at 17:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 94,
        "responseTimeMs": 3102,
        "errors": 3,
        "level": 5,
        "score": 95,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-19-3",
        "timestamp": "0 days ago at 15:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 89,
        "responseTimeMs": 1851,
        "errors": 0,
        "level": 2,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-20",
      "name": "Dolkar Angami",
      "age": 75,
      "gender": "Female",
      "location": "Itanagar, Arunachal Pradesh",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Neikho Angami (Niece)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "TRIHMS Itanagar",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-20-1",
        "name": "Neikho Angami",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Itanagar, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-20-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "TRIHMS Itanagar",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-20-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Itanagar, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-20-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-20-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Angami"
      },
      {
        "id": "rem-20-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Angami"
      },
      {
        "id": "rem-20-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Angami"
      },
      {
        "id": "rem-20-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-20-6",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-20-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-20-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Spring 2010",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-20-3",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-11"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 73,
        "attention": 75,
        "executive": 73,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 77,
        "attention": 77,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 80,
        "executive": 78,
        "composite": 79
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 79,
        "attention": 80,
        "executive": 79,
        "composite": 79
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 82,
        "attention": 86,
        "executive": 77,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 78,
        "attention": 82,
        "executive": 78,
        "composite": 79
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 81,
        "attention": 85,
        "executive": 79,
        "composite": 82
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 81,
        "attention": 87,
        "executive": 80,
        "composite": 83
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 82,
        "attention": 91,
        "executive": 84,
        "composite": 86
      }
    ],
    "gameSessions": [
      {
        "id": "sess-20-1",
        "timestamp": "3 days ago at 17:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 1963,
        "errors": 4,
        "level": 1,
        "score": 84,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-20-2",
        "timestamp": "2 days ago at 16:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 92,
        "responseTimeMs": 3307,
        "errors": 4,
        "level": 2,
        "score": 95,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-20-3",
        "timestamp": "6 days ago at 11:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 78,
        "responseTimeMs": 1632,
        "errors": 3,
        "level": 3,
        "score": 81,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-20-4",
        "timestamp": "6 days ago at 09:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 93,
        "responseTimeMs": 3908,
        "errors": 2,
        "level": 5,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-20-5",
        "timestamp": "6 days ago at 11:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 85,
        "responseTimeMs": 3835,
        "errors": 2,
        "level": 5,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-21",
      "name": "Rose Debbarma",
      "age": 66,
      "gender": "Female",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Kevi Debbarma (Daughter)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-21-1",
        "name": "Kevi Debbarma",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-21-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-21-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-21-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kevi Debbarma"
      },
      {
        "id": "rem-21-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-21-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kevi Debbarma"
      },
      {
        "id": "rem-21-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kevi Debbarma"
      },
      {
        "id": "rem-21-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kevi Debbarma"
      }
    ],
    "memories": [
      {
        "id": "mem-21-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-21-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-26"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 69,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 64,
        "executive": 63,
        "composite": 66
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 63,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 66,
        "attention": 62,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 65,
        "attention": 59,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 63,
        "attention": 61,
        "executive": 55,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 61,
        "attention": 59,
        "executive": 58,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 58,
        "attention": 57,
        "executive": 53,
        "composite": 56
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 55,
        "attention": 52,
        "executive": 53,
        "composite": 53
      }
    ],
    "gameSessions": [
      {
        "id": "sess-21-1",
        "timestamp": "0 days ago at 14:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 43,
        "responseTimeMs": 2437,
        "errors": 3,
        "level": 1,
        "score": 41,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-21-2",
        "timestamp": "2 days ago at 12:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 59,
        "responseTimeMs": 2045,
        "errors": 1,
        "level": 1,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-21-3",
        "timestamp": "1 days ago at 15:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 54,
        "responseTimeMs": 4072,
        "errors": 1,
        "level": 4,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-21-4",
        "timestamp": "0 days ago at 09:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 57,
        "responseTimeMs": 3914,
        "errors": 3,
        "level": 3,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-21-5",
        "timestamp": "2 days ago at 18:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 49,
        "responseTimeMs": 3961,
        "errors": 4,
        "level": 5,
        "score": 45,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-21-6",
        "timestamp": "6 days ago at 18:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 59,
        "responseTimeMs": 3985,
        "errors": 4,
        "level": 2,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-22",
      "name": "Dolkar Bora",
      "age": 86,
      "gender": "Female",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Ongbi Bora (Nephew)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-22-1",
        "name": "Ongbi Bora",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-22-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-22-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-22-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Bora"
      },
      {
        "id": "rem-22-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Bora"
      },
      {
        "id": "rem-22-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-22-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Bora"
      }
    ],
    "memories": [
      {
        "id": "mem-22-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-22-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-22-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-11"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 69,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 65,
        "executive": 60,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 65,
        "attention": 65,
        "executive": 57,
        "composite": 62
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 63,
        "attention": 61,
        "executive": 55,
        "composite": 60
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 59,
        "executive": 57,
        "composite": 59
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 64,
        "attention": 63,
        "executive": 52,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 60,
        "attention": 58,
        "executive": 51,
        "composite": 56
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 57,
        "attention": 59,
        "executive": 52,
        "composite": 56
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 60,
        "attention": 56,
        "executive": 53,
        "composite": 56
      }
    ],
    "gameSessions": [
      {
        "id": "sess-22-1",
        "timestamp": "1 days ago at 10:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 47,
        "responseTimeMs": 4185,
        "errors": 3,
        "level": 2,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-22-2",
        "timestamp": "2 days ago at 12:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 51,
        "responseTimeMs": 1989,
        "errors": 4,
        "level": 1,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-22-3",
        "timestamp": "0 days ago at 14:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 50,
        "responseTimeMs": 2656,
        "errors": 2,
        "level": 3,
        "score": 50,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-23",
      "name": "Sengphan Rai",
      "age": 61,
      "gender": "Male",
      "location": "Imphal, Manipur",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Imliakum Rai (Nephew)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "RIMS Imphal",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-23-1",
        "name": "Imliakum Rai",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Imphal, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-23-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "RIMS Imphal",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-23-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Imphal, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-23-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-23-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Imliakum Rai"
      },
      {
        "id": "rem-23-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-23-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Imliakum Rai"
      },
      {
        "id": "rem-23-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-23-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Autumn 2014",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-23-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-24"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 81,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 82,
        "attention": 80,
        "executive": 72,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 81,
        "executive": 75,
        "composite": 78
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 77,
        "attention": 76,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 77,
        "attention": 75,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 74,
        "attention": 74,
        "executive": 66,
        "composite": 71
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 73,
        "attention": 72,
        "executive": 63,
        "composite": 69
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 70,
        "attention": 71,
        "executive": 61,
        "composite": 67
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 68,
        "attention": 70,
        "executive": 62,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-23-1",
        "timestamp": "1 days ago at 09:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 66,
        "responseTimeMs": 2410,
        "errors": 1,
        "level": 2,
        "score": 69,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-23-2",
        "timestamp": "5 days ago at 09:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 64,
        "responseTimeMs": 1807,
        "errors": 0,
        "level": 1,
        "score": 65,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-23-3",
        "timestamp": "1 days ago at 09:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 75,
        "responseTimeMs": 3388,
        "errors": 0,
        "level": 2,
        "score": 74,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-23-4",
        "timestamp": "3 days ago at 08:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 66,
        "responseTimeMs": 2207,
        "errors": 2,
        "level": 2,
        "score": 68,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-24",
      "name": "Lalrinawma Ralte",
      "age": 75,
      "gender": "Male",
      "location": "Silchar, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Bipul Ralte (Niece)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-24-1",
        "name": "Bipul Ralte",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-24-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-24-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-24-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bipul Ralte"
      },
      {
        "id": "rem-24-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-24-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-24-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bipul Ralte"
      }
    ],
    "memories": [
      {
        "id": "mem-24-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-24-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-21"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 75,
        "executive": 82,
        "composite": 79
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 77,
        "executive": 83,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 81,
        "attention": 80,
        "executive": 81,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 85,
        "attention": 83,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 87,
        "attention": 85,
        "executive": 84,
        "composite": 85
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 83,
        "attention": 83,
        "executive": 88,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 88,
        "attention": 85,
        "executive": 88,
        "composite": 87
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 90,
        "attention": 90,
        "executive": 92,
        "composite": 91
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 90,
        "attention": 91,
        "executive": 93,
        "composite": 91
      }
    ],
    "gameSessions": [
      {
        "id": "sess-24-1",
        "timestamp": "1 days ago at 10:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 83,
        "responseTimeMs": 3495,
        "errors": 2,
        "level": 2,
        "score": 81,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-24-2",
        "timestamp": "4 days ago at 13:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 2218,
        "errors": 3,
        "level": 3,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-24-3",
        "timestamp": "5 days ago at 08:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 95,
        "responseTimeMs": 3824,
        "errors": 0,
        "level": 2,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-24-4",
        "timestamp": "4 days ago at 11:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 87,
        "responseTimeMs": 2076,
        "errors": 2,
        "level": 1,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-24-5",
        "timestamp": "5 days ago at 09:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 88,
        "responseTimeMs": 2586,
        "errors": 1,
        "level": 2,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-24-6",
        "timestamp": "0 days ago at 08:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 82,
        "responseTimeMs": 3218,
        "errors": 1,
        "level": 4,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-25",
      "name": "Rukmini Lotha",
      "age": 72,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Probin Lotha (Daughter)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-25-1",
        "name": "Probin Lotha",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-25-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-25-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-25-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-25-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Probin Lotha"
      },
      {
        "id": "rem-25-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-25-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-25-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-25-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Probin Lotha"
      }
    ],
    "memories": [
      {
        "id": "mem-25-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-25-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Monsoon 2012",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-25-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Monsoon 2012",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-29"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 83,
        "executive": 76,
        "composite": 80
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 79,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 84,
        "executive": 76,
        "composite": 79
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 77,
        "attention": 82,
        "executive": 76,
        "composite": 78
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 82,
        "attention": 82,
        "executive": 77,
        "composite": 80
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 81,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 82,
        "attention": 81,
        "executive": 75,
        "composite": 79
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 82,
        "attention": 82,
        "executive": 73,
        "composite": 79
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 81,
        "attention": 78,
        "executive": 72,
        "composite": 77
      }
    ],
    "gameSessions": [
      {
        "id": "sess-25-1",
        "timestamp": "1 days ago at 11:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 3234,
        "errors": 0,
        "level": 4,
        "score": 85,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-25-2",
        "timestamp": "6 days ago at 17:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 1774,
        "errors": 0,
        "level": 4,
        "score": 88,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-25-3",
        "timestamp": "2 days ago at 16:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 1550,
        "errors": 4,
        "level": 5,
        "score": 73,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-25-4",
        "timestamp": "1 days ago at 10:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 83,
        "responseTimeMs": 3804,
        "errors": 0,
        "level": 3,
        "score": 79,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-26",
      "name": "Rukmini Meitei",
      "age": 69,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Bhim Bahadur Meitei (Daughter-in-law)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-26-1",
        "name": "Bhim Bahadur Meitei",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-26-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-26-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-26-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Meitei"
      },
      {
        "id": "rem-26-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Meitei"
      },
      {
        "id": "rem-26-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Meitei"
      },
      {
        "id": "rem-26-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-26-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Meitei"
      }
    ],
    "memories": [
      {
        "id": "mem-26-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-26-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 72,
        "attention": 75,
        "executive": 75,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 73,
        "attention": 75,
        "executive": 78,
        "composite": 75
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 78,
        "executive": 74,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 73,
        "attention": 78,
        "executive": 75,
        "composite": 75
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 80,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 78,
        "attention": 82,
        "executive": 80,
        "composite": 80
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 79,
        "attention": 80,
        "executive": 84,
        "composite": 81
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 82,
        "executive": 81,
        "composite": 82
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 87,
        "attention": 86,
        "executive": 84,
        "composite": 86
      }
    ],
    "gameSessions": [
      {
        "id": "sess-26-1",
        "timestamp": "5 days ago at 18:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 92,
        "responseTimeMs": 3042,
        "errors": 2,
        "level": 4,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-26-2",
        "timestamp": "4 days ago at 17:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 80,
        "responseTimeMs": 1530,
        "errors": 4,
        "level": 3,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-26-3",
        "timestamp": "2 days ago at 18:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 89,
        "responseTimeMs": 2877,
        "errors": 2,
        "level": 3,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-26-4",
        "timestamp": "5 days ago at 12:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 81,
        "responseTimeMs": 2484,
        "errors": 0,
        "level": 5,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-26-5",
        "timestamp": "5 days ago at 08:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 89,
        "responseTimeMs": 2562,
        "errors": 3,
        "level": 4,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-27",
      "name": "Ibetombi Gogoi",
      "age": 79,
      "gender": "Female",
      "location": "Itanagar, Arunachal Pradesh",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Pema Gogoi (Daughter-in-law)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "TRIHMS Itanagar",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-27-1",
        "name": "Pema Gogoi",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Itanagar, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-27-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "TRIHMS Itanagar",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-27-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Itanagar, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-27-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-27-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-27-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pema Gogoi"
      },
      {
        "id": "rem-27-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pema Gogoi"
      },
      {
        "id": "rem-27-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pema Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-27-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Autumn 2014",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-27-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-26"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 72,
        "attention": 74,
        "executive": 63,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 72,
        "executive": 67,
        "composite": 70
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 75,
        "attention": 77,
        "executive": 65,
        "composite": 72
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 72,
        "attention": 78,
        "executive": 69,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 80,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 78,
        "attention": 81,
        "executive": 71,
        "composite": 77
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 76,
        "attention": 82,
        "executive": 70,
        "composite": 76
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 79,
        "attention": 80,
        "executive": 71,
        "composite": 77
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 80,
        "attention": 84,
        "executive": 74,
        "composite": 79
      }
    ],
    "gameSessions": [
      {
        "id": "sess-27-1",
        "timestamp": "2 days ago at 15:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 70,
        "responseTimeMs": 2048,
        "errors": 2,
        "level": 4,
        "score": 65,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-27-2",
        "timestamp": "6 days ago at 14:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 84,
        "responseTimeMs": 2037,
        "errors": 1,
        "level": 1,
        "score": 81,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-27-3",
        "timestamp": "5 days ago at 18:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 79,
        "responseTimeMs": 4122,
        "errors": 2,
        "level": 5,
        "score": 75,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-27-4",
        "timestamp": "5 days ago at 09:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 70,
        "responseTimeMs": 1974,
        "errors": 3,
        "level": 4,
        "score": 75,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-27-5",
        "timestamp": "5 days ago at 10:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 71,
        "responseTimeMs": 4081,
        "errors": 0,
        "level": 3,
        "score": 69,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-28",
      "name": "Ongbi Kalita",
      "age": 82,
      "gender": "Female",
      "location": "Gangtok, Sikkim",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Tek Kalita (Grandson)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "STNM Hospital Gangtok",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-28-1",
        "name": "Tek Kalita",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Gangtok, Sikkim",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-28-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "STNM Hospital Gangtok",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-28-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Gangtok, Sikkim Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-28-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-28-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-28-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-28-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tek Kalita"
      }
    ],
    "memories": [
      {
        "id": "mem-28-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-28-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-11"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 75,
        "executive": 77,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 80,
        "attention": 79,
        "executive": 83,
        "composite": 81
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 83,
        "attention": 82,
        "executive": 79,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 86,
        "attention": 83,
        "executive": 82,
        "composite": 84
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 89,
        "attention": 84,
        "executive": 88,
        "composite": 87
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 87,
        "attention": 88,
        "executive": 87,
        "composite": 87
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 88,
        "attention": 83,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 91,
        "attention": 90,
        "executive": 88,
        "composite": 90
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 90,
        "attention": 89,
        "executive": 92,
        "composite": 90
      }
    ],
    "gameSessions": [
      {
        "id": "sess-28-1",
        "timestamp": "6 days ago at 18:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 93,
        "responseTimeMs": 2885,
        "errors": 4,
        "level": 5,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-28-2",
        "timestamp": "5 days ago at 11:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 94,
        "responseTimeMs": 4127,
        "errors": 3,
        "level": 2,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-28-3",
        "timestamp": "0 days ago at 18:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 98,
        "responseTimeMs": 3422,
        "errors": 3,
        "level": 2,
        "score": 99,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-29",
      "name": "Tek Sema",
      "age": 68,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Malsawmi Sema (Daughter-in-law)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-29-1",
        "name": "Malsawmi Sema",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-29-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-29-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-29-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-29-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Malsawmi Sema"
      },
      {
        "id": "rem-29-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Malsawmi Sema"
      },
      {
        "id": "rem-29-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Malsawmi Sema"
      },
      {
        "id": "rem-29-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-29-6",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-29-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-19"
      },
      {
        "id": "mem-29-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-29-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-23"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 69,
        "executive": 63,
        "composite": 66
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 67,
        "attention": 65,
        "executive": 59,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 66,
        "attention": 63,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 64,
        "executive": 56,
        "composite": 60
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 62,
        "attention": 62,
        "executive": 55,
        "composite": 60
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 60,
        "attention": 62,
        "executive": 54,
        "composite": 59
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 56,
        "attention": 61,
        "executive": 55,
        "composite": 57
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 58,
        "attention": 57,
        "executive": 49,
        "composite": 55
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 55,
        "attention": 59,
        "executive": 52,
        "composite": 55
      }
    ],
    "gameSessions": [
      {
        "id": "sess-29-1",
        "timestamp": "5 days ago at 16:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 56,
        "responseTimeMs": 4056,
        "errors": 2,
        "level": 3,
        "score": 54,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-29-2",
        "timestamp": "1 days ago at 16:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 48,
        "responseTimeMs": 2942,
        "errors": 4,
        "level": 4,
        "score": 50,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-29-3",
        "timestamp": "3 days ago at 18:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 56,
        "responseTimeMs": 3230,
        "errors": 0,
        "level": 5,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-29-4",
        "timestamp": "5 days ago at 08:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 46,
        "responseTimeMs": 2159,
        "errors": 2,
        "level": 3,
        "score": 42,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-29-5",
        "timestamp": "2 days ago at 11:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 62,
        "responseTimeMs": 3353,
        "errors": 0,
        "level": 5,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-30",
      "name": "Sengphan Lotha",
      "age": 68,
      "gender": "Male",
      "location": "Gangtok, Sikkim",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Nokseng Lotha (Daughter-in-law)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "STNM Hospital Gangtok",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-30-1",
        "name": "Nokseng Lotha",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Gangtok, Sikkim",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-30-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "STNM Hospital Gangtok",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-30-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Gangtok, Sikkim Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-30-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Lotha"
      },
      {
        "id": "rem-30-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-30-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-30-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-30-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-30-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Lotha"
      }
    ],
    "memories": [
      {
        "id": "mem-30-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-30-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-30-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-16"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 67,
        "executive": 63,
        "composite": 65
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 68,
        "attention": 68,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 67,
        "attention": 64,
        "executive": 68,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 69,
        "attention": 66,
        "executive": 71,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 68,
        "attention": 66,
        "executive": 71,
        "composite": 68
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 67,
        "executive": 71,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 71,
        "attention": 74,
        "executive": 71,
        "composite": 72
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 74,
        "attention": 75,
        "executive": 75,
        "composite": 75
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 75,
        "attention": 76,
        "executive": 73,
        "composite": 75
      }
    ],
    "gameSessions": [
      {
        "id": "sess-30-1",
        "timestamp": "4 days ago at 14:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 73,
        "responseTimeMs": 2129,
        "errors": 0,
        "level": 4,
        "score": 69,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-30-2",
        "timestamp": "0 days ago at 10:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 72,
        "responseTimeMs": 3855,
        "errors": 1,
        "level": 3,
        "score": 68,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-30-3",
        "timestamp": "3 days ago at 13:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 73,
        "responseTimeMs": 1984,
        "errors": 4,
        "level": 1,
        "score": 74,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-30-4",
        "timestamp": "5 days ago at 17:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 79,
        "responseTimeMs": 1797,
        "errors": 2,
        "level": 5,
        "score": 75,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-31",
      "name": "Vanlalruata Ao",
      "age": 80,
      "gender": "Male",
      "location": "Guwahati, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Rose Ao (Granddaughter)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "GMCH Guwahati",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-31-1",
        "name": "Rose Ao",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Guwahati, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-31-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "GMCH Guwahati",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-31-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Guwahati, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-31-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-31-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-31-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-31-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-31-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-31-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-15"
      },
      {
        "id": "mem-31-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 73,
        "attention": 72,
        "executive": 75,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 72,
        "executive": 76,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 78,
        "executive": 75,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 80,
        "attention": 76,
        "executive": 79,
        "composite": 78
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 79,
        "attention": 78,
        "executive": 78,
        "composite": 78
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 82,
        "attention": 77,
        "executive": 80,
        "composite": 80
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 81,
        "attention": 79,
        "executive": 86,
        "composite": 82
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 84,
        "executive": 85,
        "composite": 84
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 83,
        "attention": 86,
        "executive": 85,
        "composite": 85
      }
    ],
    "gameSessions": [
      {
        "id": "sess-31-1",
        "timestamp": "5 days ago at 18:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 93,
        "responseTimeMs": 1576,
        "errors": 4,
        "level": 1,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-31-2",
        "timestamp": "1 days ago at 08:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 87,
        "responseTimeMs": 3710,
        "errors": 3,
        "level": 2,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-31-3",
        "timestamp": "4 days ago at 12:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 83,
        "responseTimeMs": 3590,
        "errors": 0,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-31-4",
        "timestamp": "6 days ago at 17:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 85,
        "responseTimeMs": 2074,
        "errors": 3,
        "level": 2,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-31-5",
        "timestamp": "6 days ago at 10:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 1665,
        "errors": 1,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-32",
      "name": "Anil Chhangte",
      "age": 72,
      "gender": "Male",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Anjali Chhangte (Grandson)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-32-1",
        "name": "Anjali Chhangte",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-32-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-32-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-32-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Chhangte"
      },
      {
        "id": "rem-32-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-32-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-32-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Chhangte"
      },
      {
        "id": "rem-32-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-32-6",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Chhangte"
      }
    ],
    "memories": [
      {
        "id": "mem-32-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Autumn 2014",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-32-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-15"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 80,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 77,
        "attention": 82,
        "executive": 73,
        "composite": 77
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 79,
        "attention": 87,
        "executive": 74,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 84,
        "attention": 87,
        "executive": 73,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 85,
        "attention": 85,
        "executive": 75,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 86,
        "attention": 87,
        "executive": 81,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 87,
        "executive": 77,
        "composite": 83
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 91,
        "attention": 92,
        "executive": 81,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 91,
        "executive": 85,
        "composite": 88
      }
    ],
    "gameSessions": [
      {
        "id": "sess-32-1",
        "timestamp": "4 days ago at 16:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 90,
        "responseTimeMs": 4200,
        "errors": 1,
        "level": 5,
        "score": 94,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-32-2",
        "timestamp": "6 days ago at 18:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 95,
        "responseTimeMs": 3017,
        "errors": 0,
        "level": 5,
        "score": 99,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-32-3",
        "timestamp": "6 days ago at 14:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 83,
        "responseTimeMs": 3859,
        "errors": 0,
        "level": 4,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-32-4",
        "timestamp": "6 days ago at 09:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 83,
        "responseTimeMs": 3727,
        "errors": 3,
        "level": 3,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-32-5",
        "timestamp": "0 days ago at 17:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 78,
        "responseTimeMs": 3036,
        "errors": 1,
        "level": 3,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-32-6",
        "timestamp": "5 days ago at 17:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 85,
        "responseTimeMs": 3695,
        "errors": 3,
        "level": 5,
        "score": 82,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-33",
      "name": "Rose Ralte",
      "age": 82,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Akum Ralte (Niece)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-33-1",
        "name": "Akum Ralte",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-33-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-33-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-33-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-33-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akum Ralte"
      },
      {
        "id": "rem-33-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-33-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-33-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akum Ralte"
      },
      {
        "id": "rem-33-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-33-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-33-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-33-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-22"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 87,
        "executive": 82,
        "composite": 83
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 81,
        "attention": 83,
        "executive": 84,
        "composite": 83
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 85,
        "attention": 89,
        "executive": 84,
        "composite": 86
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 87,
        "attention": 85,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 88,
        "attention": 86,
        "executive": 86,
        "composite": 87
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 89,
        "attention": 89,
        "executive": 85,
        "composite": 88
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 87,
        "attention": 92,
        "executive": 86,
        "composite": 88
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 89,
        "attention": 94,
        "executive": 93,
        "composite": 92
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 93,
        "attention": 97,
        "executive": 91,
        "composite": 94
      }
    ],
    "gameSessions": [
      {
        "id": "sess-33-1",
        "timestamp": "3 days ago at 18:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 99,
        "responseTimeMs": 1612,
        "errors": 3,
        "level": 1,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-33-2",
        "timestamp": "1 days ago at 18:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 85,
        "responseTimeMs": 3189,
        "errors": 2,
        "level": 5,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-33-3",
        "timestamp": "1 days ago at 12:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 84,
        "responseTimeMs": 2900,
        "errors": 0,
        "level": 5,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-33-4",
        "timestamp": "4 days ago at 12:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 94,
        "responseTimeMs": 2278,
        "errors": 3,
        "level": 2,
        "score": 93,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-33-5",
        "timestamp": "1 days ago at 11:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 99,
        "responseTimeMs": 4033,
        "errors": 2,
        "level": 2,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-33-6",
        "timestamp": "5 days ago at 15:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 3717,
        "errors": 0,
        "level": 4,
        "score": 82,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-34",
      "name": "Rose Sema",
      "age": 76,
      "gender": "Female",
      "location": "Lunglei, Mizoram",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Puspa Sema (Son)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Lunglei District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-34-1",
        "name": "Puspa Sema",
        "relationship": "Son (Primary Caregiver)",
        "location": "Lunglei, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-34-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Lunglei District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-34-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Lunglei, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-34-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-34-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-34-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Sema"
      },
      {
        "id": "rem-34-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Sema"
      },
      {
        "id": "rem-34-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      }
    ],
    "memories": [
      {
        "id": "mem-34-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-34-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-22"
      },
      {
        "id": "mem-34-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-19"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 77,
        "executive": 81,
        "composite": 79
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 77,
        "attention": 76,
        "executive": 79,
        "composite": 77
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 79,
        "attention": 74,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 74,
        "attention": 74,
        "executive": 74,
        "composite": 74
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 75,
        "attention": 74,
        "executive": 76,
        "composite": 75
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 69,
        "attention": 71,
        "executive": 72,
        "composite": 71
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 69,
        "attention": 70,
        "executive": 71,
        "composite": 70
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 70,
        "attention": 69,
        "executive": 72,
        "composite": 70
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 67,
        "executive": 66,
        "composite": 66
      }
    ],
    "gameSessions": [
      {
        "id": "sess-34-1",
        "timestamp": "5 days ago at 13:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3841,
        "errors": 3,
        "level": 1,
        "score": 79,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-34-2",
        "timestamp": "2 days ago at 18:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 59,
        "responseTimeMs": 3979,
        "errors": 3,
        "level": 3,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-34-3",
        "timestamp": "5 days ago at 17:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 2253,
        "errors": 0,
        "level": 2,
        "score": 76,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-34-4",
        "timestamp": "5 days ago at 09:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 1921,
        "errors": 0,
        "level": 1,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-34-5",
        "timestamp": "3 days ago at 16:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 67,
        "responseTimeMs": 4031,
        "errors": 1,
        "level": 1,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-34-6",
        "timestamp": "1 days ago at 11:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 2017,
        "errors": 1,
        "level": 5,
        "score": 74,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-35",
      "name": "Hemanta Gogoi",
      "age": 82,
      "gender": "Male",
      "location": "Imphal, Manipur",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Radheshyam Gogoi (Niece)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "RIMS Imphal",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-35-1",
        "name": "Radheshyam Gogoi",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Imphal, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-35-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "RIMS Imphal",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-35-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Imphal, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-35-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Gogoi"
      },
      {
        "id": "rem-35-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Gogoi"
      },
      {
        "id": "rem-35-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Gogoi"
      },
      {
        "id": "rem-35-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-35-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Winter 2008",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-35-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-25"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 77,
        "attention": 71,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 79,
        "attention": 69,
        "executive": 68,
        "composite": 72
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 71,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 77,
        "attention": 71,
        "executive": 71,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 71,
        "executive": 71,
        "composite": 73
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 77,
        "attention": 74,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 78,
        "attention": 75,
        "executive": 67,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 75,
        "attention": 71,
        "executive": 66,
        "composite": 71
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 76,
        "attention": 74,
        "executive": 65,
        "composite": 72
      }
    ],
    "gameSessions": [
      {
        "id": "sess-35-1",
        "timestamp": "0 days ago at 10:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 76,
        "responseTimeMs": 3107,
        "errors": 0,
        "level": 5,
        "score": 71,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-35-2",
        "timestamp": "2 days ago at 14:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 66,
        "responseTimeMs": 2519,
        "errors": 3,
        "level": 4,
        "score": 70,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-35-3",
        "timestamp": "3 days ago at 09:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 77,
        "responseTimeMs": 2778,
        "errors": 2,
        "level": 2,
        "score": 72,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-35-4",
        "timestamp": "4 days ago at 16:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 77,
        "responseTimeMs": 4115,
        "errors": 2,
        "level": 2,
        "score": 79,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-35-5",
        "timestamp": "1 days ago at 09:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 80,
        "responseTimeMs": 2829,
        "errors": 0,
        "level": 2,
        "score": 84,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-36",
      "name": "Vimenuo Deka",
      "age": 73,
      "gender": "Female",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Rose Deka (Daughter-in-law)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-36-1",
        "name": "Rose Deka",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-36-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-36-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-36-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rose Deka"
      },
      {
        "id": "rem-36-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rose Deka"
      },
      {
        "id": "rem-36-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-36-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rose Deka"
      },
      {
        "id": "rem-36-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-36-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Autumn 2014",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-36-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-36-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Autumn 2014",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 75,
        "attention": 78,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 76,
        "attention": 75,
        "executive": 72,
        "composite": 74
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 79,
        "attention": 75,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 80,
        "attention": 77,
        "executive": 73,
        "composite": 77
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 76,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 76,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 76,
        "attention": 75,
        "executive": 69,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 77,
        "attention": 78,
        "executive": 75,
        "composite": 77
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 79,
        "attention": 78,
        "executive": 73,
        "composite": 77
      }
    ],
    "gameSessions": [
      {
        "id": "sess-36-1",
        "timestamp": "2 days ago at 16:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 76,
        "responseTimeMs": 1738,
        "errors": 4,
        "level": 3,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-36-2",
        "timestamp": "2 days ago at 09:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 68,
        "responseTimeMs": 1897,
        "errors": 0,
        "level": 2,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-36-3",
        "timestamp": "5 days ago at 11:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3786,
        "errors": 3,
        "level": 1,
        "score": 72,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-36-4",
        "timestamp": "5 days ago at 18:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 79,
        "responseTimeMs": 2183,
        "errors": 1,
        "level": 5,
        "score": 81,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-36-5",
        "timestamp": "4 days ago at 17:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 77,
        "responseTimeMs": 2790,
        "errors": 4,
        "level": 3,
        "score": 79,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-36-6",
        "timestamp": "6 days ago at 13:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 75,
        "responseTimeMs": 2376,
        "errors": 3,
        "level": 5,
        "score": 76,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-37",
      "name": "Pema Devi",
      "age": 75,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Wangba Devi (Daughter)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-37-1",
        "name": "Wangba Devi",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-37-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-37-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-37-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Devi"
      },
      {
        "id": "rem-37-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Devi"
      },
      {
        "id": "rem-37-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-37-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-37-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-37-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-22"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 90,
        "attention": 90,
        "executive": 80,
        "composite": 87
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 87,
        "attention": 89,
        "executive": 82,
        "composite": 86
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 91,
        "attention": 93,
        "executive": 87,
        "composite": 90
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 92,
        "attention": 95,
        "executive": 86,
        "composite": 91
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 90,
        "attention": 96,
        "executive": 84,
        "composite": 90
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 93,
        "attention": 96,
        "executive": 88,
        "composite": 92
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 93,
        "attention": 98,
        "executive": 87,
        "composite": 93
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 95,
        "attention": 98,
        "executive": 89,
        "composite": 94
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 96,
        "attention": 97,
        "executive": 91,
        "composite": 95
      }
    ],
    "gameSessions": [
      {
        "id": "sess-37-1",
        "timestamp": "1 days ago at 11:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 97,
        "responseTimeMs": 3261,
        "errors": 2,
        "level": 5,
        "score": 99,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-37-2",
        "timestamp": "2 days ago at 13:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 3932,
        "errors": 0,
        "level": 3,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-37-3",
        "timestamp": "6 days ago at 15:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 100,
        "responseTimeMs": 2456,
        "errors": 1,
        "level": 3,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-37-4",
        "timestamp": "0 days ago at 08:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 100,
        "responseTimeMs": 2104,
        "errors": 2,
        "level": 1,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-38",
      "name": "Thoibi Deka",
      "age": 70,
      "gender": "Female",
      "location": "Tura, Meghalaya",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Rukmini Deka (Nephew)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Tura Civil Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-38-1",
        "name": "Rukmini Deka",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Tura, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-38-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Tura Civil Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-38-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tura, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-38-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Deka"
      },
      {
        "id": "rem-38-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-38-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-38-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Deka"
      }
    ],
    "memories": [
      {
        "id": "mem-38-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-38-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Autumn 2014",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-19"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 66,
        "attention": 69,
        "executive": 60,
        "composite": 65
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 65,
        "attention": 67,
        "executive": 58,
        "composite": 63
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 61,
        "attention": 66,
        "executive": 57,
        "composite": 61
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 58,
        "attention": 61,
        "executive": 57,
        "composite": 59
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 61,
        "attention": 64,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 57,
        "attention": 59,
        "executive": 55,
        "composite": 57
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 59,
        "attention": 58,
        "executive": 54,
        "composite": 57
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 53,
        "attention": 57,
        "executive": 52,
        "composite": 54
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 51,
        "attention": 58,
        "executive": 49,
        "composite": 53
      }
    ],
    "gameSessions": [
      {
        "id": "sess-38-1",
        "timestamp": "1 days ago at 18:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 63,
        "responseTimeMs": 3782,
        "errors": 4,
        "level": 1,
        "score": 68,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-38-2",
        "timestamp": "5 days ago at 08:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 49,
        "responseTimeMs": 3195,
        "errors": 3,
        "level": 3,
        "score": 53,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-38-3",
        "timestamp": "5 days ago at 12:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 1937,
        "errors": 1,
        "level": 2,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-38-4",
        "timestamp": "2 days ago at 17:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 58,
        "responseTimeMs": 2445,
        "errors": 0,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-39",
      "name": "Bhim Bahadur Saikia",
      "age": 77,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Neikho Saikia (Grandson)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-39-1",
        "name": "Neikho Saikia",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-39-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-39-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-39-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-39-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Saikia"
      },
      {
        "id": "rem-39-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Saikia"
      },
      {
        "id": "rem-39-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-39-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-39-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-15"
      },
      {
        "id": "mem-39-3",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-27"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 75,
        "executive": 69,
        "composite": 71
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 71,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 70,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 66,
        "attention": 69,
        "executive": 60,
        "composite": 65
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 62,
        "attention": 63,
        "executive": 63,
        "composite": 63
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 66,
        "attention": 65,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 62,
        "attention": 65,
        "executive": 58,
        "composite": 62
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 62,
        "attention": 62,
        "executive": 56,
        "composite": 60
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 57,
        "attention": 57,
        "executive": 56,
        "composite": 57
      }
    ],
    "gameSessions": [
      {
        "id": "sess-39-1",
        "timestamp": "4 days ago at 18:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 62,
        "responseTimeMs": 2092,
        "errors": 1,
        "level": 1,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-39-2",
        "timestamp": "3 days ago at 12:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 53,
        "responseTimeMs": 2038,
        "errors": 1,
        "level": 1,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-39-3",
        "timestamp": "3 days ago at 15:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 62,
        "responseTimeMs": 3521,
        "errors": 1,
        "level": 2,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-39-4",
        "timestamp": "3 days ago at 09:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 60,
        "responseTimeMs": 3741,
        "errors": 2,
        "level": 5,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-39-5",
        "timestamp": "0 days ago at 10:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 58,
        "responseTimeMs": 2929,
        "errors": 0,
        "level": 2,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-39-6",
        "timestamp": "2 days ago at 13:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 60,
        "responseTimeMs": 3207,
        "errors": 1,
        "level": 2,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-40",
      "name": "Rose Reang",
      "age": 86,
      "gender": "Female",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Rigzin Reang (Daughter)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-40-1",
        "name": "Rigzin Reang",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-40-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-40-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-40-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-40-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rigzin Reang"
      },
      {
        "id": "rem-40-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-40-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-40-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-40-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-40-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-27"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 67,
        "attention": 71,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 74,
        "executive": 70,
        "composite": 72
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 74,
        "attention": 76,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 73,
        "attention": 75,
        "executive": 68,
        "composite": 72
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 79,
        "executive": 74,
        "composite": 76
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 74,
        "attention": 78,
        "executive": 74,
        "composite": 75
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 74,
        "attention": 80,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 77,
        "attention": 84,
        "executive": 74,
        "composite": 78
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 79,
        "attention": 81,
        "executive": 79,
        "composite": 80
      }
    ],
    "gameSessions": [
      {
        "id": "sess-40-1",
        "timestamp": "6 days ago at 13:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 82,
        "responseTimeMs": 2648,
        "errors": 0,
        "level": 3,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-40-2",
        "timestamp": "4 days ago at 17:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 83,
        "responseTimeMs": 1978,
        "errors": 2,
        "level": 3,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-40-3",
        "timestamp": "3 days ago at 11:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 71,
        "responseTimeMs": 2739,
        "errors": 1,
        "level": 5,
        "score": 70,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-41",
      "name": "Meenakshi Deka",
      "age": 72,
      "gender": "Female",
      "location": "Tezpur, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Pema Deka (Daughter)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Tezpur Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-41-1",
        "name": "Pema Deka",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Tezpur, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-41-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Tezpur Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-41-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tezpur, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-41-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pema Deka"
      },
      {
        "id": "rem-41-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-41-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pema Deka"
      },
      {
        "id": "rem-41-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-41-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-41-6",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-41-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Monsoon 2012",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-41-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-22"
      },
      {
        "id": "mem-41-3",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Autumn 2014",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 79,
        "executive": 68,
        "composite": 72
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 77,
        "executive": 66,
        "composite": 71
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 68,
        "attention": 76,
        "executive": 66,
        "composite": 70
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 67,
        "attention": 75,
        "executive": 67,
        "composite": 70
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 72,
        "attention": 75,
        "executive": 64,
        "composite": 70
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 72,
        "attention": 76,
        "executive": 65,
        "composite": 71
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 71,
        "attention": 75,
        "executive": 64,
        "composite": 70
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 71,
        "attention": 76,
        "executive": 63,
        "composite": 70
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 67,
        "attention": 73,
        "executive": 61,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-41-1",
        "timestamp": "0 days ago at 13:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 67,
        "responseTimeMs": 2199,
        "errors": 2,
        "level": 3,
        "score": 63,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-41-2",
        "timestamp": "3 days ago at 09:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 68,
        "responseTimeMs": 1790,
        "errors": 2,
        "level": 5,
        "score": 68,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-41-3",
        "timestamp": "4 days ago at 11:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 65,
        "responseTimeMs": 3072,
        "errors": 0,
        "level": 3,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-41-4",
        "timestamp": "6 days ago at 14:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 73,
        "responseTimeMs": 2467,
        "errors": 1,
        "level": 1,
        "score": 74,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-41-5",
        "timestamp": "3 days ago at 09:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 1899,
        "errors": 3,
        "level": 2,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-42",
      "name": "Tsering Baruah",
      "age": 80,
      "gender": "Female",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Toshi Baruah (Niece)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-42-1",
        "name": "Toshi Baruah",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-42-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-42-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-42-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-42-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-42-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Toshi Baruah"
      },
      {
        "id": "rem-42-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Toshi Baruah"
      },
      {
        "id": "rem-42-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Toshi Baruah"
      }
    ],
    "memories": [
      {
        "id": "mem-42-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-11"
      },
      {
        "id": "mem-42-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-42-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "2016",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-21"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 80,
        "executive": 71,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 76,
        "attention": 76,
        "executive": 72,
        "composite": 75
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 83,
        "executive": 75,
        "composite": 78
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 75,
        "attention": 79,
        "executive": 74,
        "composite": 76
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 78,
        "attention": 81,
        "executive": 79,
        "composite": 79
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 79,
        "attention": 81,
        "executive": 77,
        "composite": 79
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 81,
        "attention": 87,
        "executive": 82,
        "composite": 83
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 82,
        "attention": 89,
        "executive": 79,
        "composite": 83
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 82,
        "attention": 87,
        "executive": 84,
        "composite": 84
      }
    ],
    "gameSessions": [
      {
        "id": "sess-42-1",
        "timestamp": "1 days ago at 16:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 84,
        "responseTimeMs": 1820,
        "errors": 4,
        "level": 5,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-42-2",
        "timestamp": "5 days ago at 18:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 79,
        "responseTimeMs": 3708,
        "errors": 4,
        "level": 3,
        "score": 80,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-42-3",
        "timestamp": "6 days ago at 08:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3421,
        "errors": 4,
        "level": 3,
        "score": 73,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-43",
      "name": "Pema Lalrinliana",
      "age": 70,
      "gender": "Female",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Nirupama Lalrinliana (Niece)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-43-1",
        "name": "Nirupama Lalrinliana",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-43-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-43-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-43-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-43-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-43-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-43-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nirupama Lalrinliana"
      },
      {
        "id": "rem-43-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nirupama Lalrinliana"
      },
      {
        "id": "rem-43-6",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nirupama Lalrinliana"
      }
    ],
    "memories": [
      {
        "id": "mem-43-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-43-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-43-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-13"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 74,
        "attention": 82,
        "executive": 75,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 81,
        "executive": 80,
        "composite": 80
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 80,
        "attention": 85,
        "executive": 78,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 82,
        "attention": 82,
        "executive": 78,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 81,
        "attention": 83,
        "executive": 82,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 79,
        "attention": 90,
        "executive": 86,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 82,
        "attention": 91,
        "executive": 84,
        "composite": 86
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 92,
        "executive": 86,
        "composite": 87
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 91,
        "executive": 88,
        "composite": 89
      }
    ],
    "gameSessions": [
      {
        "id": "sess-43-1",
        "timestamp": "1 days ago at 08:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 83,
        "responseTimeMs": 1732,
        "errors": 4,
        "level": 2,
        "score": 81,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-43-2",
        "timestamp": "0 days ago at 09:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 92,
        "responseTimeMs": 4153,
        "errors": 4,
        "level": 2,
        "score": 94,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-43-3",
        "timestamp": "3 days ago at 18:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 93,
        "responseTimeMs": 2632,
        "errors": 3,
        "level": 3,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-43-4",
        "timestamp": "6 days ago at 08:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 82,
        "responseTimeMs": 1746,
        "errors": 2,
        "level": 3,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-43-5",
        "timestamp": "1 days ago at 17:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 88,
        "responseTimeMs": 3515,
        "errors": 0,
        "level": 2,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-43-6",
        "timestamp": "5 days ago at 09:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 94,
        "responseTimeMs": 1923,
        "errors": 0,
        "level": 1,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-44",
      "name": "Rebia Chhangte",
      "age": 85,
      "gender": "Male",
      "location": "Tura, Meghalaya",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Sonam Chhangte (Daughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Tura Civil Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-44-1",
        "name": "Sonam Chhangte",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Tura, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-44-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Tura Civil Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-44-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tura, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-44-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Chhangte"
      },
      {
        "id": "rem-44-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-44-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-44-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Chhangte"
      },
      {
        "id": "rem-44-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Chhangte"
      },
      {
        "id": "rem-44-6",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Chhangte"
      }
    ],
    "memories": [
      {
        "id": "mem-44-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-44-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Spring 2010",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-44-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-25"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 69,
        "attention": 68,
        "executive": 66,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 68,
        "attention": 69,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 68,
        "attention": 73,
        "executive": 64,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 71,
        "attention": 69,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 68,
        "attention": 67,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 71,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 70,
        "attention": 68,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 71,
        "attention": 68,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 69,
        "attention": 69,
        "executive": 64,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-44-1",
        "timestamp": "6 days ago at 18:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 73,
        "responseTimeMs": 3859,
        "errors": 4,
        "level": 2,
        "score": 72,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-44-2",
        "timestamp": "6 days ago at 08:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 74,
        "responseTimeMs": 1994,
        "errors": 2,
        "level": 2,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-44-3",
        "timestamp": "1 days ago at 15:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 60,
        "responseTimeMs": 1666,
        "errors": 1,
        "level": 1,
        "score": 59,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-44-4",
        "timestamp": "0 days ago at 15:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 69,
        "responseTimeMs": 2234,
        "errors": 0,
        "level": 5,
        "score": 72,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-45",
      "name": "Lalrinpuii Gurung",
      "age": 83,
      "gender": "Female",
      "location": "Silchar, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Bhim Bahadur Gurung (Daughter)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-45-1",
        "name": "Bhim Bahadur Gurung",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-45-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-45-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-45-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-45-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-45-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Gurung"
      },
      {
        "id": "rem-45-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhim Bahadur Gurung"
      }
    ],
    "memories": [
      {
        "id": "mem-45-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-45-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-23"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 67,
        "executive": 59,
        "composite": 64
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 65,
        "executive": 60,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 64,
        "attention": 68,
        "executive": 58,
        "composite": 63
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 64,
        "attention": 64,
        "executive": 58,
        "composite": 62
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 66,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 58,
        "attention": 62,
        "executive": 53,
        "composite": 58
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 60,
        "attention": 60,
        "executive": 52,
        "composite": 57
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 58,
        "attention": 62,
        "executive": 52,
        "composite": 57
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 53,
        "attention": 56,
        "executive": 54,
        "composite": 54
      }
    ],
    "gameSessions": [
      {
        "id": "sess-45-1",
        "timestamp": "1 days ago at 18:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 48,
        "responseTimeMs": 3764,
        "errors": 1,
        "level": 1,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-45-2",
        "timestamp": "1 days ago at 17:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 61,
        "responseTimeMs": 2643,
        "errors": 0,
        "level": 4,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-45-3",
        "timestamp": "3 days ago at 17:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 3923,
        "errors": 1,
        "level": 5,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-45-4",
        "timestamp": "3 days ago at 16:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 52,
        "responseTimeMs": 3115,
        "errors": 3,
        "level": 1,
        "score": 47,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-46",
      "name": "Malsawmi Sailo",
      "age": 63,
      "gender": "Female",
      "location": "Jorhat, Assam",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Jonaki Sailo (Nephew)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-46-1",
        "name": "Jonaki Sailo",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-46-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-46-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-46-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jonaki Sailo"
      },
      {
        "id": "rem-46-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-46-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-46-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-46-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jonaki Sailo"
      },
      {
        "id": "rem-46-6",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-46-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Autumn 2014",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-46-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Monsoon 2012",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 61,
        "attention": 67,
        "executive": 62,
        "composite": 63
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 63,
        "attention": 68,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 66,
        "attention": 71,
        "executive": 62,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 62,
        "attention": 73,
        "executive": 57,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 66,
        "attention": 73,
        "executive": 61,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 65,
        "attention": 68,
        "executive": 62,
        "composite": 65
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 66,
        "attention": 73,
        "executive": 60,
        "composite": 66
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 67,
        "attention": 71,
        "executive": 57,
        "composite": 65
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 64,
        "attention": 73,
        "executive": 58,
        "composite": 65
      }
    ],
    "gameSessions": [
      {
        "id": "sess-46-1",
        "timestamp": "1 days ago at 15:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 63,
        "responseTimeMs": 4140,
        "errors": 0,
        "level": 3,
        "score": 65,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-46-2",
        "timestamp": "1 days ago at 16:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 56,
        "responseTimeMs": 2904,
        "errors": 2,
        "level": 4,
        "score": 60,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-46-3",
        "timestamp": "4 days ago at 15:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 68,
        "responseTimeMs": 2040,
        "errors": 2,
        "level": 2,
        "score": 68,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-47",
      "name": "Puspa Gurung",
      "age": 72,
      "gender": "Female",
      "location": "Kohima, Nagaland",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Ranjit Gurung (Daughter-in-law)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Naga Hospital Authority Kohima",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-47-1",
        "name": "Ranjit Gurung",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Kohima, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-47-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Naga Hospital Authority Kohima",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-47-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Kohima, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-47-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ranjit Gurung"
      },
      {
        "id": "rem-47-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-47-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-47-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-47-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-47-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      }
    ],
    "memories": [
      {
        "id": "mem-47-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-47-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-19"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 69,
        "executive": 71,
        "composite": 69
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 67,
        "attention": 62,
        "executive": 69,
        "composite": 66
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 67,
        "executive": 63,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 68,
        "attention": 65,
        "executive": 61,
        "composite": 65
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 63,
        "attention": 58,
        "executive": 60,
        "composite": 60
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 63,
        "attention": 58,
        "executive": 62,
        "composite": 61
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 60,
        "attention": 57,
        "executive": 60,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 61,
        "attention": 57,
        "executive": 60,
        "composite": 59
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 61,
        "attention": 54,
        "executive": 58,
        "composite": 58
      }
    ],
    "gameSessions": [
      {
        "id": "sess-47-1",
        "timestamp": "3 days ago at 10:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 67,
        "responseTimeMs": 2742,
        "errors": 3,
        "level": 5,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-47-2",
        "timestamp": "6 days ago at 14:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 49,
        "responseTimeMs": 4116,
        "errors": 2,
        "level": 4,
        "score": 54,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-47-3",
        "timestamp": "6 days ago at 10:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 59,
        "responseTimeMs": 3063,
        "errors": 2,
        "level": 5,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-47-4",
        "timestamp": "6 days ago at 17:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 49,
        "responseTimeMs": 3398,
        "errors": 1,
        "level": 1,
        "score": 52,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-48",
      "name": "Bipul Chhangte",
      "age": 70,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Nokseng Chhangte (Granddaughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-48-1",
        "name": "Nokseng Chhangte",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-48-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-48-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-48-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Chhangte"
      },
      {
        "id": "rem-48-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-48-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Chhangte"
      },
      {
        "id": "rem-48-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-48-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-48-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 84,
        "attention": 82,
        "executive": 86,
        "composite": 84
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 82,
        "attention": 82,
        "executive": 88,
        "composite": 84
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 88,
        "attention": 84,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 88,
        "attention": 89,
        "executive": 92,
        "composite": 90
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 88,
        "attention": 87,
        "executive": 91,
        "composite": 89
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 90,
        "attention": 92,
        "executive": 92,
        "composite": 91
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 92,
        "attention": 93,
        "executive": 95,
        "composite": 93
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 92,
        "attention": 90,
        "executive": 92,
        "composite": 91
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 96,
        "attention": 94,
        "executive": 93,
        "composite": 94
      }
    ],
    "gameSessions": [
      {
        "id": "sess-48-1",
        "timestamp": "0 days ago at 14:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 87,
        "responseTimeMs": 3483,
        "errors": 3,
        "level": 1,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-48-2",
        "timestamp": "4 days ago at 17:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 2536,
        "errors": 0,
        "level": 1,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-48-3",
        "timestamp": "6 days ago at 09:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 97,
        "responseTimeMs": 2319,
        "errors": 1,
        "level": 3,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-48-4",
        "timestamp": "2 days ago at 17:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 3550,
        "errors": 4,
        "level": 2,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-49",
      "name": "Manoj Borah",
      "age": 77,
      "gender": "Male",
      "location": "Itanagar, Arunachal Pradesh",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Malsawmi Borah (Niece)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "TRIHMS Itanagar",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-49-1",
        "name": "Malsawmi Borah",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Itanagar, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-49-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "TRIHMS Itanagar",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-49-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Itanagar, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-49-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-49-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-49-3",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-49-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-49-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Malsawmi Borah"
      },
      {
        "id": "rem-49-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Malsawmi Borah"
      }
    ],
    "memories": [
      {
        "id": "mem-49-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-49-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-10"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 67,
        "executive": 64,
        "composite": 66
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 69,
        "executive": 69,
        "composite": 69
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 67,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 67,
        "attention": 66,
        "executive": 65,
        "composite": 66
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 67,
        "attention": 68,
        "executive": 69,
        "composite": 68
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 73,
        "attention": 66,
        "executive": 70,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 70,
        "attention": 70,
        "executive": 68,
        "composite": 69
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 72,
        "attention": 69,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 69,
        "attention": 70,
        "executive": 71,
        "composite": 70
      }
    ],
    "gameSessions": [
      {
        "id": "sess-49-1",
        "timestamp": "2 days ago at 17:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 3629,
        "errors": 3,
        "level": 4,
        "score": 70,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-49-2",
        "timestamp": "4 days ago at 12:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 66,
        "responseTimeMs": 3714,
        "errors": 4,
        "level": 1,
        "score": 66,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-49-3",
        "timestamp": "0 days ago at 14:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 80,
        "responseTimeMs": 3041,
        "errors": 3,
        "level": 4,
        "score": 84,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-49-4",
        "timestamp": "6 days ago at 12:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 61,
        "responseTimeMs": 2050,
        "errors": 2,
        "level": 4,
        "score": 62,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-50",
      "name": "Sita Deka",
      "age": 79,
      "gender": "Female",
      "location": "Agartala, Tripura",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Maya Deka (Granddaughter)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-50-1",
        "name": "Maya Deka",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-50-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-50-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-50-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Maya Deka"
      },
      {
        "id": "rem-50-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-50-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-50-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-50-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-50-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-50-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-22"
      },
      {
        "id": "mem-50-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-29"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 77,
        "attention": 76,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 77,
        "executive": 78,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 81,
        "attention": 81,
        "executive": 76,
        "composite": 79
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 84,
        "attention": 80,
        "executive": 80,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 80,
        "attention": 82,
        "executive": 83,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 85,
        "attention": 83,
        "executive": 84,
        "composite": 84
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 88,
        "executive": 84,
        "composite": 86
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 88,
        "attention": 89,
        "executive": 88,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 84,
        "attention": 89,
        "executive": 90,
        "composite": 88
      }
    ],
    "gameSessions": [
      {
        "id": "sess-50-1",
        "timestamp": "0 days ago at 18:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 93,
        "responseTimeMs": 2372,
        "errors": 3,
        "level": 3,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-50-2",
        "timestamp": "6 days ago at 14:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 89,
        "responseTimeMs": 2992,
        "errors": 3,
        "level": 2,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-50-3",
        "timestamp": "2 days ago at 14:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 81,
        "responseTimeMs": 1763,
        "errors": 1,
        "level": 4,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-50-4",
        "timestamp": "2 days ago at 18:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 94,
        "responseTimeMs": 1965,
        "errors": 1,
        "level": 2,
        "score": 95,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-50-5",
        "timestamp": "3 days ago at 15:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 83,
        "responseTimeMs": 1651,
        "errors": 1,
        "level": 2,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-50-6",
        "timestamp": "6 days ago at 12:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 81,
        "responseTimeMs": 1672,
        "errors": 3,
        "level": 1,
        "score": 79,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-51",
      "name": "Ranjit Sema",
      "age": 80,
      "gender": "Male",
      "location": "Kohima, Nagaland",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Bhaben Sema (Daughter-in-law)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Naga Hospital Authority Kohima",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-51-1",
        "name": "Bhaben Sema",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Kohima, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-51-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Naga Hospital Authority Kohima",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-51-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Kohima, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-51-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhaben Sema"
      },
      {
        "id": "rem-51-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-51-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-51-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-51-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-51-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "2016",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-51-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-51-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 75,
        "executive": 74,
        "composite": 72
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 73,
        "attention": 73,
        "executive": 70,
        "composite": 72
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 70,
        "executive": 75,
        "composite": 71
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 74,
        "attention": 73,
        "executive": 76,
        "composite": 74
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 73,
        "executive": 77,
        "composite": 74
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 75,
        "attention": 72,
        "executive": 75,
        "composite": 74
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 74,
        "attention": 73,
        "executive": 76,
        "composite": 74
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 69,
        "attention": 75,
        "executive": 77,
        "composite": 74
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 71,
        "attention": 77,
        "executive": 77,
        "composite": 75
      }
    ],
    "gameSessions": [
      {
        "id": "sess-51-1",
        "timestamp": "5 days ago at 13:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 77,
        "responseTimeMs": 1713,
        "errors": 1,
        "level": 4,
        "score": 80,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-51-2",
        "timestamp": "5 days ago at 12:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 68,
        "responseTimeMs": 1953,
        "errors": 1,
        "level": 2,
        "score": 67,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-51-3",
        "timestamp": "5 days ago at 10:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 79,
        "responseTimeMs": 2808,
        "errors": 3,
        "level": 4,
        "score": 82,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-51-4",
        "timestamp": "4 days ago at 13:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 68,
        "responseTimeMs": 3197,
        "errors": 2,
        "level": 2,
        "score": 65,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-51-5",
        "timestamp": "4 days ago at 11:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 83,
        "responseTimeMs": 3787,
        "errors": 4,
        "level": 2,
        "score": 87,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-52",
      "name": "Yaiphaba Wangchuk",
      "age": 69,
      "gender": "Male",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Akoli Wangchuk (Nephew)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-52-1",
        "name": "Akoli Wangchuk",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-52-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-52-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-52-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-52-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-52-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akoli Wangchuk"
      },
      {
        "id": "rem-52-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akoli Wangchuk"
      }
    ],
    "memories": [
      {
        "id": "mem-52-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-19"
      },
      {
        "id": "mem-52-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-52-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Winter 2008",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-26"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 75,
        "executive": 75,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 78,
        "executive": 72,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 74,
        "attention": 77,
        "executive": 74,
        "composite": 75
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 76,
        "attention": 79,
        "executive": 79,
        "composite": 78
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 85,
        "executive": 81,
        "composite": 81
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 78,
        "attention": 85,
        "executive": 81,
        "composite": 81
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 83,
        "attention": 82,
        "executive": 79,
        "composite": 81
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 83,
        "attention": 85,
        "executive": 84,
        "composite": 84
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 86,
        "attention": 89,
        "executive": 84,
        "composite": 86
      }
    ],
    "gameSessions": [
      {
        "id": "sess-52-1",
        "timestamp": "3 days ago at 10:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 94,
        "responseTimeMs": 2108,
        "errors": 0,
        "level": 2,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-52-2",
        "timestamp": "5 days ago at 15:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 77,
        "responseTimeMs": 3527,
        "errors": 0,
        "level": 4,
        "score": 75,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-52-3",
        "timestamp": "3 days ago at 15:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 96,
        "responseTimeMs": 2106,
        "errors": 0,
        "level": 3,
        "score": 97,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-52-4",
        "timestamp": "6 days ago at 10:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 80,
        "responseTimeMs": 3898,
        "errors": 1,
        "level": 5,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-52-5",
        "timestamp": "3 days ago at 09:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 1886,
        "errors": 2,
        "level": 1,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-53",
      "name": "Ongbi Deka",
      "age": 73,
      "gender": "Female",
      "location": "Imphal, Manipur",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Rukmini Deka (Niece)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "RIMS Imphal",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-53-1",
        "name": "Rukmini Deka",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Imphal, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-53-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "RIMS Imphal",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-53-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Imphal, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-53-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-53-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Deka"
      },
      {
        "id": "rem-53-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-53-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-53-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Deka"
      },
      {
        "id": "rem-53-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Deka"
      }
    ],
    "memories": [
      {
        "id": "mem-53-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-53-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Monsoon 2012",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 62,
        "attention": 67,
        "executive": 68,
        "composite": 66
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 62,
        "attention": 66,
        "executive": 65,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 61,
        "attention": 63,
        "executive": 64,
        "composite": 63
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 62,
        "attention": 66,
        "executive": 64,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 63,
        "attention": 61,
        "executive": 62,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 65,
        "attention": 62,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 66,
        "attention": 64,
        "executive": 63,
        "composite": 64
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 62,
        "attention": 62,
        "executive": 64,
        "composite": 63
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 65,
        "executive": 62,
        "composite": 64
      }
    ],
    "gameSessions": [
      {
        "id": "sess-53-1",
        "timestamp": "0 days ago at 09:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 66,
        "responseTimeMs": 2246,
        "errors": 3,
        "level": 1,
        "score": 69,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-53-2",
        "timestamp": "2 days ago at 17:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 62,
        "responseTimeMs": 3342,
        "errors": 4,
        "level": 3,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-53-3",
        "timestamp": "1 days ago at 11:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 73,
        "responseTimeMs": 3974,
        "errors": 2,
        "level": 1,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-53-4",
        "timestamp": "0 days ago at 08:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 65,
        "responseTimeMs": 3384,
        "errors": 3,
        "level": 5,
        "score": 60,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-53-5",
        "timestamp": "4 days ago at 13:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 1858,
        "errors": 1,
        "level": 2,
        "score": 65,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-54",
      "name": "Rigzin Deka",
      "age": 87,
      "gender": "Male",
      "location": "Jorhat, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Yaiphaba Deka (Granddaughter)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-54-1",
        "name": "Yaiphaba Deka",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-54-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-54-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-54-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-54-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Deka"
      },
      {
        "id": "rem-54-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Deka"
      },
      {
        "id": "rem-54-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Deka"
      },
      {
        "id": "rem-54-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Deka"
      }
    ],
    "memories": [
      {
        "id": "mem-54-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-54-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Spring 2010",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-54-3",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 67,
        "executive": 64,
        "composite": 66
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 72,
        "executive": 66,
        "composite": 69
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 67,
        "attention": 74,
        "executive": 63,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 68,
        "attention": 73,
        "executive": 66,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 65,
        "attention": 71,
        "executive": 64,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 67,
        "attention": 72,
        "executive": 61,
        "composite": 67
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 67,
        "attention": 73,
        "executive": 60,
        "composite": 67
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 68,
        "attention": 75,
        "executive": 59,
        "composite": 67
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 68,
        "attention": 74,
        "executive": 61,
        "composite": 68
      }
    ],
    "gameSessions": [
      {
        "id": "sess-54-1",
        "timestamp": "4 days ago at 08:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 1966,
        "errors": 4,
        "level": 2,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-54-2",
        "timestamp": "2 days ago at 13:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 69,
        "responseTimeMs": 3781,
        "errors": 2,
        "level": 2,
        "score": 69,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-54-3",
        "timestamp": "0 days ago at 08:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 1954,
        "errors": 0,
        "level": 5,
        "score": 76,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-54-4",
        "timestamp": "6 days ago at 16:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 74,
        "responseTimeMs": 2184,
        "errors": 0,
        "level": 2,
        "score": 78,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-54-5",
        "timestamp": "3 days ago at 16:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 61,
        "responseTimeMs": 1906,
        "errors": 1,
        "level": 3,
        "score": 59,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-55",
      "name": "Kanchi Saikia",
      "age": 64,
      "gender": "Female",
      "location": "Itanagar, Arunachal Pradesh",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Akum Saikia (Nephew)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "TRIHMS Itanagar",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-55-1",
        "name": "Akum Saikia",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Itanagar, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-55-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "TRIHMS Itanagar",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-55-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Itanagar, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-55-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-55-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akum Saikia"
      },
      {
        "id": "rem-55-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-55-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-55-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Akum Saikia"
      },
      {
        "id": "rem-55-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-55-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Spring 2010",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-55-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-55-3",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-24"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 84,
        "executive": 81,
        "composite": 80
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 86,
        "executive": 84,
        "composite": 81
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 77,
        "attention": 82,
        "executive": 85,
        "composite": 81
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 76,
        "attention": 84,
        "executive": 82,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 85,
        "executive": 86,
        "composite": 82
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 82,
        "executive": 82,
        "composite": 80
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 73,
        "attention": 84,
        "executive": 85,
        "composite": 81
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 77,
        "attention": 89,
        "executive": 86,
        "composite": 84
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 76,
        "attention": 89,
        "executive": 85,
        "composite": 83
      }
    ],
    "gameSessions": [
      {
        "id": "sess-55-1",
        "timestamp": "4 days ago at 18:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 89,
        "responseTimeMs": 2665,
        "errors": 4,
        "level": 2,
        "score": 94,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-55-2",
        "timestamp": "0 days ago at 13:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 81,
        "responseTimeMs": 2979,
        "errors": 3,
        "level": 1,
        "score": 83,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-55-3",
        "timestamp": "0 days ago at 09:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 87,
        "responseTimeMs": 2032,
        "errors": 3,
        "level": 2,
        "score": 90,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-55-4",
        "timestamp": "3 days ago at 17:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 75,
        "responseTimeMs": 3893,
        "errors": 3,
        "level": 4,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-55-5",
        "timestamp": "5 days ago at 14:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 87,
        "responseTimeMs": 2020,
        "errors": 3,
        "level": 4,
        "score": 91,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-56",
      "name": "Dhan Limbu",
      "age": 64,
      "gender": "Male",
      "location": "Itanagar, Arunachal Pradesh",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Yangchen Limbu (Granddaughter)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "TRIHMS Itanagar",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-56-1",
        "name": "Yangchen Limbu",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Itanagar, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-56-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "TRIHMS Itanagar",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-56-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Itanagar, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-56-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-56-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yangchen Limbu"
      },
      {
        "id": "rem-56-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-56-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-56-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yangchen Limbu"
      },
      {
        "id": "rem-56-6",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yangchen Limbu"
      }
    ],
    "memories": [
      {
        "id": "mem-56-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-56-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-22"
      },
      {
        "id": "mem-56-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 87,
        "attention": 81,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 85,
        "attention": 81,
        "executive": 82,
        "composite": 83
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 87,
        "attention": 83,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 85,
        "attention": 85,
        "executive": 88,
        "composite": 86
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 91,
        "attention": 89,
        "executive": 89,
        "composite": 90
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 90,
        "attention": 90,
        "executive": 91,
        "composite": 90
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 89,
        "attention": 91,
        "executive": 91,
        "composite": 90
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 90,
        "attention": 91,
        "executive": 94,
        "composite": 92
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 97,
        "attention": 92,
        "executive": 91,
        "composite": 93
      }
    ],
    "gameSessions": [
      {
        "id": "sess-56-1",
        "timestamp": "1 days ago at 12:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 94,
        "responseTimeMs": 3168,
        "errors": 1,
        "level": 1,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-56-2",
        "timestamp": "5 days ago at 08:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 2810,
        "errors": 1,
        "level": 4,
        "score": 97,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-56-3",
        "timestamp": "0 days ago at 08:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 88,
        "responseTimeMs": 3945,
        "errors": 4,
        "level": 2,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-57",
      "name": "Akoli Thapa",
      "age": 73,
      "gender": "Female",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Karma Thapa (Son)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-57-1",
        "name": "Karma Thapa",
        "relationship": "Son (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-57-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-57-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-57-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Thapa"
      },
      {
        "id": "rem-57-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-57-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-57-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Karma Thapa"
      }
    ],
    "memories": [
      {
        "id": "mem-57-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-57-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-22"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 75,
        "executive": 71,
        "composite": 72
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 73,
        "executive": 67,
        "composite": 71
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 71,
        "attention": 72,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 65,
        "attention": 69,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 67,
        "attention": 65,
        "executive": 64,
        "composite": 65
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 63,
        "attention": 66,
        "executive": 66,
        "composite": 65
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 64,
        "attention": 67,
        "executive": 63,
        "composite": 65
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 64,
        "attention": 62,
        "executive": 59,
        "composite": 62
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 63,
        "attention": 62,
        "executive": 58,
        "composite": 61
      }
    ],
    "gameSessions": [
      {
        "id": "sess-57-1",
        "timestamp": "5 days ago at 08:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 55,
        "responseTimeMs": 2290,
        "errors": 3,
        "level": 1,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-57-2",
        "timestamp": "5 days ago at 13:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 66,
        "responseTimeMs": 4012,
        "errors": 2,
        "level": 2,
        "score": 69,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-57-3",
        "timestamp": "0 days ago at 12:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 71,
        "responseTimeMs": 3982,
        "errors": 1,
        "level": 1,
        "score": 76,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-57-4",
        "timestamp": "0 days ago at 12:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 71,
        "responseTimeMs": 2293,
        "errors": 4,
        "level": 5,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-57-5",
        "timestamp": "5 days ago at 09:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 55,
        "responseTimeMs": 3834,
        "errors": 1,
        "level": 5,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-58",
      "name": "Jonaki Sarma",
      "age": 83,
      "gender": "Female",
      "location": "Lunglei, Mizoram",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Jitu Sarma (Daughter)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Lunglei District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-58-1",
        "name": "Jitu Sarma",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Lunglei, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-58-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Lunglei District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-58-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Lunglei, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-58-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-58-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Sarma"
      },
      {
        "id": "rem-58-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-58-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Sarma"
      }
    ],
    "memories": [
      {
        "id": "mem-58-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-58-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Autumn 2014",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-13"
      },
      {
        "id": "mem-58-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-10"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 63,
        "attention": 71,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 62,
        "attention": 68,
        "executive": 63,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 63,
        "attention": 71,
        "executive": 64,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 63,
        "attention": 67,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 63,
        "attention": 67,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 63,
        "attention": 65,
        "executive": 67,
        "composite": 65
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 63,
        "attention": 66,
        "executive": 66,
        "composite": 65
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 67,
        "executive": 66,
        "composite": 64
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 59,
        "attention": 64,
        "executive": 65,
        "composite": 63
      }
    ],
    "gameSessions": [
      {
        "id": "sess-58-1",
        "timestamp": "4 days ago at 10:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 69,
        "responseTimeMs": 3471,
        "errors": 4,
        "level": 4,
        "score": 66,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-58-2",
        "timestamp": "0 days ago at 10:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 58,
        "responseTimeMs": 3601,
        "errors": 2,
        "level": 3,
        "score": 61,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-58-3",
        "timestamp": "1 days ago at 15:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 71,
        "responseTimeMs": 2692,
        "errors": 2,
        "level": 1,
        "score": 74,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-59",
      "name": "Probin Sailo",
      "age": 77,
      "gender": "Male",
      "location": "Tezpur, Assam",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Lalrinawma Sailo (Nephew)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Tezpur Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-59-1",
        "name": "Lalrinawma Sailo",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Tezpur, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-59-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Tezpur Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-59-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tezpur, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-59-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-59-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-59-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lalrinawma Sailo"
      },
      {
        "id": "rem-59-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lalrinawma Sailo"
      },
      {
        "id": "rem-59-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-59-6",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-59-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-59-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-28"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 82,
        "attention": 85,
        "executive": 84,
        "composite": 84
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 87,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 81,
        "attention": 85,
        "executive": 85,
        "composite": 84
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 82,
        "attention": 81,
        "executive": 80,
        "composite": 81
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 77,
        "attention": 77,
        "executive": 79,
        "composite": 78
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 78,
        "executive": 82,
        "composite": 79
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 78,
        "attention": 75,
        "executive": 80,
        "composite": 78
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 74,
        "attention": 77,
        "executive": 76,
        "composite": 76
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 73,
        "attention": 73,
        "executive": 76,
        "composite": 74
      }
    ],
    "gameSessions": [
      {
        "id": "sess-59-1",
        "timestamp": "6 days ago at 18:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 79,
        "responseTimeMs": 3089,
        "errors": 4,
        "level": 3,
        "score": 82,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-59-2",
        "timestamp": "5 days ago at 13:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 74,
        "responseTimeMs": 3526,
        "errors": 3,
        "level": 3,
        "score": 71,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-59-3",
        "timestamp": "4 days ago at 18:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 72,
        "responseTimeMs": 2331,
        "errors": 3,
        "level": 2,
        "score": 76,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-59-4",
        "timestamp": "3 days ago at 17:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 68,
        "responseTimeMs": 3032,
        "errors": 2,
        "level": 5,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-59-5",
        "timestamp": "3 days ago at 16:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 67,
        "responseTimeMs": 1668,
        "errors": 3,
        "level": 5,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-59-6",
        "timestamp": "3 days ago at 14:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 71,
        "responseTimeMs": 2798,
        "errors": 2,
        "level": 4,
        "score": 71,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-60",
      "name": "Karma Devi",
      "age": 68,
      "gender": "Male",
      "location": "Lunglei, Mizoram",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Rukmini Devi (Nephew)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Lunglei District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-60-1",
        "name": "Rukmini Devi",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Lunglei, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-60-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Lunglei District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-60-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Lunglei, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-60-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Devi"
      },
      {
        "id": "rem-60-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-60-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-60-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Devi"
      },
      {
        "id": "rem-60-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Devi"
      },
      {
        "id": "rem-60-6",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rukmini Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-60-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-60-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Winter 2008",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-60-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Autumn 2014",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-13"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 66,
        "attention": 63,
        "executive": 64,
        "composite": 64
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 66,
        "executive": 63,
        "composite": 65
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 60,
        "attention": 62,
        "executive": 58,
        "composite": 60
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 62,
        "executive": 59,
        "composite": 60
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 59,
        "attention": 59,
        "executive": 56,
        "composite": 58
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 61,
        "attention": 60,
        "executive": 54,
        "composite": 58
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 56,
        "attention": 56,
        "executive": 51,
        "composite": 54
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 57,
        "executive": 48,
        "composite": 55
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 55,
        "attention": 55,
        "executive": 51,
        "composite": 54
      }
    ],
    "gameSessions": [
      {
        "id": "sess-60-1",
        "timestamp": "0 days ago at 10:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 61,
        "responseTimeMs": 3080,
        "errors": 2,
        "level": 2,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-60-2",
        "timestamp": "3 days ago at 08:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 50,
        "responseTimeMs": 2203,
        "errors": 2,
        "level": 4,
        "score": 50,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-60-3",
        "timestamp": "4 days ago at 14:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 47,
        "responseTimeMs": 3093,
        "errors": 1,
        "level": 2,
        "score": 43,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-60-4",
        "timestamp": "5 days ago at 15:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 50,
        "responseTimeMs": 2771,
        "errors": 4,
        "level": 2,
        "score": 53,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-61",
      "name": "Tenzing Wangchuk",
      "age": 61,
      "gender": "Female",
      "location": "Silchar, Assam",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Yaiphaba Wangchuk (Grandson)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-61-1",
        "name": "Yaiphaba Wangchuk",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-61-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-61-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-61-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Wangchuk"
      },
      {
        "id": "rem-61-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Wangchuk"
      },
      {
        "id": "rem-61-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Wangchuk"
      },
      {
        "id": "rem-61-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-61-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Wangchuk"
      },
      {
        "id": "rem-61-6",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Yaiphaba Wangchuk"
      }
    ],
    "memories": [
      {
        "id": "mem-61-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Spring 2010",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-61-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-61-3",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 75,
        "attention": 69,
        "executive": 66,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 69,
        "executive": 63,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 70,
        "attention": 65,
        "executive": 62,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 70,
        "attention": 64,
        "executive": 58,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 67,
        "attention": 62,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 63,
        "attention": 62,
        "executive": 59,
        "composite": 61
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 64,
        "attention": 58,
        "executive": 55,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 60,
        "attention": 61,
        "executive": 53,
        "composite": 58
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 61,
        "attention": 59,
        "executive": 52,
        "composite": 57
      }
    ],
    "gameSessions": [
      {
        "id": "sess-61-1",
        "timestamp": "4 days ago at 08:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 61,
        "responseTimeMs": 2326,
        "errors": 1,
        "level": 3,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-61-2",
        "timestamp": "0 days ago at 08:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 51,
        "responseTimeMs": 1758,
        "errors": 1,
        "level": 1,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-61-3",
        "timestamp": "3 days ago at 16:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 50,
        "responseTimeMs": 2821,
        "errors": 4,
        "level": 2,
        "score": 47,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-62",
      "name": "Chandra Singh",
      "age": 74,
      "gender": "Male",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Neikho Singh (Nephew)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-62-1",
        "name": "Neikho Singh",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-62-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-62-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-62-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Singh"
      },
      {
        "id": "rem-62-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Singh"
      },
      {
        "id": "rem-62-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Singh"
      },
      {
        "id": "rem-62-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Neikho Singh"
      },
      {
        "id": "rem-62-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-62-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Spring 2010",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-62-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "2016",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-62-3",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Autumn 2014",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-11"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 77,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 65,
        "attention": 74,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 66,
        "attention": 71,
        "executive": 65,
        "composite": 67
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 61,
        "attention": 70,
        "executive": 63,
        "composite": 65
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 66,
        "executive": 60,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 61,
        "attention": 65,
        "executive": 58,
        "composite": 61
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 56,
        "attention": 64,
        "executive": 56,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 61,
        "executive": 57,
        "composite": 59
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 52,
        "attention": 59,
        "executive": 56,
        "composite": 56
      }
    ],
    "gameSessions": [
      {
        "id": "sess-62-1",
        "timestamp": "4 days ago at 11:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 49,
        "responseTimeMs": 3245,
        "errors": 3,
        "level": 3,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-62-2",
        "timestamp": "1 days ago at 17:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 60,
        "responseTimeMs": 3861,
        "errors": 3,
        "level": 2,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-62-3",
        "timestamp": "2 days ago at 14:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 63,
        "responseTimeMs": 3307,
        "errors": 3,
        "level": 5,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-62-4",
        "timestamp": "6 days ago at 15:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 3250,
        "errors": 0,
        "level": 3,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-63",
      "name": "Sengphan Norbu",
      "age": 69,
      "gender": "Male",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Ongbi Norbu (Niece)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-63-1",
        "name": "Ongbi Norbu",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-63-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-63-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-63-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Norbu"
      },
      {
        "id": "rem-63-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-63-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-63-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-63-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ongbi Norbu"
      },
      {
        "id": "rem-63-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-63-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-63-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 67,
        "attention": 76,
        "executive": 68,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 64,
        "attention": 74,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 61,
        "attention": 72,
        "executive": 62,
        "composite": 65
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 63,
        "attention": 68,
        "executive": 64,
        "composite": 65
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 67,
        "executive": 59,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 58,
        "attention": 63,
        "executive": 58,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 56,
        "attention": 64,
        "executive": 58,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 63,
        "executive": 60,
        "composite": 61
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 57,
        "attention": 60,
        "executive": 58,
        "composite": 58
      }
    ],
    "gameSessions": [
      {
        "id": "sess-63-1",
        "timestamp": "1 days ago at 10:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 57,
        "responseTimeMs": 3558,
        "errors": 0,
        "level": 4,
        "score": 54,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-63-2",
        "timestamp": "0 days ago at 10:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 3174,
        "errors": 3,
        "level": 5,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-63-3",
        "timestamp": "2 days ago at 09:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 65,
        "responseTimeMs": 1763,
        "errors": 2,
        "level": 1,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-63-4",
        "timestamp": "6 days ago at 09:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 53,
        "responseTimeMs": 1529,
        "errors": 4,
        "level": 1,
        "score": 53,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-63-5",
        "timestamp": "3 days ago at 17:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 52,
        "responseTimeMs": 3438,
        "errors": 2,
        "level": 5,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-64",
      "name": "Yangchen Konyak",
      "age": 82,
      "gender": "Female",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Tek Konyak (Daughter)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-64-1",
        "name": "Tek Konyak",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-64-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-64-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-64-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tek Konyak"
      },
      {
        "id": "rem-64-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-64-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-64-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-64-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-64-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-64-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Winter 2008",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 82,
        "attention": 83,
        "executive": 89,
        "composite": 85
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 89,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 83,
        "attention": 84,
        "executive": 84,
        "composite": 84
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 85,
        "attention": 84,
        "executive": 87,
        "composite": 85
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 83,
        "attention": 87,
        "executive": 87,
        "composite": 86
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 87,
        "attention": 88,
        "executive": 88,
        "composite": 88
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 88,
        "executive": 87,
        "composite": 87
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 86,
        "executive": 88,
        "composite": 86
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 86,
        "attention": 90,
        "executive": 85,
        "composite": 87
      }
    ],
    "gameSessions": [
      {
        "id": "sess-64-1",
        "timestamp": "5 days ago at 14:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 84,
        "responseTimeMs": 2415,
        "errors": 2,
        "level": 1,
        "score": 88,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-64-2",
        "timestamp": "5 days ago at 17:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 79,
        "responseTimeMs": 1975,
        "errors": 4,
        "level": 3,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-64-3",
        "timestamp": "4 days ago at 08:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 94,
        "responseTimeMs": 3693,
        "errors": 1,
        "level": 4,
        "score": 99,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-65",
      "name": "Yangchen Konyak",
      "age": 86,
      "gender": "Female",
      "location": "Silchar, Assam",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Jitu Konyak (Grandson)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-65-1",
        "name": "Jitu Konyak",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-65-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-65-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-65-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Konyak"
      },
      {
        "id": "rem-65-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Konyak"
      },
      {
        "id": "rem-65-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Konyak"
      },
      {
        "id": "rem-65-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-65-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Konyak"
      },
      {
        "id": "rem-65-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Jitu Konyak"
      }
    ],
    "memories": [
      {
        "id": "mem-65-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Spring 2010",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-26"
      },
      {
        "id": "mem-65-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-65-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 75,
        "attention": 78,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 76,
        "attention": 84,
        "executive": 79,
        "composite": 80
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 74,
        "attention": 84,
        "executive": 80,
        "composite": 79
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 75,
        "attention": 84,
        "executive": 79,
        "composite": 79
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 80,
        "attention": 87,
        "executive": 82,
        "composite": 83
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 82,
        "attention": 87,
        "executive": 87,
        "composite": 85
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 80,
        "attention": 89,
        "executive": 84,
        "composite": 84
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 91,
        "executive": 90,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 86,
        "attention": 92,
        "executive": 87,
        "composite": 88
      }
    ],
    "gameSessions": [
      {
        "id": "sess-65-1",
        "timestamp": "3 days ago at 12:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 79,
        "responseTimeMs": 3037,
        "errors": 0,
        "level": 4,
        "score": 76,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-65-2",
        "timestamp": "3 days ago at 13:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 86,
        "responseTimeMs": 1838,
        "errors": 0,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-65-3",
        "timestamp": "0 days ago at 17:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 91,
        "responseTimeMs": 1887,
        "errors": 4,
        "level": 2,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-65-4",
        "timestamp": "3 days ago at 12:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 88,
        "responseTimeMs": 1760,
        "errors": 4,
        "level": 2,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-65-5",
        "timestamp": "4 days ago at 16:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 94,
        "responseTimeMs": 3895,
        "errors": 4,
        "level": 1,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-65-6",
        "timestamp": "1 days ago at 17:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 97,
        "responseTimeMs": 3331,
        "errors": 2,
        "level": 1,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-66",
      "name": "Jitu Reang",
      "age": 67,
      "gender": "Male",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Hemanta Reang (Granddaughter)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-66-1",
        "name": "Hemanta Reang",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-66-2",
        "name": "Dr. Tenzin Dolma",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-66-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-66-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-66-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Hemanta Reang"
      },
      {
        "id": "rem-66-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Hemanta Reang"
      },
      {
        "id": "rem-66-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Hemanta Reang"
      },
      {
        "id": "rem-66-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Hemanta Reang"
      },
      {
        "id": "rem-66-6",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Hemanta Reang"
      }
    ],
    "memories": [
      {
        "id": "mem-66-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Winter 2008",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-66-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-13"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 83,
        "executive": 77,
        "composite": 80
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 81,
        "attention": 85,
        "executive": 79,
        "composite": 82
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 85,
        "attention": 87,
        "executive": 81,
        "composite": 84
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 82,
        "attention": 92,
        "executive": 83,
        "composite": 86
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 85,
        "attention": 89,
        "executive": 82,
        "composite": 85
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 88,
        "attention": 90,
        "executive": 86,
        "composite": 88
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 89,
        "attention": 91,
        "executive": 86,
        "composite": 89
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 90,
        "attention": 94,
        "executive": 90,
        "composite": 91
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 91,
        "attention": 96,
        "executive": 85,
        "composite": 91
      }
    ],
    "gameSessions": [
      {
        "id": "sess-66-1",
        "timestamp": "2 days ago at 17:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 92,
        "responseTimeMs": 2199,
        "errors": 2,
        "level": 4,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-66-2",
        "timestamp": "6 days ago at 16:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 88,
        "responseTimeMs": 2022,
        "errors": 2,
        "level": 1,
        "score": 90,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-66-3",
        "timestamp": "1 days ago at 10:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 91,
        "responseTimeMs": 2595,
        "errors": 0,
        "level": 3,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-66-4",
        "timestamp": "3 days ago at 15:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 97,
        "responseTimeMs": 2949,
        "errors": 3,
        "level": 5,
        "score": 99,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-66-5",
        "timestamp": "5 days ago at 11:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 87,
        "responseTimeMs": 1856,
        "errors": 2,
        "level": 4,
        "score": 86,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-67",
      "name": "Maya Hazarika",
      "age": 81,
      "gender": "Female",
      "location": "Guwahati, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Runu Hazarika (Daughter-in-law)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "GMCH Guwahati",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-67-1",
        "name": "Runu Hazarika",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Guwahati, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-67-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "GMCH Guwahati",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-67-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Guwahati, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-67-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Hazarika"
      },
      {
        "id": "rem-67-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Hazarika"
      },
      {
        "id": "rem-67-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Hazarika"
      },
      {
        "id": "rem-67-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-67-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-67-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-13"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 83,
        "attention": 91,
        "executive": 86,
        "composite": 87
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 92,
        "executive": 86,
        "composite": 87
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 88,
        "attention": 94,
        "executive": 88,
        "composite": 90
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 87,
        "attention": 94,
        "executive": 93,
        "composite": 91
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 88,
        "attention": 96,
        "executive": 91,
        "composite": 92
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 93,
        "attention": 98,
        "executive": 92,
        "composite": 94
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 93,
        "attention": 98,
        "executive": 95,
        "composite": 95
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 93,
        "attention": 98,
        "executive": 95,
        "composite": 95
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 96,
        "attention": 98,
        "executive": 98,
        "composite": 97
      }
    ],
    "gameSessions": [
      {
        "id": "sess-67-1",
        "timestamp": "1 days ago at 15:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 90,
        "responseTimeMs": 2992,
        "errors": 3,
        "level": 2,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-67-2",
        "timestamp": "3 days ago at 18:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 2948,
        "errors": 3,
        "level": 1,
        "score": 96,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-67-3",
        "timestamp": "0 days ago at 11:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 100,
        "responseTimeMs": 3116,
        "errors": 3,
        "level": 3,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-67-4",
        "timestamp": "3 days ago at 18:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 90,
        "responseTimeMs": 3503,
        "errors": 4,
        "level": 4,
        "score": 87,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-67-5",
        "timestamp": "6 days ago at 14:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 1941,
        "errors": 0,
        "level": 2,
        "score": 98,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-67-6",
        "timestamp": "5 days ago at 11:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 94,
        "responseTimeMs": 2901,
        "errors": 3,
        "level": 5,
        "score": 89,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-68",
      "name": "Radheshyam Gurung",
      "age": 70,
      "gender": "Male",
      "location": "Kohima, Nagaland",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Zohmingliana Gurung (Nephew)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Naga Hospital Authority Kohima",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-68-1",
        "name": "Zohmingliana Gurung",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Kohima, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-68-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Naga Hospital Authority Kohima",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-68-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Kohima, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-68-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zohmingliana Gurung"
      },
      {
        "id": "rem-68-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zohmingliana Gurung"
      },
      {
        "id": "rem-68-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zohmingliana Gurung"
      },
      {
        "id": "rem-68-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-68-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-68-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-25"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 69,
        "attention": 70,
        "executive": 73,
        "composite": 71
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 67,
        "attention": 68,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 70,
        "attention": 72,
        "executive": 67,
        "composite": 70
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 66,
        "attention": 69,
        "executive": 65,
        "composite": 67
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 67,
        "attention": 70,
        "executive": 64,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 66,
        "attention": 65,
        "executive": 64,
        "composite": 65
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 61,
        "attention": 64,
        "executive": 60,
        "composite": 62
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 62,
        "attention": 61,
        "executive": 62,
        "composite": 62
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 65,
        "executive": 57,
        "composite": 60
      }
    ],
    "gameSessions": [
      {
        "id": "sess-68-1",
        "timestamp": "1 days ago at 14:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 3795,
        "errors": 2,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-68-2",
        "timestamp": "3 days ago at 09:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 63,
        "responseTimeMs": 3563,
        "errors": 0,
        "level": 2,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-68-3",
        "timestamp": "2 days ago at 08:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 55,
        "responseTimeMs": 2279,
        "errors": 3,
        "level": 4,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-68-4",
        "timestamp": "0 days ago at 10:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 3073,
        "errors": 4,
        "level": 4,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-69",
      "name": "Rose Ralte",
      "age": 67,
      "gender": "Female",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Wangba Ralte (Daughter-in-law)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-69-1",
        "name": "Wangba Ralte",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-69-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-69-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-69-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Ralte"
      },
      {
        "id": "rem-69-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Ralte"
      },
      {
        "id": "rem-69-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-69-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Ralte"
      },
      {
        "id": "rem-69-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Wangba Ralte"
      }
    ],
    "memories": [
      {
        "id": "mem-69-1",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Monsoon 2012",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-69-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-69-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Spring 2010",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-23"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 71,
        "executive": 71,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 64,
        "executive": 69,
        "composite": 66
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 62,
        "attention": 67,
        "executive": 66,
        "composite": 65
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 64,
        "attention": 62,
        "executive": 65,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 59,
        "attention": 63,
        "executive": 63,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 58,
        "attention": 61,
        "executive": 61,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 57,
        "attention": 59,
        "executive": 60,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 60,
        "attention": 61,
        "executive": 56,
        "composite": 59
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 55,
        "executive": 57,
        "composite": 57
      }
    ],
    "gameSessions": [
      {
        "id": "sess-69-1",
        "timestamp": "0 days ago at 16:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 65,
        "responseTimeMs": 1548,
        "errors": 4,
        "level": 1,
        "score": 70,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-69-2",
        "timestamp": "0 days ago at 18:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 55,
        "responseTimeMs": 1842,
        "errors": 2,
        "level": 2,
        "score": 51,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-69-3",
        "timestamp": "0 days ago at 09:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 59,
        "responseTimeMs": 1848,
        "errors": 1,
        "level": 2,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-69-4",
        "timestamp": "6 days ago at 10:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 62,
        "responseTimeMs": 2132,
        "errors": 1,
        "level": 1,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-70",
      "name": "Ranjita Debbarma",
      "age": 64,
      "gender": "Female",
      "location": "Jorhat, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Lhakpa Debbarma (Niece)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-70-1",
        "name": "Lhakpa Debbarma",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-70-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-70-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-70-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-70-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-70-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-70-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lhakpa Debbarma"
      },
      {
        "id": "rem-70-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-70-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-70-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-10"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 65,
        "attention": 73,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 62,
        "attention": 71,
        "executive": 69,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 61,
        "attention": 65,
        "executive": 67,
        "composite": 64
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 66,
        "executive": 64,
        "composite": 63
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 59,
        "attention": 62,
        "executive": 64,
        "composite": 62
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 60,
        "attention": 61,
        "executive": 59,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 55,
        "attention": 59,
        "executive": 62,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 53,
        "attention": 62,
        "executive": 56,
        "composite": 57
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 53,
        "attention": 60,
        "executive": 54,
        "composite": 56
      }
    ],
    "gameSessions": [
      {
        "id": "sess-70-1",
        "timestamp": "0 days ago at 08:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 55,
        "responseTimeMs": 2070,
        "errors": 2,
        "level": 4,
        "score": 51,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-70-2",
        "timestamp": "3 days ago at 11:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 63,
        "responseTimeMs": 1728,
        "errors": 1,
        "level": 1,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-70-3",
        "timestamp": "0 days ago at 14:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 60,
        "responseTimeMs": 1934,
        "errors": 4,
        "level": 1,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-70-4",
        "timestamp": "0 days ago at 10:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 63,
        "responseTimeMs": 2503,
        "errors": 0,
        "level": 1,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-70-5",
        "timestamp": "6 days ago at 10:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 63,
        "responseTimeMs": 3660,
        "errors": 2,
        "level": 4,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-71",
      "name": "Ibetombi Angami",
      "age": 75,
      "gender": "Female",
      "location": "Jorhat, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Manoj Angami (Nephew)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-71-1",
        "name": "Manoj Angami",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-71-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-71-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-71-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Manoj Angami"
      },
      {
        "id": "rem-71-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-71-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Manoj Angami"
      },
      {
        "id": "rem-71-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Manoj Angami"
      },
      {
        "id": "rem-71-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Manoj Angami"
      },
      {
        "id": "rem-71-6",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Manoj Angami"
      }
    ],
    "memories": [
      {
        "id": "mem-71-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Autumn 2014",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-15"
      },
      {
        "id": "mem-71-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-26"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 61,
        "attention": 63,
        "executive": 57,
        "composite": 60
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 61,
        "attention": 65,
        "executive": 56,
        "composite": 61
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 63,
        "attention": 58,
        "executive": 60,
        "composite": 60
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 60,
        "attention": 58,
        "executive": 54,
        "composite": 57
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 58,
        "attention": 56,
        "executive": 52,
        "composite": 55
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 55,
        "attention": 53,
        "executive": 54,
        "composite": 54
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 53,
        "attention": 54,
        "executive": 55,
        "composite": 54
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 53,
        "attention": 50,
        "executive": 48,
        "composite": 50
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 53,
        "attention": 53,
        "executive": 49,
        "composite": 52
      }
    ],
    "gameSessions": [
      {
        "id": "sess-71-1",
        "timestamp": "2 days ago at 17:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 3087,
        "errors": 1,
        "level": 2,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-71-2",
        "timestamp": "4 days ago at 18:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 54,
        "responseTimeMs": 1561,
        "errors": 1,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-71-3",
        "timestamp": "0 days ago at 15:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 59,
        "responseTimeMs": 2195,
        "errors": 2,
        "level": 2,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-71-4",
        "timestamp": "0 days ago at 09:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 48,
        "responseTimeMs": 3387,
        "errors": 2,
        "level": 4,
        "score": 47,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-71-5",
        "timestamp": "1 days ago at 09:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 57,
        "responseTimeMs": 2674,
        "errors": 3,
        "level": 4,
        "score": 56,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-72",
      "name": "Nongthombam Konyak",
      "age": 77,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Zhavise Konyak (Niece)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-72-1",
        "name": "Zhavise Konyak",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-72-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-72-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-72-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-72-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-72-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zhavise Konyak"
      },
      {
        "id": "rem-72-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-72-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-72-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-72-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Monsoon 2012",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-29"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 72,
        "attention": 69,
        "executive": 69,
        "composite": 70
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 68,
        "executive": 61,
        "composite": 67
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 68,
        "executive": 64,
        "composite": 67
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 66,
        "attention": 67,
        "executive": 58,
        "composite": 64
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 62,
        "attention": 65,
        "executive": 56,
        "composite": 61
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 64,
        "attention": 63,
        "executive": 56,
        "composite": 61
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 60,
        "attention": 61,
        "executive": 54,
        "composite": 58
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 60,
        "attention": 62,
        "executive": 53,
        "composite": 58
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 57,
        "executive": 56,
        "composite": 57
      }
    ],
    "gameSessions": [
      {
        "id": "sess-72-1",
        "timestamp": "5 days ago at 13:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 60,
        "responseTimeMs": 3378,
        "errors": 1,
        "level": 4,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-72-2",
        "timestamp": "3 days ago at 12:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 49,
        "responseTimeMs": 2014,
        "errors": 3,
        "level": 5,
        "score": 54,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-72-3",
        "timestamp": "1 days ago at 14:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 48,
        "responseTimeMs": 2385,
        "errors": 2,
        "level": 2,
        "score": 50,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-72-4",
        "timestamp": "0 days ago at 13:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 66,
        "responseTimeMs": 2757,
        "errors": 4,
        "level": 1,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-73",
      "name": "Ranjita Rai",
      "age": 74,
      "gender": "Female",
      "location": "Shillong, Meghalaya",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Rebia Rai (Nephew)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "NEIGRIHMS Shillong",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-73-1",
        "name": "Rebia Rai",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Shillong, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-73-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "NEIGRIHMS Shillong",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-73-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Shillong, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-73-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-73-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-73-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rebia Rai"
      },
      {
        "id": "rem-73-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-73-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-73-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Rebia Rai"
      }
    ],
    "memories": [
      {
        "id": "mem-73-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-73-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 75,
        "executive": 76,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 76,
        "executive": 74,
        "composite": 74
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 71,
        "attention": 70,
        "executive": 71,
        "composite": 71
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 68,
        "attention": 71,
        "executive": 69,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 68,
        "attention": 69,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 64,
        "attention": 67,
        "executive": 68,
        "composite": 66
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 67,
        "attention": 67,
        "executive": 64,
        "composite": 66
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 65,
        "attention": 66,
        "executive": 63,
        "composite": 65
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 68,
        "executive": 60,
        "composite": 62
      }
    ],
    "gameSessions": [
      {
        "id": "sess-73-1",
        "timestamp": "5 days ago at 17:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 54,
        "responseTimeMs": 3726,
        "errors": 0,
        "level": 5,
        "score": 53,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-73-2",
        "timestamp": "3 days ago at 18:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 53,
        "responseTimeMs": 4172,
        "errors": 1,
        "level": 3,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-73-3",
        "timestamp": "6 days ago at 14:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 63,
        "responseTimeMs": 2626,
        "errors": 0,
        "level": 2,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-73-4",
        "timestamp": "6 days ago at 09:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 52,
        "responseTimeMs": 3940,
        "errors": 0,
        "level": 1,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-74",
      "name": "Vanlalruata Chhangte",
      "age": 66,
      "gender": "Male",
      "location": "Guwahati, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Kanchi Chhangte (Daughter-in-law)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "GMCH Guwahati",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-74-1",
        "name": "Kanchi Chhangte",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Guwahati, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-74-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "GMCH Guwahati",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-74-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Guwahati, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-74-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-74-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kanchi Chhangte"
      },
      {
        "id": "rem-74-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Kanchi Chhangte"
      },
      {
        "id": "rem-74-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-74-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-74-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-74-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-74-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-74-3",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 74,
        "attention": 78,
        "executive": 71,
        "composite": 74
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 73,
        "attention": 77,
        "executive": 69,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 75,
        "attention": 83,
        "executive": 72,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 78,
        "attention": 79,
        "executive": 72,
        "composite": 76
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 82,
        "attention": 83,
        "executive": 71,
        "composite": 79
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 80,
        "attention": 86,
        "executive": 75,
        "composite": 80
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 81,
        "attention": 83,
        "executive": 74,
        "composite": 79
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 85,
        "attention": 84,
        "executive": 78,
        "composite": 82
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 90,
        "executive": 78,
        "composite": 85
      }
    ],
    "gameSessions": [
      {
        "id": "sess-74-1",
        "timestamp": "2 days ago at 09:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 82,
        "responseTimeMs": 1544,
        "errors": 2,
        "level": 2,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-74-2",
        "timestamp": "1 days ago at 16:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 86,
        "responseTimeMs": 3964,
        "errors": 1,
        "level": 5,
        "score": 84,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-74-3",
        "timestamp": "4 days ago at 18:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 77,
        "responseTimeMs": 4147,
        "errors": 3,
        "level": 4,
        "score": 75,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-74-4",
        "timestamp": "0 days ago at 15:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 91,
        "responseTimeMs": 2624,
        "errors": 3,
        "level": 1,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-75",
      "name": "Nongthombam Lhadon",
      "age": 80,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Tenzin Lhadon (Son)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-75-1",
        "name": "Tenzin Lhadon",
        "relationship": "Son (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-75-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-75-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-75-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-75-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-75-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-75-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-75-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tenzin Lhadon"
      }
    ],
    "memories": [
      {
        "id": "mem-75-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Autumn 2014",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-75-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Spring 2010",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-75-3",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Spring 2010",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-16"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 74,
        "attention": 77,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 76,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 71,
        "attention": 76,
        "executive": 67,
        "composite": 71
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 69,
        "attention": 69,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 62,
        "attention": 71,
        "executive": 65,
        "composite": 66
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 61,
        "attention": 67,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 64,
        "attention": 66,
        "executive": 62,
        "composite": 64
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 68,
        "executive": 57,
        "composite": 61
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 58,
        "attention": 64,
        "executive": 57,
        "composite": 60
      }
    ],
    "gameSessions": [
      {
        "id": "sess-75-1",
        "timestamp": "1 days ago at 15:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 54,
        "responseTimeMs": 3918,
        "errors": 4,
        "level": 5,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-75-2",
        "timestamp": "3 days ago at 18:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 65,
        "responseTimeMs": 1932,
        "errors": 1,
        "level": 2,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-75-3",
        "timestamp": "4 days ago at 16:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 2269,
        "errors": 0,
        "level": 3,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-76",
      "name": "Meenakshi Ao",
      "age": 88,
      "gender": "Female",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Ibetombi Ao (Son)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-76-1",
        "name": "Ibetombi Ao",
        "relationship": "Son (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-76-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-76-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-76-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ibetombi Ao"
      },
      {
        "id": "rem-76-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Ibetombi Ao"
      },
      {
        "id": "rem-76-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-76-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-76-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      }
    ],
    "memories": [
      {
        "id": "mem-76-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Spring 2010",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-76-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 62,
        "attention": 63,
        "executive": 65,
        "composite": 63
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 63,
        "attention": 67,
        "executive": 64,
        "composite": 65
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 64,
        "attention": 65,
        "executive": 64,
        "composite": 64
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 66,
        "attention": 67,
        "executive": 68,
        "composite": 67
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 65,
        "attention": 67,
        "executive": 65,
        "composite": 66
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 68,
        "attention": 72,
        "executive": 71,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 69,
        "attention": 73,
        "executive": 72,
        "composite": 71
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 68,
        "attention": 76,
        "executive": 74,
        "composite": 73
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 74,
        "attention": 75,
        "executive": 75,
        "composite": 75
      }
    ],
    "gameSessions": [
      {
        "id": "sess-76-1",
        "timestamp": "6 days ago at 13:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 81,
        "responseTimeMs": 2936,
        "errors": 4,
        "level": 3,
        "score": 77,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-76-2",
        "timestamp": "0 days ago at 13:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3621,
        "errors": 4,
        "level": 4,
        "score": 74,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-76-3",
        "timestamp": "5 days ago at 08:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 70,
        "responseTimeMs": 2402,
        "errors": 1,
        "level": 3,
        "score": 70,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-76-4",
        "timestamp": "5 days ago at 14:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 66,
        "responseTimeMs": 1865,
        "errors": 1,
        "level": 4,
        "score": 67,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-77",
      "name": "Lalrinawma Debbarma",
      "age": 75,
      "gender": "Male",
      "location": "Gangtok, Sikkim",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Thoibi Debbarma (Nephew)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "STNM Hospital Gangtok",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-77-1",
        "name": "Thoibi Debbarma",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Gangtok, Sikkim",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-77-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "STNM Hospital Gangtok",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-77-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Gangtok, Sikkim Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-77-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Thoibi Debbarma"
      },
      {
        "id": "rem-77-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Thoibi Debbarma"
      },
      {
        "id": "rem-77-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-77-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-77-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-77-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-77-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-21"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 83,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 76,
        "attention": 79,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 76,
        "attention": 76,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 76,
        "attention": 76,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 73,
        "executive": 69,
        "composite": 72
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 73,
        "attention": 74,
        "executive": 70,
        "composite": 72
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 73,
        "attention": 70,
        "executive": 66,
        "composite": 70
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 70,
        "attention": 71,
        "executive": 62,
        "composite": 68
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 65,
        "attention": 73,
        "executive": 62,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-77-1",
        "timestamp": "0 days ago at 16:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 65,
        "responseTimeMs": 3224,
        "errors": 0,
        "level": 2,
        "score": 64,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-77-2",
        "timestamp": "4 days ago at 16:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 75,
        "responseTimeMs": 3725,
        "errors": 4,
        "level": 3,
        "score": 78,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-77-3",
        "timestamp": "3 days ago at 18:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 72,
        "responseTimeMs": 3621,
        "errors": 3,
        "level": 1,
        "score": 71,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-77-4",
        "timestamp": "5 days ago at 09:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 58,
        "responseTimeMs": 2690,
        "errors": 4,
        "level": 4,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-77-5",
        "timestamp": "5 days ago at 17:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 3614,
        "errors": 1,
        "level": 5,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-77-6",
        "timestamp": "5 days ago at 18:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 2773,
        "errors": 0,
        "level": 4,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-78",
      "name": "Diganta Baruah",
      "age": 61,
      "gender": "Male",
      "location": "Silchar, Assam",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Lhakpa Baruah (Son)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-78-1",
        "name": "Lhakpa Baruah",
        "relationship": "Son (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-78-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-78-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-78-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-78-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-78-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lhakpa Baruah"
      },
      {
        "id": "rem-78-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-78-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-78-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-29"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 77,
        "executive": 72,
        "composite": 72
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 76,
        "executive": 72,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 71,
        "attention": 76,
        "executive": 72,
        "composite": 73
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 70,
        "attention": 77,
        "executive": 74,
        "composite": 74
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 75,
        "executive": 69,
        "composite": 72
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 78,
        "executive": 71,
        "composite": 73
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 72,
        "attention": 78,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 68,
        "attention": 74,
        "executive": 73,
        "composite": 72
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 74,
        "executive": 71,
        "composite": 70
      }
    ],
    "gameSessions": [
      {
        "id": "sess-78-1",
        "timestamp": "1 days ago at 11:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 61,
        "responseTimeMs": 3545,
        "errors": 3,
        "level": 3,
        "score": 65,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-78-2",
        "timestamp": "5 days ago at 11:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 80,
        "responseTimeMs": 2212,
        "errors": 3,
        "level": 4,
        "score": 83,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-78-3",
        "timestamp": "0 days ago at 09:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 61,
        "responseTimeMs": 3984,
        "errors": 0,
        "level": 2,
        "score": 59,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-78-4",
        "timestamp": "1 days ago at 18:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 62,
        "responseTimeMs": 3511,
        "errors": 3,
        "level": 3,
        "score": 61,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-78-5",
        "timestamp": "6 days ago at 16:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 64,
        "responseTimeMs": 1599,
        "errors": 0,
        "level": 2,
        "score": 61,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-78-6",
        "timestamp": "2 days ago at 14:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 76,
        "responseTimeMs": 4130,
        "errors": 4,
        "level": 4,
        "score": 80,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-79",
      "name": "Sonam Reang",
      "age": 87,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Anil Reang (Son)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-79-1",
        "name": "Anil Reang",
        "relationship": "Son (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-79-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-79-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-79-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anil Reang"
      },
      {
        "id": "rem-79-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anil Reang"
      },
      {
        "id": "rem-79-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anil Reang"
      },
      {
        "id": "rem-79-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-79-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anil Reang"
      },
      {
        "id": "rem-79-6",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anil Reang"
      }
    ],
    "memories": [
      {
        "id": "mem-79-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "2016",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-79-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-14"
      },
      {
        "id": "mem-79-3",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Spring 2010",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-24"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 73,
        "attention": 76,
        "executive": 71,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 80,
        "executive": 69,
        "composite": 74
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 71,
        "attention": 75,
        "executive": 64,
        "composite": 70
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 70,
        "attention": 71,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 69,
        "attention": 70,
        "executive": 64,
        "composite": 68
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 68,
        "attention": 73,
        "executive": 58,
        "composite": 66
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 70,
        "attention": 67,
        "executive": 61,
        "composite": 66
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 64,
        "attention": 67,
        "executive": 58,
        "composite": 63
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 61,
        "attention": 69,
        "executive": 56,
        "composite": 62
      }
    ],
    "gameSessions": [
      {
        "id": "sess-79-1",
        "timestamp": "1 days ago at 13:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 72,
        "responseTimeMs": 2475,
        "errors": 1,
        "level": 1,
        "score": 71,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-79-2",
        "timestamp": "6 days ago at 16:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 52,
        "responseTimeMs": 1561,
        "errors": 1,
        "level": 1,
        "score": 51,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-79-3",
        "timestamp": "2 days ago at 08:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 53,
        "responseTimeMs": 4183,
        "errors": 1,
        "level": 3,
        "score": 52,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-80",
      "name": "Toshi Gurung",
      "age": 82,
      "gender": "Male",
      "location": "Dibrugarh, Assam",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Maya Gurung (Nephew)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Assam Medical College, Dibrugarh",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-80-1",
        "name": "Maya Gurung",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Dibrugarh, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-80-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Assam Medical College, Dibrugarh",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-80-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dibrugarh, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-80-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-80-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-80-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-80-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-80-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Maya Gurung"
      }
    ],
    "memories": [
      {
        "id": "mem-80-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-80-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Autumn 2014",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-27"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 82,
        "executive": 87,
        "composite": 83
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 80,
        "attention": 77,
        "executive": 80,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 75,
        "attention": 75,
        "executive": 81,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 75,
        "attention": 77,
        "executive": 80,
        "composite": 77
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 71,
        "attention": 73,
        "executive": 79,
        "composite": 74
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 69,
        "attention": 75,
        "executive": 74,
        "composite": 73
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 67,
        "attention": 68,
        "executive": 78,
        "composite": 71
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 67,
        "attention": 67,
        "executive": 75,
        "composite": 70
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 66,
        "executive": 74,
        "composite": 69
      }
    ],
    "gameSessions": [
      {
        "id": "sess-80-1",
        "timestamp": "2 days ago at 13:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 70,
        "responseTimeMs": 4174,
        "errors": 4,
        "level": 1,
        "score": 65,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-80-2",
        "timestamp": "6 days ago at 12:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 65,
        "responseTimeMs": 1570,
        "errors": 3,
        "level": 1,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-80-3",
        "timestamp": "5 days ago at 16:15 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 60,
        "responseTimeMs": 3873,
        "errors": 0,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-80-4",
        "timestamp": "3 days ago at 10:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 70,
        "responseTimeMs": 2631,
        "errors": 2,
        "level": 4,
        "score": 75,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-80-5",
        "timestamp": "6 days ago at 17:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 64,
        "responseTimeMs": 4181,
        "errors": 0,
        "level": 2,
        "score": 61,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-81",
      "name": "Vimenuo Sema",
      "age": 62,
      "gender": "Female",
      "location": "Aizawl, Mizoram",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Nokseng Sema (Grandson)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Civil Hospital Aizawl",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-81-1",
        "name": "Nokseng Sema",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Aizawl, Mizoram",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-81-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Civil Hospital Aizawl",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-81-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Aizawl, Mizoram Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-81-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Sema"
      },
      {
        "id": "rem-81-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-81-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-81-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-81-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Sema"
      },
      {
        "id": "rem-81-6",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      }
    ],
    "memories": [
      {
        "id": "mem-81-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "2016",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-81-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 90,
        "attention": 90,
        "executive": 87,
        "composite": 89
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 89,
        "attention": 88,
        "executive": 84,
        "composite": 87
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 86,
        "attention": 88,
        "executive": 88,
        "composite": 87
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 86,
        "attention": 87,
        "executive": 91,
        "composite": 88
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 83,
        "attention": 86,
        "executive": 90,
        "composite": 86
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 85,
        "attention": 86,
        "executive": 91,
        "composite": 87
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 87,
        "attention": 86,
        "executive": 91,
        "composite": 88
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 84,
        "attention": 89,
        "executive": 92,
        "composite": 88
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 81,
        "attention": 90,
        "executive": 92,
        "composite": 88
      }
    ],
    "gameSessions": [
      {
        "id": "sess-81-1",
        "timestamp": "4 days ago at 12:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 91,
        "responseTimeMs": 1983,
        "errors": 0,
        "level": 4,
        "score": 93,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-81-2",
        "timestamp": "3 days ago at 18:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 88,
        "responseTimeMs": 3359,
        "errors": 0,
        "level": 2,
        "score": 84,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-81-3",
        "timestamp": "5 days ago at 15:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 86,
        "responseTimeMs": 1639,
        "errors": 3,
        "level": 1,
        "score": 89,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-81-4",
        "timestamp": "4 days ago at 16:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 81,
        "responseTimeMs": 2951,
        "errors": 1,
        "level": 4,
        "score": 77,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-82",
      "name": "Vanlalruata Deka",
      "age": 71,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Sengphan Deka (Granddaughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-82-1",
        "name": "Sengphan Deka",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-82-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-82-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-82-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-82-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Deka"
      },
      {
        "id": "rem-82-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-82-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Deka"
      },
      {
        "id": "rem-82-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-82-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sengphan Deka"
      }
    ],
    "memories": [
      {
        "id": "mem-82-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-82-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Spring 2010",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 70,
        "attention": 65,
        "executive": 67,
        "composite": 67
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 68,
        "executive": 71,
        "composite": 70
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 72,
        "attention": 69,
        "executive": 69,
        "composite": 70
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 74,
        "attention": 69,
        "executive": 69,
        "composite": 71
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 75,
        "attention": 74,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 77,
        "executive": 76,
        "composite": 76
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 77,
        "attention": 75,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 75,
        "attention": 80,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 81,
        "attention": 81,
        "executive": 74,
        "composite": 79
      }
    ],
    "gameSessions": [
      {
        "id": "sess-82-1",
        "timestamp": "3 days ago at 18:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 2789,
        "errors": 0,
        "level": 4,
        "score": 70,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-82-2",
        "timestamp": "2 days ago at 11:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 88,
        "responseTimeMs": 4069,
        "errors": 0,
        "level": 2,
        "score": 91,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-82-3",
        "timestamp": "1 days ago at 18:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 81,
        "responseTimeMs": 2120,
        "errors": 3,
        "level": 2,
        "score": 85,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-83",
      "name": "Dolkar Saikia",
      "age": 67,
      "gender": "Female",
      "location": "Guwahati, Assam",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Radheshyam Saikia (Nephew)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "GMCH Guwahati",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-83-1",
        "name": "Radheshyam Saikia",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Guwahati, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-83-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "GMCH Guwahati",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-83-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Guwahati, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-83-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Saikia"
      },
      {
        "id": "rem-83-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Saikia"
      },
      {
        "id": "rem-83-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Radheshyam Saikia"
      },
      {
        "id": "rem-83-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-83-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-83-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-27"
      },
      {
        "id": "mem-83-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-15"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 75,
        "attention": 78,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 72,
        "attention": 81,
        "executive": 76,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 72,
        "attention": 78,
        "executive": 79,
        "composite": 76
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 74,
        "attention": 80,
        "executive": 78,
        "composite": 77
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 79,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 72,
        "attention": 80,
        "executive": 75,
        "composite": 76
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 72,
        "attention": 81,
        "executive": 78,
        "composite": 77
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 73,
        "attention": 82,
        "executive": 76,
        "composite": 77
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 73,
        "attention": 83,
        "executive": 76,
        "composite": 77
      }
    ],
    "gameSessions": [
      {
        "id": "sess-83-1",
        "timestamp": "2 days ago at 13:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 72,
        "responseTimeMs": 2518,
        "errors": 0,
        "level": 1,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-83-2",
        "timestamp": "4 days ago at 14:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 82,
        "responseTimeMs": 2659,
        "errors": 2,
        "level": 1,
        "score": 82,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-83-3",
        "timestamp": "0 days ago at 12:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 80,
        "responseTimeMs": 3047,
        "errors": 3,
        "level": 2,
        "score": 82,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-83-4",
        "timestamp": "0 days ago at 09:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 85,
        "responseTimeMs": 3718,
        "errors": 4,
        "level": 2,
        "score": 89,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-83-5",
        "timestamp": "1 days ago at 17:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 82,
        "responseTimeMs": 3241,
        "errors": 4,
        "level": 1,
        "score": 85,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-83-6",
        "timestamp": "2 days ago at 18:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 3259,
        "errors": 0,
        "level": 2,
        "score": 69,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-84",
      "name": "Neikho Ralte",
      "age": 76,
      "gender": "Female",
      "location": "Kohima, Nagaland",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Padam Ralte (Niece)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "Naga Hospital Authority Kohima",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-84-1",
        "name": "Padam Ralte",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Kohima, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-84-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Naga Hospital Authority Kohima",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-84-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Kohima, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-84-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-84-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-84-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Padam Ralte"
      },
      {
        "id": "rem-84-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Padam Ralte"
      },
      {
        "id": "rem-84-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-84-6",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      }
    ],
    "memories": [
      {
        "id": "mem-84-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-15"
      },
      {
        "id": "mem-84-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Monsoon 2012",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-84-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Spring 2010",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 74,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 79,
        "attention": 76,
        "executive": 71,
        "composite": 75
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 80,
        "attention": 80,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 82,
        "attention": 79,
        "executive": 76,
        "composite": 79
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 81,
        "attention": 82,
        "executive": 76,
        "composite": 80
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 81,
        "attention": 79,
        "executive": 75,
        "composite": 78
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 84,
        "attention": 84,
        "executive": 78,
        "composite": 82
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 85,
        "attention": 84,
        "executive": 77,
        "composite": 82
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 87,
        "executive": 78,
        "composite": 84
      }
    ],
    "gameSessions": [
      {
        "id": "sess-84-1",
        "timestamp": "0 days ago at 12:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 77,
        "responseTimeMs": 1884,
        "errors": 4,
        "level": 4,
        "score": 73,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-84-2",
        "timestamp": "4 days ago at 10:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 76,
        "responseTimeMs": 3790,
        "errors": 1,
        "level": 3,
        "score": 77,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-84-3",
        "timestamp": "2 days ago at 14:30 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 74,
        "responseTimeMs": 3151,
        "errors": 2,
        "level": 5,
        "score": 71,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-84-4",
        "timestamp": "4 days ago at 10:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 87,
        "responseTimeMs": 2646,
        "errors": 1,
        "level": 3,
        "score": 84,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-84-5",
        "timestamp": "4 days ago at 18:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 3925,
        "errors": 4,
        "level": 3,
        "score": 79,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-84-6",
        "timestamp": "3 days ago at 11:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 91,
        "responseTimeMs": 2449,
        "errors": 1,
        "level": 1,
        "score": 93,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-85",
      "name": "Bipul Lhadon",
      "age": 76,
      "gender": "Male",
      "location": "Jorhat, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Priyanka Lhadon (Granddaughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-85-1",
        "name": "Priyanka Lhadon",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-85-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-85-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-85-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Lhadon"
      },
      {
        "id": "rem-85-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Lhadon"
      },
      {
        "id": "rem-85-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Lhadon"
      },
      {
        "id": "rem-85-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Lhadon"
      },
      {
        "id": "rem-85-5",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Lhadon"
      }
    ],
    "memories": [
      {
        "id": "mem-85-1",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-85-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-10"
      },
      {
        "id": "mem-85-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 79,
        "attention": 82,
        "executive": 82,
        "composite": 81
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 77,
        "attention": 79,
        "executive": 80,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 75,
        "attention": 82,
        "executive": 80,
        "composite": 79
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 76,
        "attention": 76,
        "executive": 81,
        "composite": 78
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 72,
        "attention": 78,
        "executive": 74,
        "composite": 75
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 70,
        "attention": 73,
        "executive": 77,
        "composite": 73
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 71,
        "attention": 73,
        "executive": 74,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 67,
        "attention": 73,
        "executive": 73,
        "composite": 71
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 66,
        "attention": 68,
        "executive": 68,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-85-1",
        "timestamp": "0 days ago at 18:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 71,
        "responseTimeMs": 1751,
        "errors": 0,
        "level": 2,
        "score": 70,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-85-2",
        "timestamp": "1 days ago at 15:00 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 60,
        "responseTimeMs": 2313,
        "errors": 4,
        "level": 4,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-85-3",
        "timestamp": "0 days ago at 12:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 70,
        "responseTimeMs": 1982,
        "errors": 2,
        "level": 4,
        "score": 73,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-85-4",
        "timestamp": "3 days ago at 09:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 74,
        "responseTimeMs": 2247,
        "errors": 0,
        "level": 2,
        "score": 70,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-86",
      "name": "Vimenuo Sarma",
      "age": 85,
      "gender": "Female",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Lhakpa Sarma (Grandson)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-86-1",
        "name": "Lhakpa Sarma",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-86-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-86-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-86-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-86-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lhakpa Sarma"
      },
      {
        "id": "rem-86-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-86-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-86-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-86-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-86-2",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-25"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 64,
        "attention": 73,
        "executive": 71,
        "composite": 69
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 64,
        "attention": 71,
        "executive": 64,
        "composite": 66
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 60,
        "attention": 69,
        "executive": 63,
        "composite": 64
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 57,
        "attention": 70,
        "executive": 61,
        "composite": 63
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 60,
        "attention": 69,
        "executive": 63,
        "composite": 64
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 55,
        "attention": 66,
        "executive": 59,
        "composite": 60
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 55,
        "attention": 66,
        "executive": 59,
        "composite": 60
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 58,
        "attention": 65,
        "executive": 59,
        "composite": 61
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 53,
        "attention": 60,
        "executive": 59,
        "composite": 57
      }
    ],
    "gameSessions": [
      {
        "id": "sess-86-1",
        "timestamp": "1 days ago at 16:00 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 48,
        "responseTimeMs": 2603,
        "errors": 4,
        "level": 4,
        "score": 52,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-86-2",
        "timestamp": "2 days ago at 17:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 48,
        "responseTimeMs": 3826,
        "errors": 1,
        "level": 2,
        "score": 48,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-86-3",
        "timestamp": "0 days ago at 12:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 54,
        "responseTimeMs": 3378,
        "errors": 3,
        "level": 2,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-86-4",
        "timestamp": "1 days ago at 12:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 47,
        "responseTimeMs": 2467,
        "errors": 1,
        "level": 4,
        "score": 43,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-86-5",
        "timestamp": "4 days ago at 13:00 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 61,
        "responseTimeMs": 2911,
        "errors": 0,
        "level": 4,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-86-6",
        "timestamp": "3 days ago at 18:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 2494,
        "errors": 0,
        "level": 4,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-87",
      "name": "Wangba Saikia",
      "age": 73,
      "gender": "Male",
      "location": "Dimapur, Nagaland",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Zonunmawii Saikia (Nephew)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Dimapur District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-87-1",
        "name": "Zonunmawii Saikia",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Dimapur, Nagaland",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-87-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "Dimapur District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-87-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Dimapur, Nagaland Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-87-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-87-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-87-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Zonunmawii Saikia"
      },
      {
        "id": "rem-87-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-87-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-87-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      }
    ],
    "memories": [
      {
        "id": "mem-87-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-19"
      },
      {
        "id": "mem-87-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-23"
      },
      {
        "id": "mem-87-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Spring 2010",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-24"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 75,
        "attention": 81,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 79,
        "attention": 78,
        "executive": 72,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 76,
        "attention": 81,
        "executive": 75,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 80,
        "attention": 81,
        "executive": 74,
        "composite": 78
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 77,
        "attention": 76,
        "executive": 70,
        "composite": 74
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 80,
        "attention": 81,
        "executive": 72,
        "composite": 78
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 82,
        "attention": 76,
        "executive": 72,
        "composite": 77
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 78,
        "attention": 77,
        "executive": 72,
        "composite": 76
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 77,
        "attention": 82,
        "executive": 72,
        "composite": 77
      }
    ],
    "gameSessions": [
      {
        "id": "sess-87-1",
        "timestamp": "2 days ago at 08:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 80,
        "responseTimeMs": 1844,
        "errors": 4,
        "level": 1,
        "score": 81,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-87-2",
        "timestamp": "3 days ago at 12:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 82,
        "responseTimeMs": 4028,
        "errors": 1,
        "level": 5,
        "score": 83,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-87-3",
        "timestamp": "2 days ago at 08:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 4112,
        "errors": 0,
        "level": 4,
        "score": 72,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-87-4",
        "timestamp": "5 days ago at 12:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 87,
        "responseTimeMs": 2253,
        "errors": 2,
        "level": 1,
        "score": 83,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-87-5",
        "timestamp": "4 days ago at 12:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 86,
        "responseTimeMs": 3708,
        "errors": 1,
        "level": 1,
        "score": 89,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-88",
      "name": "Vimenuo Gurung",
      "age": 67,
      "gender": "Female",
      "location": "Shillong, Meghalaya",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Bhaben Gurung (Niece)",
      "ashaWorker": "Mousumi Devi (Community ASHA Worker)",
      "hospital": "NEIGRIHMS Shillong",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-88-1",
        "name": "Bhaben Gurung",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Shillong, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-88-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "NEIGRIHMS Shillong",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-88-3",
        "name": "Mousumi Devi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Shillong, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-88-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-88-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Bhaben Gurung"
      },
      {
        "id": "rem-88-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      },
      {
        "id": "rem-88-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Mousumi Devi"
      }
    ],
    "memories": [
      {
        "id": "mem-88-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-88-2",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Winter 2008",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-30"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 80,
        "attention": 86,
        "executive": 84,
        "composite": 83
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 83,
        "attention": 86,
        "executive": 83,
        "composite": 84
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 82,
        "attention": 91,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 83,
        "attention": 88,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 83,
        "attention": 90,
        "executive": 86,
        "composite": 86
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 89,
        "attention": 93,
        "executive": 89,
        "composite": 90
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 86,
        "attention": 94,
        "executive": 92,
        "composite": 91
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 87,
        "attention": 93,
        "executive": 91,
        "composite": 90
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 88,
        "attention": 97,
        "executive": 96,
        "composite": 94
      }
    ],
    "gameSessions": [
      {
        "id": "sess-88-1",
        "timestamp": "6 days ago at 18:30 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 3681,
        "errors": 3,
        "level": 2,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-88-2",
        "timestamp": "6 days ago at 15:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 94,
        "responseTimeMs": 2227,
        "errors": 3,
        "level": 3,
        "score": 94,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-88-3",
        "timestamp": "3 days ago at 18:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 95,
        "responseTimeMs": 1902,
        "errors": 3,
        "level": 5,
        "score": 93,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-89",
      "name": "Lalrinpuii Meitei",
      "age": 67,
      "gender": "Female",
      "location": "Jorhat, Assam",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Diganta Meitei (Daughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-89-1",
        "name": "Diganta Meitei",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-89-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-89-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-89-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-89-2",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Diganta Meitei"
      },
      {
        "id": "rem-89-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-89-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-89-5",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Diganta Meitei"
      }
    ],
    "memories": [
      {
        "id": "mem-89-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-30"
      },
      {
        "id": "mem-89-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Spring 2010",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-89-3",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "2016",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-17"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 76,
        "attention": 76,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 71,
        "attention": 71,
        "executive": 69,
        "composite": 70
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 70,
        "attention": 70,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 72,
        "attention": 71,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 65,
        "attention": 69,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 68,
        "attention": 66,
        "executive": 62,
        "composite": 65
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 65,
        "attention": 67,
        "executive": 60,
        "composite": 64
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 67,
        "attention": 67,
        "executive": 59,
        "composite": 64
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 64,
        "attention": 65,
        "executive": 58,
        "composite": 62
      }
    ],
    "gameSessions": [
      {
        "id": "sess-89-1",
        "timestamp": "6 days ago at 15:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 3934,
        "errors": 0,
        "level": 2,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-89-2",
        "timestamp": "2 days ago at 17:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 62,
        "responseTimeMs": 2756,
        "errors": 1,
        "level": 5,
        "score": 57,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-89-3",
        "timestamp": "5 days ago at 12:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 58,
        "responseTimeMs": 2026,
        "errors": 1,
        "level": 5,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-89-4",
        "timestamp": "1 days ago at 08:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 69,
        "responseTimeMs": 2107,
        "errors": 4,
        "level": 1,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-89-5",
        "timestamp": "6 days ago at 16:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 59,
        "responseTimeMs": 2197,
        "errors": 2,
        "level": 2,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-90",
      "name": "Akoli Konyak",
      "age": 73,
      "gender": "Female",
      "location": "Agartala, Tripura",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Dolkar Konyak (Daughter-in-law)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-90-1",
        "name": "Dolkar Konyak",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-90-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-90-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-90-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Konyak"
      },
      {
        "id": "rem-90-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Konyak"
      },
      {
        "id": "rem-90-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-90-4",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Konyak"
      },
      {
        "id": "rem-90-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      }
    ],
    "memories": [
      {
        "id": "mem-90-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "2016",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-29"
      },
      {
        "id": "mem-90-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Winter 2008",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-25"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 74,
        "attention": 74,
        "executive": 68,
        "composite": 72
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 70,
        "attention": 80,
        "executive": 69,
        "composite": 73
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 69,
        "attention": 76,
        "executive": 72,
        "composite": 72
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 73,
        "attention": 80,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 68,
        "attention": 76,
        "executive": 69,
        "composite": 71
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 79,
        "executive": 69,
        "composite": 73
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 68,
        "attention": 77,
        "executive": 72,
        "composite": 72
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 73,
        "attention": 78,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 74,
        "attention": 83,
        "executive": 69,
        "composite": 75
      }
    ],
    "gameSessions": [
      {
        "id": "sess-90-1",
        "timestamp": "5 days ago at 12:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 75,
        "responseTimeMs": 2519,
        "errors": 2,
        "level": 3,
        "score": 75,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-90-2",
        "timestamp": "3 days ago at 09:15 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 76,
        "responseTimeMs": 2807,
        "errors": 4,
        "level": 4,
        "score": 74,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-90-3",
        "timestamp": "3 days ago at 18:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 68,
        "responseTimeMs": 3315,
        "errors": 2,
        "level": 5,
        "score": 64,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-90-4",
        "timestamp": "1 days ago at 11:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 69,
        "responseTimeMs": 2810,
        "errors": 4,
        "level": 4,
        "score": 65,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-91",
      "name": "Lalthanpuia Dorjee",
      "age": 79,
      "gender": "Male",
      "location": "Silchar, Assam",
      "diagnosis": "Early Alzheimer Cognitive Shift",
      "primaryCaregiver": "Puspa Dorjee (Niece)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "Silchar Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-91-1",
        "name": "Puspa Dorjee",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Silchar, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-91-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Silchar Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-91-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Silchar, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-91-1",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Dorjee"
      },
      {
        "id": "rem-91-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-91-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Dorjee"
      },
      {
        "id": "rem-91-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Dorjee"
      },
      {
        "id": "rem-91-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      },
      {
        "id": "rem-91-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-91-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Winter 2008",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-91-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "2016",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-16"
      },
      {
        "id": "mem-91-3",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 79,
        "executive": 75,
        "composite": 78
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 82,
        "attention": 77,
        "executive": 78,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 78,
        "attention": 75,
        "executive": 73,
        "composite": 75
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 77,
        "attention": 77,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 69,
        "executive": 71,
        "composite": 72
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 74,
        "attention": 68,
        "executive": 67,
        "composite": 70
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 69,
        "attention": 67,
        "executive": 69,
        "composite": 68
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 69,
        "attention": 66,
        "executive": 65,
        "composite": 67
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 68,
        "attention": 64,
        "executive": 65,
        "composite": 66
      }
    ],
    "gameSessions": [
      {
        "id": "sess-91-1",
        "timestamp": "5 days ago at 12:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 65,
        "responseTimeMs": 1594,
        "errors": 1,
        "level": 1,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-91-2",
        "timestamp": "3 days ago at 08:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 64,
        "responseTimeMs": 3598,
        "errors": 2,
        "level": 1,
        "score": 63,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-91-3",
        "timestamp": "4 days ago at 13:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 65,
        "responseTimeMs": 2867,
        "errors": 0,
        "level": 1,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-91-4",
        "timestamp": "0 days ago at 16:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 58,
        "responseTimeMs": 1859,
        "errors": 4,
        "level": 4,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-91-5",
        "timestamp": "0 days ago at 18:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 69,
        "responseTimeMs": 3407,
        "errors": 3,
        "level": 2,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-91-6",
        "timestamp": "4 days ago at 13:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 63,
        "responseTimeMs": 3271,
        "errors": 0,
        "level": 4,
        "score": 60,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-92",
      "name": "Kamala Lotha",
      "age": 61,
      "gender": "Female",
      "location": "Jorhat, Assam",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Chandra Lotha (Daughter)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Jorhat Medical College & Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-92-1",
        "name": "Chandra Lotha",
        "relationship": "Daughter (Primary Caregiver)",
        "location": "Jorhat, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-92-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "Jorhat Medical College & Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-92-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Jorhat, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-92-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Chandra Lotha"
      },
      {
        "id": "rem-92-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-92-3",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-92-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-92-5",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Chandra Lotha"
      }
    ],
    "memories": [
      {
        "id": "mem-92-1",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Winter 2008",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-11"
      },
      {
        "id": "mem-92-2",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-92-3",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Autumn 2014",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-28"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 68,
        "executive": 60,
        "composite": 65
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 64,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 66,
        "attention": 60,
        "executive": 55,
        "composite": 60
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 64,
        "attention": 58,
        "executive": 55,
        "composite": 59
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 61,
        "attention": 60,
        "executive": 54,
        "composite": 58
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 57,
        "attention": 59,
        "executive": 51,
        "composite": 56
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 55,
        "attention": 53,
        "executive": 52,
        "composite": 53
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 59,
        "attention": 50,
        "executive": 52,
        "composite": 54
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 53,
        "attention": 53,
        "executive": 46,
        "composite": 51
      }
    ],
    "gameSessions": [
      {
        "id": "sess-92-1",
        "timestamp": "3 days ago at 08:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 51,
        "responseTimeMs": 2359,
        "errors": 2,
        "level": 3,
        "score": 47,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-92-2",
        "timestamp": "1 days ago at 10:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 49,
        "responseTimeMs": 2243,
        "errors": 2,
        "level": 1,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-92-3",
        "timestamp": "3 days ago at 18:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 42,
        "responseTimeMs": 2586,
        "errors": 4,
        "level": 3,
        "score": 39,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-93",
      "name": "Hemanta Angami",
      "age": 61,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Gita Angami (Daughter-in-law)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-93-1",
        "name": "Gita Angami",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-93-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-93-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-93-1",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-93-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Gita Angami"
      },
      {
        "id": "rem-93-3",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-93-4",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Gita Angami"
      }
    ],
    "memories": [
      {
        "id": "mem-93-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-93-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-93-3",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Winter 2008",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-15"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 71,
        "executive": 64,
        "composite": 68
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 66,
        "attention": 76,
        "executive": 65,
        "composite": 69
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 68,
        "attention": 72,
        "executive": 65,
        "composite": 68
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 69,
        "attention": 78,
        "executive": 69,
        "composite": 72
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 73,
        "attention": 75,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 81,
        "executive": 68,
        "composite": 73
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 73,
        "attention": 81,
        "executive": 71,
        "composite": 75
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 77,
        "attention": 83,
        "executive": 73,
        "composite": 78
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 76,
        "attention": 83,
        "executive": 74,
        "composite": 78
      }
    ],
    "gameSessions": [
      {
        "id": "sess-93-1",
        "timestamp": "4 days ago at 15:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 84,
        "responseTimeMs": 2902,
        "errors": 4,
        "level": 3,
        "score": 84,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-93-2",
        "timestamp": "0 days ago at 16:15 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 84,
        "responseTimeMs": 3373,
        "errors": 0,
        "level": 1,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-93-3",
        "timestamp": "2 days ago at 12:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 82,
        "responseTimeMs": 1839,
        "errors": 4,
        "level": 2,
        "score": 78,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-93-4",
        "timestamp": "4 days ago at 11:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 84,
        "responseTimeMs": 2408,
        "errors": 0,
        "level": 2,
        "score": 88,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-93-5",
        "timestamp": "6 days ago at 10:00 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 83,
        "responseTimeMs": 2985,
        "errors": 4,
        "level": 2,
        "score": 83,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-94",
      "name": "Zhavise Lhadon",
      "age": 64,
      "gender": "Male",
      "location": "Tawang, Arunachal Pradesh",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Sonam Lhadon (Daughter-in-law)",
      "ashaWorker": "Anjali Das (Community ASHA Worker)",
      "hospital": "Tawang District Hospital",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-94-1",
        "name": "Sonam Lhadon",
        "relationship": "Daughter-in-law (Primary Caregiver)",
        "location": "Tawang, Arunachal Pradesh",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-94-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "Tawang District Hospital",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-94-3",
        "name": "Anjali Das",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tawang, Arunachal Pradesh Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-94-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Lhadon"
      },
      {
        "id": "rem-94-2",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Lhadon"
      },
      {
        "id": "rem-94-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-94-4",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-94-5",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Anjali Das"
      },
      {
        "id": "rem-94-6",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Sonam Lhadon"
      }
    ],
    "memories": [
      {
        "id": "mem-94-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-20"
      },
      {
        "id": "mem-94-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "2016",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-18"
      },
      {
        "id": "mem-94-3",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Winter 2008",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 86,
        "attention": 83,
        "executive": 79,
        "composite": 83
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 80,
        "attention": 82,
        "executive": 75,
        "composite": 79
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 84,
        "attention": 80,
        "executive": 75,
        "composite": 80
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 79,
        "attention": 83,
        "executive": 76,
        "composite": 79
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 78,
        "attention": 77,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 76,
        "executive": 72,
        "composite": 75
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 74,
        "attention": 74,
        "executive": 70,
        "composite": 73
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 75,
        "attention": 72,
        "executive": 69,
        "composite": 72
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 71,
        "attention": 70,
        "executive": 65,
        "composite": 69
      }
    ],
    "gameSessions": [
      {
        "id": "sess-94-1",
        "timestamp": "4 days ago at 15:15 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 73,
        "responseTimeMs": 2588,
        "errors": 0,
        "level": 4,
        "score": 73,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-94-2",
        "timestamp": "4 days ago at 16:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 71,
        "responseTimeMs": 1941,
        "errors": 4,
        "level": 1,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-94-3",
        "timestamp": "1 days ago at 13:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 61,
        "responseTimeMs": 1663,
        "errors": 2,
        "level": 4,
        "score": 66,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-95",
      "name": "Vimenuo Limbu",
      "age": 62,
      "gender": "Female",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Dolkar Limbu (Grandson)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-95-1",
        "name": "Dolkar Limbu",
        "relationship": "Grandson (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-95-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-95-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-95-1",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-95-2",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Pranita Kalita"
      },
      {
        "id": "rem-95-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Limbu"
      },
      {
        "id": "rem-95-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Limbu"
      },
      {
        "id": "rem-95-5",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Limbu"
      },
      {
        "id": "rem-95-6",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Limbu"
      }
    ],
    "memories": [
      {
        "id": "mem-95-1",
        "title": "Morning Walk at the Tea Estate",
        "dateOrEra": "Autumn 2014",
        "location": "Local Tea Estate",
        "caption": "Walking through green tea bushes in the gentle morning mist, listening to birds.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the earthy aroma of dewy tea leaves that morning?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-95-2",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Autumn 2014",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-24"
      },
      {
        "id": "mem-95-3",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Autumn 2014",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-14"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 67,
        "attention": 64,
        "executive": 61,
        "composite": 64
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 67,
        "attention": 65,
        "executive": 64,
        "composite": 65
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 68,
        "attention": 68,
        "executive": 66,
        "composite": 67
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 67,
        "attention": 70,
        "executive": 67,
        "composite": 68
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 69,
        "attention": 70,
        "executive": 67,
        "composite": 69
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 71,
        "attention": 73,
        "executive": 69,
        "composite": 71
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 71,
        "attention": 74,
        "executive": 72,
        "composite": 72
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 78,
        "attention": 74,
        "executive": 74,
        "composite": 75
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 78,
        "attention": 74,
        "executive": 73,
        "composite": 75
      }
    ],
    "gameSessions": [
      {
        "id": "sess-95-1",
        "timestamp": "4 days ago at 15:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 70,
        "responseTimeMs": 3757,
        "errors": 4,
        "level": 2,
        "score": 65,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-95-2",
        "timestamp": "3 days ago at 18:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 69,
        "responseTimeMs": 2990,
        "errors": 2,
        "level": 4,
        "score": 69,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-95-3",
        "timestamp": "1 days ago at 13:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 72,
        "responseTimeMs": 2050,
        "errors": 2,
        "level": 2,
        "score": 76,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-96",
      "name": "Manoj Thapa",
      "age": 83,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Age-Related Mild Cognitive Decline",
      "primaryCaregiver": "Priyanka Thapa (Son)",
      "ashaWorker": "Grace Lyngdoh (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-96-1",
        "name": "Priyanka Thapa",
        "relationship": "Son (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-96-2",
        "name": "Dr. Chubatemsu Ao",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-96-3",
        "name": "Grace Lyngdoh",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-96-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      },
      {
        "id": "rem-96-2",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Thapa"
      },
      {
        "id": "rem-96-3",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Priyanka Thapa"
      },
      {
        "id": "rem-96-4",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Grace Lyngdoh"
      }
    ],
    "memories": [
      {
        "id": "mem-96-1",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "2016",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-12"
      },
      {
        "id": "mem-96-2",
        "title": "Ferry Ride Across the River",
        "dateOrEra": "Autumn 2014",
        "location": "Local River Ghat",
        "caption": "Standing on the ferry deck, feeling the cool river breeze and watching the golden sunset.",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the calm sound of river water against the ferry hull?",
        "createdAt": "2026-08-18"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 81,
        "attention": 75,
        "executive": 81,
        "composite": 79
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 78,
        "attention": 77,
        "executive": 78,
        "composite": 78
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 76,
        "attention": 75,
        "executive": 79,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 71,
        "attention": 72,
        "executive": 76,
        "composite": 73
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 72,
        "attention": 73,
        "executive": 79,
        "composite": 75
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 74,
        "attention": 67,
        "executive": 74,
        "composite": 72
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 70,
        "attention": 67,
        "executive": 74,
        "composite": 70
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 66,
        "attention": 64,
        "executive": 72,
        "composite": 67
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 69,
        "attention": 66,
        "executive": 67,
        "composite": 67
      }
    ],
    "gameSessions": [
      {
        "id": "sess-96-1",
        "timestamp": "5 days ago at 09:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 62,
        "responseTimeMs": 1885,
        "errors": 4,
        "level": 3,
        "score": 67,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-96-2",
        "timestamp": "4 days ago at 08:30 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 75,
        "responseTimeMs": 1507,
        "errors": 4,
        "level": 1,
        "score": 71,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-96-3",
        "timestamp": "6 days ago at 17:30 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 64,
        "responseTimeMs": 2206,
        "errors": 1,
        "level": 5,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-96-4",
        "timestamp": "2 days ago at 09:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 61,
        "responseTimeMs": 3851,
        "errors": 1,
        "level": 4,
        "score": 58,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-96-5",
        "timestamp": "4 days ago at 10:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 74,
        "responseTimeMs": 1658,
        "errors": 4,
        "level": 1,
        "score": 77,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-96-6",
        "timestamp": "5 days ago at 10:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 76,
        "responseTimeMs": 3538,
        "errors": 1,
        "level": 5,
        "score": 72,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-97",
      "name": "Akum Rai",
      "age": 82,
      "gender": "Male",
      "location": "Churachandpur, Manipur",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Nokseng Rai (Granddaughter)",
      "ashaWorker": "Nengneihkim Guite (Community ASHA Worker)",
      "hospital": "District Hospital Churachandpur",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-97-1",
        "name": "Nokseng Rai",
        "relationship": "Granddaughter (Primary Caregiver)",
        "location": "Churachandpur, Manipur",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-97-2",
        "name": "Dr. Rina Phukan",
        "relationship": "Family Doctor",
        "location": "District Hospital Churachandpur",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-97-3",
        "name": "Nengneihkim Guite",
        "relationship": "ASHA Healthcare Worker",
        "location": "Churachandpur, Manipur Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-97-1",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Rai"
      },
      {
        "id": "rem-97-2",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-97-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Rai"
      },
      {
        "id": "rem-97-4",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nengneihkim Guite"
      },
      {
        "id": "rem-97-5",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Rai"
      },
      {
        "id": "rem-97-6",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Nokseng Rai"
      }
    ],
    "memories": [
      {
        "id": "mem-97-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "2016",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-17"
      },
      {
        "id": "mem-97-2",
        "title": "Festival Courtyard Gathering",
        "dateOrEra": "Winter 2008",
        "location": "Family Courtyard",
        "caption": "The whole neighborhood joined together for festival songs and shared home-cooked sweets.",
        "imageUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Such joy in the courtyard! Who played music so joyfully that day?",
        "createdAt": "2026-08-22"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 71,
        "attention": 83,
        "executive": 78,
        "composite": 77
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 74,
        "attention": 80,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 72,
        "attention": 82,
        "executive": 77,
        "composite": 77
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 77,
        "attention": 81,
        "executive": 74,
        "composite": 77
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 76,
        "attention": 79,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 76,
        "attention": 80,
        "executive": 77,
        "composite": 78
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 77,
        "attention": 79,
        "executive": 73,
        "composite": 76
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 75,
        "attention": 79,
        "executive": 76,
        "composite": 77
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 75,
        "attention": 78,
        "executive": 74,
        "composite": 76
      }
    ],
    "gameSessions": [
      {
        "id": "sess-97-1",
        "timestamp": "5 days ago at 12:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 69,
        "responseTimeMs": 4064,
        "errors": 2,
        "level": 2,
        "score": 66,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-97-2",
        "timestamp": "5 days ago at 08:45 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 81,
        "responseTimeMs": 3044,
        "errors": 2,
        "level": 2,
        "score": 79,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-97-3",
        "timestamp": "5 days ago at 14:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 71,
        "responseTimeMs": 3339,
        "errors": 1,
        "level": 2,
        "score": 66,
        "trend": "stable",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "stable"
  },
  {
    "profile": {
      "id": "patient-gen-98",
      "name": "Diganta Deka",
      "age": 66,
      "gender": "Male",
      "location": "Agartala, Tripura",
      "diagnosis": "Cognitively Healthy (Baseline Monitoring)",
      "primaryCaregiver": "Puspa Deka (Nephew)",
      "ashaWorker": "Runu Gogoi (Community ASHA Worker)",
      "hospital": "AGMC & GBP Hospital Agartala",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-98-1",
        "name": "Puspa Deka",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Agartala, Tripura",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-98-2",
        "name": "Dr. Hemanta Sarma",
        "relationship": "Family Doctor",
        "location": "AGMC & GBP Hospital Agartala",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-98-3",
        "name": "Runu Gogoi",
        "relationship": "ASHA Healthcare Worker",
        "location": "Agartala, Tripura Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-98-1",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Deka"
      },
      {
        "id": "rem-98-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Deka"
      },
      {
        "id": "rem-98-3",
        "title": "Breakfast & Warm Tea",
        "time": "09:00 AM",
        "category": "meal",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Puspa Deka"
      },
      {
        "id": "rem-98-4",
        "title": "15-Minute Garden Walk",
        "time": "11:00 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Runu Gogoi"
      }
    ],
    "memories": [
      {
        "id": "mem-98-1",
        "title": "Weaving in the Family Workshop",
        "dateOrEra": "Spring 2010",
        "location": "Artisan Workshop",
        "caption": "Working the shuttle across the loom threads to weave a traditional cloth with floral motifs.",
        "imageUrl": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the rhythmic click of the wooden loom shuttle?",
        "createdAt": "2026-08-28"
      },
      {
        "id": "mem-98-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-12"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 73,
        "attention": 65,
        "executive": 68,
        "composite": 69
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 69,
        "attention": 67,
        "executive": 69,
        "composite": 68
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 67,
        "attention": 65,
        "executive": 65,
        "composite": 66
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 64,
        "attention": 61,
        "executive": 63,
        "composite": 63
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 68,
        "attention": 59,
        "executive": 63,
        "composite": 63
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 66,
        "attention": 61,
        "executive": 62,
        "composite": 63
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 62,
        "attention": 56,
        "executive": 58,
        "composite": 59
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 64,
        "attention": 57,
        "executive": 60,
        "composite": 60
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 57,
        "attention": 54,
        "executive": 56,
        "composite": 56
      }
    ],
    "gameSessions": [
      {
        "id": "sess-98-1",
        "timestamp": "4 days ago at 18:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 62,
        "responseTimeMs": 4023,
        "errors": 3,
        "level": 4,
        "score": 62,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-98-2",
        "timestamp": "2 days ago at 13:45 PM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 51,
        "responseTimeMs": 2127,
        "errors": 3,
        "level": 5,
        "score": 51,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-98-3",
        "timestamp": "5 days ago at 10:45 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 50,
        "responseTimeMs": 2156,
        "errors": 2,
        "level": 1,
        "score": 48,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  },
  {
    "profile": {
      "id": "patient-gen-99",
      "name": "Gita Ao",
      "age": 65,
      "gender": "Female",
      "location": "Tezpur, Assam",
      "diagnosis": "Moderate Dementia (Under Care Program)",
      "primaryCaregiver": "Tenzin Ao (Niece)",
      "ashaWorker": "Lily Marak (Community ASHA Worker)",
      "hospital": "Tezpur Medical College",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-99-1",
        "name": "Tenzin Ao",
        "relationship": "Niece (Primary Caregiver)",
        "location": "Tezpur, Assam",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-99-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "Tezpur Medical College",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-99-3",
        "name": "Lily Marak",
        "relationship": "ASHA Healthcare Worker",
        "location": "Tezpur, Assam Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-99-1",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tenzin Ao"
      },
      {
        "id": "rem-99-2",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tenzin Ao"
      },
      {
        "id": "rem-99-3",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Lily Marak"
      },
      {
        "id": "rem-99-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Tenzin Ao"
      }
    ],
    "memories": [
      {
        "id": "mem-99-1",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Spring 2010",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-21"
      },
      {
        "id": "mem-99-2",
        "title": "Sunset Over the River Hill",
        "dateOrEra": "Monsoon 2012",
        "location": "Riverside Park",
        "caption": "Sitting on a bench overlooking the river while the crimson sunset lit up the water.",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "What a calm evening! Do you remember the cool breeze off the river?",
        "createdAt": "2026-08-20"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 85,
        "attention": 87,
        "executive": 83,
        "composite": 85
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 87,
        "attention": 91,
        "executive": 83,
        "composite": 87
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 92,
        "attention": 90,
        "executive": 87,
        "composite": 90
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 91,
        "attention": 91,
        "executive": 90,
        "composite": 91
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 93,
        "attention": 94,
        "executive": 91,
        "composite": 93
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 95,
        "attention": 97,
        "executive": 91,
        "composite": 94
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 96,
        "attention": 98,
        "executive": 90,
        "composite": 95
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 98,
        "attention": 96,
        "executive": 92,
        "composite": 95
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 98,
        "attention": 98,
        "executive": 97,
        "composite": 98
      }
    ],
    "gameSessions": [
      {
        "id": "sess-99-1",
        "timestamp": "2 days ago at 09:15 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 95,
        "responseTimeMs": 2122,
        "errors": 1,
        "level": 4,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-99-2",
        "timestamp": "1 days ago at 16:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 99,
        "responseTimeMs": 2651,
        "errors": 1,
        "level": 1,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-99-3",
        "timestamp": "0 days ago at 08:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 100,
        "responseTimeMs": 3436,
        "errors": 3,
        "level": 4,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-99-4",
        "timestamp": "6 days ago at 13:45 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 100,
        "responseTimeMs": 2244,
        "errors": 3,
        "level": 1,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-99-5",
        "timestamp": "2 days ago at 09:30 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 100,
        "responseTimeMs": 2052,
        "errors": 4,
        "level": 3,
        "score": 100,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-99-6",
        "timestamp": "6 days ago at 18:15 AM",
        "gameType": "matching",
        "gameTitle": "Picture Matching",
        "accuracy": 96,
        "responseTimeMs": 2813,
        "errors": 2,
        "level": 1,
        "score": 92,
        "trend": "improving",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "improving"
  },
  {
    "profile": {
      "id": "patient-gen-100",
      "name": "Rose Chettri",
      "age": 61,
      "gender": "Female",
      "location": "Shillong, Meghalaya",
      "diagnosis": "Mild Cognitive Impairment (Early Dementia)",
      "primaryCaregiver": "Dolkar Chettri (Nephew)",
      "ashaWorker": "Pranita Kalita (Community ASHA Worker)",
      "hospital": "NEIGRIHMS Shillong",
      "notes": "Synthetic profile generated for demo/training dataset purposes."
    },
    "knownFaces": [
      {
        "id": "face-100-1",
        "name": "Dolkar Chettri",
        "relationship": "Nephew (Primary Caregiver)",
        "location": "Shillong, Meghalaya",
        "notes": "Visits regularly, helps with daily routines and medication.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-100-2",
        "name": "Dr. Priya Reddy",
        "relationship": "Family Doctor",
        "location": "NEIGRIHMS Shillong",
        "notes": "Monitors cognitive health and vitals during scheduled visits.",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "id": "face-100-3",
        "name": "Pranita Kalita",
        "relationship": "ASHA Healthcare Worker",
        "location": "Shillong, Meghalaya Sub-Center",
        "notes": "Visits weekly to check medication adherence and cognitive game progress.",
        "photoUrl": "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "reminders": [
      {
        "id": "rem-100-1",
        "title": "Cognitive Game Session (Memory Mate)",
        "time": "10:30 AM",
        "category": "routine",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Chettri"
      },
      {
        "id": "rem-100-2",
        "title": "Night Herbal Tonic & Warm Milk",
        "time": "08:30 PM",
        "category": "medication",
        "completed": true,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Chettri"
      },
      {
        "id": "rem-100-3",
        "title": "Morning Blood Pressure Medicine",
        "time": "08:00 AM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Chettri"
      },
      {
        "id": "rem-100-4",
        "title": "Community Health Worker Visit",
        "time": "04:30 PM",
        "category": "appointment",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Chettri"
      },
      {
        "id": "rem-100-5",
        "title": "Lunch & Afternoon Medication",
        "time": "01:30 PM",
        "category": "medication",
        "completed": false,
        "notes": "Assisted by family and community health worker.",
        "assignedBy": "Dolkar Chettri"
      }
    ],
    "memories": [
      {
        "id": "mem-100-1",
        "title": "Hillside Terrace Farming Day",
        "dateOrEra": "Autumn 2014",
        "location": "Family Terrace Fields",
        "caption": "Working alongside neighbors on the hillside paddy terraces under a clear blue sky.",
        "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the songs sung while planting paddy on the terraces?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-100-2",
        "title": "Family Wedding Celebration",
        "dateOrEra": "Autumn 2014",
        "location": "Village Community Hall",
        "caption": "Dancing and singing together at a family wedding, surrounded by relatives in traditional attire.",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember which song everyone danced to first at the wedding?",
        "createdAt": "2026-08-25"
      },
      {
        "id": "mem-100-3",
        "title": "Morning Prayers at the Local Monastery",
        "dateOrEra": "Monsoon 2012",
        "location": "Village Monastery",
        "caption": "Standing beside prayer wheels in the crisp morning mist, listening to gentle chants.",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
        "aiPrompt": "Do you remember the peaceful hum of the monastery bells?",
        "createdAt": "2026-08-15"
      }
    ],
    "trendData": [
      {
        "week": "W1 (Jul 12)",
        "memory": 68,
        "attention": 63,
        "executive": 62,
        "composite": 64
      },
      {
        "week": "W2 (Jul 19)",
        "memory": 64,
        "attention": 63,
        "executive": 62,
        "composite": 63
      },
      {
        "week": "W3 (Jul 26)",
        "memory": 65,
        "attention": 63,
        "executive": 59,
        "composite": 62
      },
      {
        "week": "W4 (Aug 02)",
        "memory": 61,
        "attention": 60,
        "executive": 54,
        "composite": 58
      },
      {
        "week": "W5 (Aug 09)",
        "memory": 59,
        "attention": 59,
        "executive": 53,
        "composite": 57
      },
      {
        "week": "W6 (Aug 16)",
        "memory": 62,
        "attention": 57,
        "executive": 51,
        "composite": 57
      },
      {
        "week": "W7 (Aug 23)",
        "memory": 58,
        "attention": 53,
        "executive": 50,
        "composite": 54
      },
      {
        "week": "W8 (Aug 30)",
        "memory": 53,
        "attention": 53,
        "executive": 48,
        "composite": 51
      },
      {
        "week": "W9 (Sep 05)",
        "memory": 56,
        "attention": 52,
        "executive": 50,
        "composite": 53
      }
    ],
    "gameSessions": [
      {
        "id": "sess-100-1",
        "timestamp": "6 days ago at 08:45 PM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 1525,
        "errors": 0,
        "level": 2,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-100-2",
        "timestamp": "4 days ago at 11:00 AM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 48,
        "responseTimeMs": 1810,
        "errors": 1,
        "level": 2,
        "score": 52,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-100-3",
        "timestamp": "3 days ago at 18:30 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 58,
        "responseTimeMs": 3575,
        "errors": 2,
        "level": 2,
        "score": 55,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-100-4",
        "timestamp": "1 days ago at 16:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 48,
        "responseTimeMs": 2530,
        "errors": 2,
        "level": 2,
        "score": 46,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-100-5",
        "timestamp": "5 days ago at 08:45 PM",
        "gameType": "pattern",
        "gameTitle": "Pattern Recall",
        "accuracy": 44,
        "responseTimeMs": 3326,
        "errors": 0,
        "level": 1,
        "score": 44,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      },
      {
        "id": "sess-100-6",
        "timestamp": "2 days ago at 18:00 AM",
        "gameType": "word",
        "gameTitle": "Word Recall",
        "accuracy": 55,
        "responseTimeMs": 2806,
        "errors": 3,
        "level": 3,
        "score": 59,
        "trend": "declining",
        "supportiveMessage": "Good steady effort during today's session.",
        "synced": true
      }
    ],
    "trendShape": "declining"
  }
];
