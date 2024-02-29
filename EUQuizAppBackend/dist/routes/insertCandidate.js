"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCandidate = void 0;
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
        throw new Error("Failed to insert candidate.");
    }
}
exports.insertCandidate = insertCandidate;
