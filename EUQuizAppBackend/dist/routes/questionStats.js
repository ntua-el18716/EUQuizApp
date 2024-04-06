"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionStats = void 0;
const candidateAnswers_1 = require("../src/schema/candidateAnswers");
const src_1 = require("../src");
const drizzle_orm_1 = require("drizzle-orm");
const candidates_1 = require("../src/schema/candidates");
const answers_1 = require("../src/schema/answers");
async function questionStats(res) {
    const dataArray = [];
    const questionsArray = await src_1.db.query.questions.findMany();
    for (const question of questionsArray) {
        const answersArray = await src_1.db.query.answers.findMany({
            where: (0, drizzle_orm_1.eq)(answers_1.answers.questionId, question.questionId),
        });
        const answersDataArray = [];
        for (const answer of answersArray) {
            // console.log(answer);
            const candidatesArray = await src_1.db
                .select({
                candidateId: candidateAnswers_1.candidateAnswers.candidateId,
                candidateName: candidates_1.candidates.candidateName,
                candidateImg: candidates_1.candidates.candidateImg,
                candidateParty: candidates_1.candidates.candidateParty,
                candidateConsent: candidates_1.candidates.candidateConsent,
            })
                .from(candidateAnswers_1.candidateAnswers)
                .leftJoin(candidates_1.candidates, (0, drizzle_orm_1.eq)(candidateAnswers_1.candidateAnswers.candidateId, candidates_1.candidates.candidateId))
                .where((0, drizzle_orm_1.eq)(candidateAnswers_1.candidateAnswers.answerId, answer.answerId));
            answersDataArray.push({
                answerId: answer.answerId,
                answerText: answer.answerText,
                answerIndex: answer.answerIndex,
                candidates: candidatesArray,
            });
        }
        dataArray.push({
            questionId: question.questionId,
            questionIndex: question.questionIndex,
            questionTitle: question.questionTitle,
            answers: answersDataArray,
        });
    }
    res.status(200).json({ status: "okay", dataArray });
}
exports.questionStats = questionStats;
