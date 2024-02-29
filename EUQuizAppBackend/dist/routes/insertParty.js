"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertParty = void 0;
const src_1 = require("../src");
const parties_1 = require("../src/schema/parties");
async function insertParty(dataObject) {
    let newParty;
    newParty = dataObject;
    try {
        await src_1.db.insert(parties_1.parties).values(newParty);
        console.log("Party inserted succesfully");
    }
    catch (error) {
        console.log("Error inserting party");
        throw new Error("Failed to insert party");
    }
}
exports.insertParty = insertParty;
