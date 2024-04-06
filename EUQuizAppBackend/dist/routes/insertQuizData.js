"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertQuizData = void 0;
const questions_1 = require("../src/schema/questions");
const index_1 = require("../src/index");
const answers_1 = require("../src/schema/answers");
function isolateQuestion(dataObject) {
    const { answers, questionId, ...newQuestion } = dataObject;
    return newQuestion;
}
async function insertQuizData(dataObject) {
    try {
        dataObject.questionsArray.map(async (question) => {
            const newQuestion = isolateQuestion(question);
            console.log(newQuestion);
            const insertedQuestion = await index_1.db
                .insert(questions_1.questions)
                .values(newQuestion)
                .returning({ insertedId: questions_1.questions.questionId });
            let newAnswer;
            let insertedId = insertedQuestion[0].insertedId;
            // Use Promise.all to await all promises concurrently
            await Promise.all(question.answers.map(async (answer) => {
                newAnswer = { ...answer, questionId: insertedId };
                await index_1.db.insert(answers_1.answers).values(newAnswer);
            }));
        });
        console.log("Question and answers inserted successfully.");
    }
    catch (error) {
        console.error("Error inserting question and answers:", error);
    }
}
exports.insertQuizData = insertQuizData;
