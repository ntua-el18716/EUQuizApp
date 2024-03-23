import apiBaseUrl from "./apiConfig";

export async function candidateCalculate(data) {
  const res = await fetch(`${apiBaseUrl}/candidateCalculate`, {
    // const res = await fetch("http://localhost:3000/candidateCalculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const candidatesList = await res.json();
  // console.log(candidatesList.result);
  return candidatesList.result;
}
