"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCandidate = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const src_1 = require("../src");
const candidates_1 = require("../src/schema/candidates");
async function updateCandidate(dataObject) {
    try {
        let newCandidate;
        newCandidate = dataObject;
        console.log(dataObject);
        await src_1.db
            .update(candidates_1.candidates)
            .set(dataObject)
            .where((0, drizzle_orm_1.eq)(candidates_1.candidates.candidateId, dataObject.candidateId));
        console.log("Candidate update successful");
    }
    catch (error) {
        console.error("Error updating candidate:", error);
        throw new Error("Failed to update candidate.");
    }
}
exports.updateCandidate = updateCandidate;
