"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCandidateAnswers = void 0;
const candidateAnswers_1 = require("./../src/schema/candidateAnswers");
const src_1 = require("../src");
async function insertCandidateAnswers(candidateAnswersData) {
    let newCandidateId = candidateAnswersData.candidateId;
    for (const candidateAnswer of candidateAnswersData.answers) {
        let newCandidateAnswer;
        newCandidateAnswer = {
            candidateId: newCandidateId,
            answerId: candidateAnswer,
        };
        try {
            await src_1.db.insert(candidateAnswers_1.candidateAnswers).values(newCandidateAnswer);
            console.log("Candidate answer inserted successfully.");
        }
        catch (error) {
            console.error("Error inserting candidate answer:", error);
            throw new Error("Failed to insert candidate answer.");
        }
    }
}
exports.insertCandidateAnswers = insertCandidateAnswers;
