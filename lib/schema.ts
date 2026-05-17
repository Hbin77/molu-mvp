// Shared types — must mirror molu-api/app/schemas/diagnose.py

export type WarnKind = "heat" | "gas" | "electric" | "blade";
export type Difficulty = "easy" | "medium" | "hard" | "expert_only";
export type SafetyAction = "proceed" | "warn" | "stop_call_expert";
export type TrustAction = "accept" | "warn_badge" | "research_again";

export interface Device {
  name: string;
  confidence: number;
}

export interface Symptom {
  code: string | null;
  plain: string;
}

export interface Step {
  n: number;
  title: string;
  desc: string;
  warn: boolean;
  warn_kind: WarnKind | null;
  requires_expert: boolean;
}

export interface Safety {
  triggered: boolean;
  reason: string | null;
  action: SafetyAction;
}

export interface Trust {
  score: number;
  action: TrustAction;
}

export interface DiagnosisResponse {
  diagnosis_id: string;
  device: Device;
  symptom: Symptom;
  technical: string;
  difficulty: Difficulty;
  estimated_minutes: number;
  steps: Step[];
  safety: Safety;
  sources: Record<string, unknown>[];
  trust: Trust;
  latency_ms: number;
}

export interface DiagnosisError {
  detail?: string;
  error?: string;
}
