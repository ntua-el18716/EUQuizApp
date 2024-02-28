import { candidateAnswers } from "./../src/schema/candidateAnswers";
import { db } from "../src";
import { partyEnum } from "../src/schema/Enums/partyEnum";

interface candidateAnswer {
  candidateId: number;
  answerId: number;
}

export async function insertCandidateAnswers(candidateAnswersData) {
  let newCandidateId = candidateAnswersData.candidateId;
  for (const candidateAnswer of candidateAnswersData.answers) {
    let newCandidateAnswer: candidateAnswer;
    newCandidateAnswer = {
      candidateId: newCandidateId,
      answerId: candidateAnswer,
    };
    try {
      await db.insert(candidateAnswers).values(newCandidateAnswer);
      console.log("Candidate answer inserted successfully.");
    } catch (error) {
      console.error("Error inserting candidate answer:", error);
      throw new Error("Failed to insert candidate answer.");
    }
  }
}
