import apiBaseUrl from "./apiConfig";

export async function insertQuestionAnswers(data) {
  console.log(data);
  await fetch(`${apiBaseUrl}/insertQuestionAnswers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
