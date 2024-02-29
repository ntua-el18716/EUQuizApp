"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCandidates = void 0;
const src_1 = require("../src");
async function fetchCandidates(res) {
    try {
        const dataArray = [];
        const candidatesResult = await src_1.db.query.candidates.findMany();
        // console.log(candidatesResult);
        res.status(200).json({ status: "okay", candidatesResult });
    }
    catch (error) {
        console.error("Error fetching candidates:", error);
        res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
}
exports.fetchCandidates = fetchCandidates;
