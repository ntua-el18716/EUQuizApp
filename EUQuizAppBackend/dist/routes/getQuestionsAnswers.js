"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuizData = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const src_1 = require("../src");
const answers_1 = require("../src/schema/answers");
function sortQuizData(quizData) {
    quizData.sort((a, b) => a.questionIndex - b.questionIndex);
    quizData.forEach((question) => {
        question.answers.sort((a, b) => (a.answerIndex || 0) - (b.answerIndex || 0));
    });
    return quizData;
}
async function fetchQuizData(res) {
    try {
        console.log("I am in");
        const dataArray = [];
        const questionsResult = await src_1.db.query.questions.findMany();
        for (const question of questionsResult) {
            const answersResult = await src_1.db.query.answers.findMany({
                where: (0, drizzle_orm_1.eq)(answers_1.answers.questionId, question.questionId),
            });
            let answersT = {
                el: [],
                tr: [],
                en: [],
            };
            for (let i = 0; i < answersResult.length; i++) {
                answersT.el.push({
                    answerText: answersResult[i].answerText.el,
                });
                answersT.tr.push({
                    answerText: answersResult[i].answerText.tr,
                });
                answersT.en.push({
                    answerText: answersResult[i].answerText.en,
                });
            }
            // console.log(resultObject);
            let translationData = {
                el: {
                    questionTitle: question.questionTitle.el,
                    questionAspect: question.questionAspect.el,
                    answers: answersT.el,
                },
                tr: {
                    questionTitle: question.questionTitle.tr,
                    questionAspect: question.questionAspect.tr,
                    answers: answersT.tr,
                },
                en: {
                    questionTitle: question.questionTitle.en,
                    questionAspect: question.questionAspect.en,
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
    }
    catch (error) {
        console.error("Error fetching quiz data:", error);
        res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
}
exports.fetchQuizData = fetchQuizData;
