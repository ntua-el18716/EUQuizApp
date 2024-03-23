import apiBaseUrl from "./apiConfig";

export async function candidateCalculate() {
  const res = await fetch(`${apiBaseUrl}/candidateCalculate`);
  const candidatesList = await res.json();
  // console.log(candidates);
  return candidatesList.result;
}
