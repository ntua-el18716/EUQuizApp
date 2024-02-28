export async function updateCandidate(data) {
  // console.log(data);

  await fetch("http://localhost:3000/updateCandidate", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
