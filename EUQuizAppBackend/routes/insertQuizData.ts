import { questions } from "../src/schema/questions";
import { db } from "../src/index";
import { partyEnum } from "../src/schema/Enums/partyEnum";
import {
  enAspectsEnum,
  grAspectsEnum,
  trAspectsEnum,
} from "../src/schema/Enums/aspectEnum";
import { answers } from "../src/schema/answers";

interface question {
  questionId: number;
  questionIndex: number;
  questionTitle: {
    el: string;
    tr: string;
    en: string;
  };
  questionAspect: {
    el: typeof grAspectsEnum;
    tr: typeof trAspectsEnum;
    en: typeof enAspectsEnum;
  };
}

interface answer {
  answerId: number;
  questionId: number;
  answerIndex: number;
  answerText: {
    el: string;
    tr: string;
    en: string;
  };
  answerPoints: {
    party: typeof partyEnum;
    value: number;
  }[];
}

function isolateQuestion(dataObject) {
  const { answers, questionId, ...newQuestion } = dataObject;
  return newQuestion;
}

export async function insertQuizData(dataObject) {
  try {
    dataObject.questionsArray.map(async (question) => {
      const newQuestion: question = isolateQuestion(dataObject);
      const insertedQuestion = await db
        .insert(questions)
        .values(newQuestion)
        .returning({ insertedId: questions.questionId });

      let newAnswer: answer;
      let insertedId = insertedQuestion[0].insertedId;

      // Use Promise.all to await all promises concurrently
      await Promise.all(
        dataObject.answers.map(async (answer) => {
          newAnswer = { ...answer, questionId: insertedId };
          await db.insert(answers).values(newAnswer);
        })
      );
    });
    console.log("Question and answers inserted successfully.");
  } catch (error) {
    console.error("Error inserting question and answers:", error);

    // You can either log the error, handle it gracefully, or throw a custom error
    // For example, if you want to throw a custom error and stop the server from crashing:
    // throw new Error('Invalid data. Unable to insert question and answers.');

    // Alternatively, you can handle the error and send an appropriate response to the client
    // For example, sending a 400 Bad Request response:
    return {
      status: "error",
      message: "Invalid data. Unable to insert question and answers.",
    };
  }
}
