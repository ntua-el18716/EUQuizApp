export async function updateQuestionAnswers(data) {
  // console.log(data);

  await fetch("http://localhost:3000/updateQuestionAnswers", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
