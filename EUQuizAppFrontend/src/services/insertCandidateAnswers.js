import apiBaseUrl from "./apiConfig";

export async function insertCandidateAnswers(data) {
  // console.log(data);
  await fetch(`${apiBaseUrl}/insertCandidateAnswers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
