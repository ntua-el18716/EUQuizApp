"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidateCalculate = void 0;
const candidateAnswers_1 = require("../src/schema/candidateAnswers");
const src_1 = require("../src");
const drizzle_orm_1 = require("drizzle-orm");
const candidates_1 = require("../src/schema/candidates");
// const answerIds = [106, 122, 6, 7, 3, 151, 154];
async function candidateCalculate({ req, res }) {
    let answerIds = req.body.answerIds;
    const result = await src_1.db
        .select({
        candidateId: candidateAnswers_1.candidateAnswers.candidateId,
        candidateName: candidates_1.candidates.candidateName,
        candidateImg: candidates_1.candidates.candidateImg,
        candidateParty: candidates_1.candidates.candidateParty,
        count: (0, drizzle_orm_1.sql) `cast(count(${candidateAnswers_1.candidateAnswers.answerId}) as int)`,
    })
        .from(candidateAnswers_1.candidateAnswers)
        .rightJoin(candidates_1.candidates, (0, drizzle_orm_1.eq)(candidateAnswers_1.candidateAnswers.candidateId, candidates_1.candidates.candidateId))
        .where((0, drizzle_orm_1.inArray)(candidateAnswers_1.candidateAnswers.answerId, answerIds))
        .groupBy(candidateAnswers_1.candidateAnswers.candidateId, candidates_1.candidates.candidateName, candidates_1.candidates.candidateImg, candidates_1.candidates.candidateParty)
        // .having(({ count }) => eq(count, 1))
        // .orderBy(({ count }, { desc }) => desc(count));
        .orderBy((0, drizzle_orm_1.desc)(drizzle_orm_1.sql.raw("count")));
    // .orderBy(desc({ counter })=>);
    console.log("result=" + result[1]);
    res.status(200).json({ status: "okay", result });
}
exports.candidateCalculate = candidateCalculate;
