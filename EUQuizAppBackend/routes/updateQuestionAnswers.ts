import { eq } from "drizzle-orm";
import { db } from "../src";
import { questions } from "../src/schema/questions";
import { answers } from "../src/schema/answers";

function isolateQuestion(dataObject) {
  const { answers, ...updatedQuestion } = dataObject;
  return updatedQuestion;
}

export async function updateQuestionAnswers(dataObject) {
  try {
    // const { answers, ...updatedQuestion } = dataObject;
    const updatedQuestion = isolateQuestion(dataObject);
    // Update the question
    await db
      .update(questions)
      .set(updatedQuestion)
      .where(eq(questions.questionId, updatedQuestion.questionId));

    // Use Promise.all to await all promises concurrently
    await Promise.all(
      dataObject.answers.map(async (answer) => {
        let updatedAnswer;
        updatedAnswer = { ...answer };

        // Insert New Answer
        if (!answer.answerId) {
          let newAnswer = { ...answer, questionId: updatedQuestion.questionId };
          await db.insert(answers).values(newAnswer);
        } else {
          // Update the answer
          await db
            .update(answers)
            .set(updatedAnswer)
            .where(eq(answers.answerId, updatedAnswer.answerId));
        }
      })
    );

    console.log("Question and answers updated successfully.");
  } catch (error) {
    console.error("Error updating question and answers:", error);

    // Handle the error and send an appropriate response to the client
    return {
      status: "error",
      message: "Invalid data. Unable to update question and answers.",
    };
  }
}
