import { db } from "../src";
import { parties } from "../src/schema/parties";
import { partyEnum } from "../src/schema/Enums/partyEnum";

interface party {
  partyName: string;
  partyImg: string;
  partyAbbreviation: typeof partyEnum;
}
export async function insertParty(dataObject) {
  let newParty: party;
  newParty = dataObject;

  try {
    await db.insert(parties).values(newParty);
    console.log("Party inserted succesfully");
  } catch (error) {
    console.log("Error inserting party");
  }
}

export async function insertParties(dataObject) {
  try {
    dataObject.partiesResult.map(async (party) => {
      const newParty = party;
      await db.insert(parties).values(newParty);
    });
    console.log("Parties inserted succesfully");
  } catch (error) {
    console.log("Error inserting parties");
  }
}
