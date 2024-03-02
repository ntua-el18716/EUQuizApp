import apiBaseUrl from "./apiConfig";

export async function getQuizData() {
  const res = await fetch(`${apiBaseUrl}/getQuizData`);
  // const res = await fetch(
  //   "https://eu-quiz-app-backend-git-master-stylianos-projects.vercel.app/getQuizData",
  // );
  // const res = await fetch(
  //   "https://eu-quiz-app-backend-git-master-stylianos-projects.vercel.app/getQuizData",
  // );
  const quizData = await res.json();
  return quizData.sortedQuizData;
}
