import apiBaseUrl from "./apiConfig";

export async function updateQuestionAnswers(data) {
  // console.log(data);

  await fetch(`${apiBaseUrl}/updateQuestionAnswers`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
