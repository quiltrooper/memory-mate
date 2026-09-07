// AUTO-GENERATED from ml/trained_model.json — do not hand-edit.
// Regenerate with: python3 ml/build_model_step1.py && python3 ml/build_model_step2.py
// then copy ml/trained_model.json's contents back into this file.

export interface RiskModelWeights {
  classes: string[];        // class order matches coef/intercept rows
  features: string[];       // feature order matches each coef row's columns
  coef: number[][];         // [numClasses][numFeatures]
  intercept: number[];      // [numClasses]
  scaler_mean: number[];    // [numFeatures] — for standardization
  scaler_scale: number[];   // [numFeatures] — for standardization
}

export const RISK_MODEL_WEIGHTS: RiskModelWeights = {
  classes: ["High", "Low", "Medium"],
  features: [
    "accuracy",
    "response_time_ms",
    "errors",
    "level",
    "game_pattern",
    "game_word",
    "game_matching",
  ],
  coef: [
    [-2.6555087209319055, 2.2588869536188327, 1.1066371592953632, 0.021787841999158675, -0.2169290816420567, 0.16160441782297824, 0.05512830173654292],
    [2.923622606304947, -2.816292774370072, -1.2111349085937893, 0.20289326653438458, 0.30592965578200326, -0.20404752815566074, -0.10060398137320732],
    [-0.26811388537303865, 0.5574058207512375, 0.10449774929842472, -0.22468110853354312, -0.08900057413994694, 0.042443110332682873, 0.04547567963666398],
  ],
  intercept: [-3.1664427169992684, 1.4155323817413332, 1.7509103352579372],
  scaler_mean: [75.31279761904761, 2796.252976190476, 1.7261904761904763, 2.9047619047619047, 0.32142857142857145, 0.30952380952380953, 0.36904761904761907],
  scaler_scale: [18.780766422364742, 1181.0585011026576, 1.6962928099394146, 1.460748728588378, 0.46702488680792936, 0.46229732949875235, 0.4825468618931249],
};
