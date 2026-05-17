import type { DiagnosisError, DiagnosisResponse } from "@/lib/schema";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://api.molu.likelionscnu.site";

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
