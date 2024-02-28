export async function insertCandidate(data) {
  // console.log(data);
  await fetch("http://localhost:3000/insertCandidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
