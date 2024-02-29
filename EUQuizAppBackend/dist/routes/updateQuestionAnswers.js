"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuestionAnswers = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const src_1 = require("../src");
const questions_1 = require("../src/schema/questions");
const answers_1 = require("../src/schema/answers");
function isolateQuestion(dataObject) {
    const { answers, ...updatedQuestion } = dataObject;
    return updatedQuestion;
}
async function updateQuestionAnswers(dataObject) {
    try {
        // const { answers, ...updatedQuestion } = dataObject;
        const updatedQuestion = isolateQuestion(dataObject);
        // Update the question
        await src_1.db
            .update(questions_1.questions)
            .set(updatedQuestion)
            .where((0, drizzle_orm_1.eq)(questions_1.questions.questionId, updatedQuestion.questionId));
        // Use Promise.all to await all promises concurrently
        await Promise.all(dataObject.answers.map(async (answer) => {
            let updatedAnswer;
            updatedAnswer = { ...answer };
            // Insert New Answer
            if (!answer.answerId) {
                let newAnswer = { ...answer, questionId: updatedQuestion.questionId };
                await src_1.db.insert(answers_1.answers).values(newAnswer);
            }
            else {
                // Update the answer
                await src_1.db
                    .update(answers_1.answers)
                    .set(updatedAnswer)
                    .where((0, drizzle_orm_1.eq)(answers_1.answers.answerId, updatedAnswer.answerId));
            }
        }));
        console.log("Question and answers updated successfully.");
    }
    catch (error) {
        console.error("Error updating question and answers:", error);
        // Handle the error and send an appropriate response to the client
        return {
            status: "error",
            message: "Invalid data. Unable to update question and answers.",
        };
    }
}
exports.updateQuestionAnswers = updateQuestionAnswers;
