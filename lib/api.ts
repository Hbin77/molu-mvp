import type { DiagnosisError, DiagnosisResponse } from "@/lib/schema";

// Browser hits this Next.js origin; next.config.ts `rewrites` forwards
// /api/v1/* to the molu-api container over the internal docker network.
// No CORS, no public backend exposure.
const API_BASE = "";

export async function diagnose(
  file: File,
  hint: string,
  signal?: AbortSignal,
): Promise<DiagnosisResponse> {
  const fd = new FormData();
  fd.append("image", file);
  if (hint.trim()) fd.append("hint", hint.trim());

  const res = await fetch(`${API_BASE}/api/v1/diagnose`, {
    method: "POST",
    body: fd,
    signal,
  });

  if (!res.ok) {
    let detail = `HTTP ${res.status}`;
    try {
      const err = (await res.json()) as DiagnosisError;
      detail = err.detail ?? err.error ?? detail;
    } catch {
      /* fall through */
    }
    throw new Error(detail);
  }

  return (await res.json()) as DiagnosisResponse;
}
