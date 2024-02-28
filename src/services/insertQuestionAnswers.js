export async function insertQuestionAnswers(data) {
  console.log(data);
  await fetch("http://localhost:3000/insertQuestionAnswers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
}
