import apiBaseUrl from "./apiConfig";

export async function updateCandidate(data) {
  // console.log(data);

  await fetch(`${apiBaseUrl}/updateCandidate`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
