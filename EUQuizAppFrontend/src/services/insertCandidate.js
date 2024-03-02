import apiBaseUrl from "./apiConfig";

export async function insertCandidate(data) {
  // console.log(data);
  await fetch(`${apiBaseUrl}/insertCandidate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
