import { eq } from "drizzle-orm";
import { db } from "../src";
import {
  enAspectsEnum,
  grAspectsEnum,
  trAspectsEnum,
} from "../src/schema/Enums/aspectEnum";
import { answers } from "../src/schema/answers";
import { partyEnum } from "../src/schema/Enums/partyEnum";

function sortQuizData(quizData) {
  quizData.sort((a, b) => a.questionIndex - b.questionIndex);

  quizData.forEach((question) => {
    question.answers.sort(
      (a, b) => (a.answerIndex || 0) - (b.answerIndex || 0)
    );
  });

  return quizData;
}

export async function fetchQuizData(res) {
  try {
    console.log("I am in");
    const dataArray: {}[] = [];
    const questionsResult = await db.query.questions.findMany();

    for (const question of questionsResult) {
      const answersResult = await db.query.answers.findMany({
        where: eq(answers.questionId, question.questionId),
      });

      // console.log(resultObject);

      let quizData = {
        ...question,
        answers: answersResult,
      };

      dataArray.push(quizData);
    }

    const sortedQuizData = sortQuizData(dataArray);

    // console.log(dataArray);
    // Now dataArray contains the complete quiz data
    res.status(200).json({ status: "okay", sortedQuizData });
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
