import apiBaseUrl from "./apiConfig";

export async function candidateCalculate() {
  // const res = await fetch(`${apiBaseUrl}/candidateCalculate`);
  const res = await fetch("http://localhost:3000/candidateCalculate");
  const candidatesList = await res.json();
  // console.log(candidatesList.result);
  return candidatesList.result;
}
