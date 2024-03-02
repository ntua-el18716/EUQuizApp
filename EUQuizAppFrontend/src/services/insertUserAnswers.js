import apiBaseUrl from "./apiConfig";

export async function insertUserAnswers(data) {
  // console.log(data);
  await fetch(`${apiBaseUrl}/insertUserAnswers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
