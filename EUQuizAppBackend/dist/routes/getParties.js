"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchParties = void 0;
const src_1 = require("../src");
async function fetchParties(res) {
    try {
        const dataArray = [];
        const partiesResult = await src_1.db.query.parties.findMany();
        // console.log(partiesResult);
        res.status(200).json({ status: "okay", partiesResult });
    }
    catch (error) {
        console.error("Error fetching parties:", error);
        res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
}
exports.fetchParties = fetchParties;
