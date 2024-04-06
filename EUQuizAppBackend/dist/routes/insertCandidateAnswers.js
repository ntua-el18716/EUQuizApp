"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCandidateAnswers = void 0;
const candidateAnswers_1 = require("./../src/schema/candidateAnswers");
const src_1 = require("../src");
const drizzle_orm_1 = require("drizzle-orm");
const candidates_1 = require("../src/schema/candidates");
async function insertCandidateAnswers(candidateAnswersData) {
    // console.log(candidateAnswersData);
    const { candidateId, ...updatedCandidate } = candidateAnswersData.candidateInfo;
    await src_1.db
        .update(candidates_1.candidates)
        .set(updatedCandidate)
        .where((0, drizzle_orm_1.eq)(candidates_1.candidates.candidateId, candidateId));
    for (const [i, candidateAnswer,] of candidateAnswersData.answerIdPerQuestion.entries()) {
        if (candidateAnswer === -1) {
            continue;
        }
        let newCandidateAnswer = {
            candidateId: candidateId,
            answerId: candidateAnswer,
        };
        try {
            await src_1.db.insert(candidateAnswers_1.candidateAnswers).values(newCandidateAnswer);
            console.log("Candidate answer inserted successfully.");
        }
        catch (error) {
            console.error("Error inserting candidate answer:", error);
            return {
                status: "error",
                message: "Failed to insert candidate answer.",
            };
        }
    }
}
exports.insertCandidateAnswers = insertCandidateAnswers;
