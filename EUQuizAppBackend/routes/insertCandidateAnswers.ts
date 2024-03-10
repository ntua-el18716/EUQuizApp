import { candidateAnswers } from "./../src/schema/candidateAnswers";
import { db } from "../src";
import { eq } from "drizzle-orm";
import { candidates } from "../src/schema/candidates";
import { questions } from "../src/schema/questions";

interface candidateAnswer {
  candidateId: number;
  answerId: number;
}

export async function insertCandidateAnswers(candidateAnswersData) {
  // console.log(candidateAnswersData);
  const { candidateId, ...updatedCandidate } =
    candidateAnswersData.candidateInfo;
  await db
    .update(candidates)
    .set(updatedCandidate)
    .where(eq(candidates.candidateId, candidateId));

  for (const [
    i,
    candidateAnswer,
  ] of candidateAnswersData.answerIdPerQuestion.entries()) {
    if (candidateAnswer === -1) {
      continue;
    }
    let newCandidateAnswer = {
      candidateId: candidateId,
      answerId: candidateAnswer,
    };
    try {
      await db.insert(candidateAnswers).values(newCandidateAnswer);
      console.log("Candidate answer inserted successfully.");
    } catch (error) {
      console.error("Error inserting candidate answer:", error);
      return {
        status: "error",
        message: "Failed to insert candidate answer.",
      };
    }
  }
}
