export async function getQuizData() {
  // const res = await fetch("http://localhost:3000/getQuizData");
  const res = await fetch(
    "https://eu-quiz-app-backend-git-master-stylianos-projects.vercel.app/getQuizData",
  );
  const quizData = await res.json();
  return quizData.dataArray;
}
