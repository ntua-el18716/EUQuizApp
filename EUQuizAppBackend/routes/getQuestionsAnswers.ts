import { eq } from "drizzle-orm";
import { db } from "../src";
import {
  enAspectsEnum,
  grAspectsEnum,
  trAspectsEnum,
} from "../src/schema/Enums/aspectEnum";
import { answers } from "../src/schema/answers";
import { partyEnum } from "../src/schema/Enums/partyEnum";

interface translation {
  el: {
    questionTitle: string | null;
    questionAspect: typeof grAspectsEnum;
    answers: {
      answerText: string;
    }[];
  };
  tr: {
    questionTitle: string;
    questionAspect: typeof trAspectsEnum;
    answers: {
      answerText: string;
    }[];
  };
  en: {
    questionTitle: string;
    questionAspect: typeof enAspectsEnum;
    answers: {
      answerText: string;
    }[];
  };
}
interface answersTranslation {
  el: { answerText: string }[];
  tr: { answerText: string }[];
  en: { answerText: string }[];
}

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

      let answersT: answersTranslation = {
        el: [],
        tr: [],
        en: [],
      };

      for (let i = 0; i < answersResult.length; i++) {
        answersT.el.push({
          answerText: answersResult[i].answerText!.el,
        });
        answersT.tr.push({
          answerText: answersResult[i].answerText!.tr,
        });
        answersT.en.push({
          answerText: answersResult[i].answerText!.en,
        });
      }

      // console.log(resultObject);

      let translationData = {
        el: {
          questionTitle: question.questionTitle!.el,
          questionAspect: question.questionAspect!.el,
          answers: answersT.el,
        },
        tr: {
          questionTitle: question.questionTitle!.tr,
          questionAspect: question.questionAspect!.tr,
          answers: answersT.tr,
        },
        en: {
          questionTitle: question.questionTitle!.en,
          questionAspect: question.questionAspect!.en,
          answers: answersT.en,
        },
      };
      let quizData = {
        ...question,
        answers: answersResult,
      };

      dataArray.push(quizData);
    }

    const sortedQuizData = sortQuizData(dataArray);

    console.log(dataArray);
    // Now dataArray contains the complete quiz data
    res.status(200).json({ status: "okay", dataArray });
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
