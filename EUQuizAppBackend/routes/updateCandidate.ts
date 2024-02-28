import { eq } from "drizzle-orm";
import { db } from "../src";
import { candidates } from "../src/schema/candidates";
import { partyEnum } from "../src/schema/Enums/partyEnum";

interface candidate {
  candidateId: number;
  candidateName: {
    el: string;
    en: string;
  };
  candidateParty: typeof partyEnum;
  candidateBallotNumber?: number;
  candidateMobileNumber?: string;
  candidateImg?: string;
  candidateEmail?: string;
  candidateWebPage?: string;
}
export async function updateCandidate(dataObject) {
  try {
    let newCandidate: candidate;
    newCandidate = dataObject;
    console.log(dataObject);
    await db
      .update(candidates)
      .set(dataObject)
      .where(eq(candidates.candidateId, dataObject.candidateId));
    console.log("Candidate update successful");
  } catch (error) {
    console.error("Error updating candidate:", error);
    throw new Error("Failed to update candidate.");
  }
}
