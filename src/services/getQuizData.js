export async function getQuizData() {
  const res = await fetch("http://localhost:3000/getQuizData");
  const quizData = await res.json();
  return quizData.dataArray;
}
