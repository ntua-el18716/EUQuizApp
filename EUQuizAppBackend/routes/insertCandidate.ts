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
export async function insertCandidate(dataObject) {
  let newCandidate: candidate;
  newCandidate = dataObject;
  try {
    await db.insert(candidates).values(newCandidate);
    console.log("Candidate inserted successfully.");
  } catch (error) {
    console.error("Error inserting candidate:", error);
    return {
      status: "error",
      message: "Failed to insert candidate",
    };
  }
}

// Mass Candidate
export async function insertCandidates(dataObject) {
  let newCandidate: candidate;

  try {
    dataObject.candidatesResult.map(async (candidate) => {
      const { candidateId, ...newCandidate } = candidate;
      await db.insert(candidates).values(newCandidate);
    });
    console.log("Candidates inserted successfully.");
  } catch (error) {
    console.error("Error inserting candidates:", error);
  }
}
