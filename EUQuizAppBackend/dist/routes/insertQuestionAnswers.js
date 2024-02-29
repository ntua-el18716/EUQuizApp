"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertQuestionAndAnswers = void 0;
const questions_1 = require("../src/schema/questions");
const index_1 = require("../src/index");
const answers_1 = require("../src/schema/answers");
function isolateQuestion(dataObject) {
    const { answers, ...updatedQuestion } = dataObject;
    return updatedQuestion;
}
async function insertQuestionAndAnswers(dataObject) {
    try {
        const newQuestion = isolateQuestion(dataObject);
        const insertedQuestion = await index_1.db
            .insert(questions_1.questions)
            .values(newQuestion)
            .returning({ insertedId: questions_1.questions.questionId });
        let newAnswer;
        let insertedId = insertedQuestion[0].insertedId;
        // Use Promise.all to await all promises concurrently
        await Promise.all(dataObject.answers.map(async (answer) => {
            newAnswer = { ...answer, questionId: insertedId };
            await index_1.db.insert(answers_1.answers).values(newAnswer);
        }));
        console.log("Question and answers inserted successfully.");
    }
    catch (error) {
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
exports.insertQuestionAndAnswers = insertQuestionAndAnswers;
