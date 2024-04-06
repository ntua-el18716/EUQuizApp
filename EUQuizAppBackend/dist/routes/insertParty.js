"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertParties = exports.insertParty = void 0;
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
    }
}
exports.insertParty = insertParty;
// export async function insertParties(dataObject) {
//   try {
//     dataObject.partiesResult.map(async (party) => {
//       const newParty = party;
//       await db.insert(parties).values(newParty);
//     });
//     console.log("Parties inserted succesfully");
//   } catch (error) {
//     console.log("Error inserting parties");
//   }
// }
async function insertParties(dataObject) {
    try {
        await Promise.all(dataObject.partiesResult.map(async (party) => {
            try {
                const newParty = party;
                await src_1.db.insert(parties_1.parties).values(newParty);
            }
            catch (error) {
                console.error("Error inserting party:", error);
                throw error; // Rethrow the error to stop further execution
            }
        }));
        console.log("Parties inserted successfully");
    }
    catch (error) {
        console.error("Error inserting parties:", error);
    }
}
exports.insertParties = insertParties;
