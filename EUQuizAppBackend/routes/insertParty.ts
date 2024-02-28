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
    throw new Error("Failed to insert party");
  }
}
