import apiBaseUrl from "./apiConfig";

export async function getCandidates() {
  const res = await fetch(`${apiBaseUrl}/getCandidates`);
  const candidates = await res.json();
  // console.log(candidates);
  return candidates.candidatesResult;
}
