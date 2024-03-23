import apiBaseUrl from "./apiConfig";

export async function getQuestionStats() {
  // const res = await fetch(`${apiBaseUrl}/getQuestionStats`);
  const res = await fetch("http://localhost:3000/getQuestionStats");
  const quizData = await res.json();
  return quizData.dataArray;
}
