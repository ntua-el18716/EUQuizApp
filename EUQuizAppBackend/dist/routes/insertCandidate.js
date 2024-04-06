"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCandidates = exports.insertCandidate = void 0;
const src_1 = require("../src");
const candidates_1 = require("../src/schema/candidates");
async function insertCandidate(dataObject) {
    let newCandidate;
    newCandidate = dataObject;
    try {
        await src_1.db.insert(candidates_1.candidates).values(newCandidate);
        console.log("Candidate inserted successfully.");
    }
    catch (error) {
        console.error("Error inserting candidate:", error);
        return {
            status: "error",
            message: "Failed to insert candidate",
        };
    }
}
exports.insertCandidate = insertCandidate;
// Mass Candidate
async function insertCandidates(dataObject) {
    let newCandidate;
    try {
        dataObject.candidatesResult.map(async (candidate) => {
            const { candidateId, ...newCandidate } = candidate;
            await src_1.db.insert(candidates_1.candidates).values(newCandidate);
        });
        console.log("Candidates inserted successfully.");
    }
    catch (error) {
        console.error("Error inserting candidates:", error);
    }
}
exports.insertCandidates = insertCandidates;
