import { GameSession } from '../types';
import { RISK_MODEL_WEIGHTS } from './riskModelWeights';
import { riskFeatures } from './riskFeatures';
export type RiskLevel = 'Low' | 'Medium' | 'High';
export interface RiskPrediction { label: RiskLevel; confidence:number; probabilities:Record<RiskLevel,number>; topFactors:{feature:string;contribution:number}[] }
export function predictRisk(sessions: GameSession[], recentCount=5): RiskPrediction | null {
  const features = riskFeatures(sessions);
  if (!features) return null;
  const w=RISK_MODEL_WEIGHTS;
  const x=w.features.map((f,i)=>(features[f as keyof typeof features]-w.scaler_mean[i])/w.scaler_scale[i]);
  const logits=w.coef.map((coef,k)=>w.intercept[k]+coef.reduce((sum,v,i)=>sum+v*x[i],0));
  const exp=logits.map(v=>Math.exp(v-Math.max(...logits))), sum=exp.reduce((a,b)=>a+b,0);
  const p=exp.map(v=>v/sum), best=p.indexOf(Math.max(...p));
  return {label:w.classes[best] as RiskLevel, confidence:p[best], probabilities:Object.fromEntries(w.classes.map((c,i)=>[c,p[i]])) as Record<RiskLevel,number>,topFactors:w.features.map((feature,i)=>({feature,contribution:w.coef[best][i]*x[i]})).sort((a,b)=>Math.abs(b.contribution)-Math.abs(a.contribution)).slice(0,3)};
}
