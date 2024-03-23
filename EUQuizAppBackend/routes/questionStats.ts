import { candidateAnswers } from "../src/schema/candidateAnswers";
import { db } from "../src";

import { sql, eq, inArray, or } from "drizzle-orm";
import { candidates } from "../src/schema/candidates";
import { questions } from "../src/schema/questions";
import { answers } from "../src/schema/answers";

// Assuming candidateAnswers is defined in your schema
const answerIds = [106, 122, 6, 7, 3];

// For demonstration, assuming direct grouping and counting is performed via raw SQL
// export async function candidateCalculate(userAnswersData) {
export async function questionStats(res) {
  console.log("hey there");
  const result = await db
    .select({
      questionTitle: questions.questionTitle,
      questionIndex: questions.questionIndex,
      answerId: answers.answerId,
      answerIndex: answers.answerIndex,
      answerText: answers.answerText,
      candidateId: candidateAnswers.candidateId,
      candidateName: candidates.candidateName,
      candidateImg: candidates.candidateImg,
      candidateConsent: candidates.candidateConsent,
    })
    .from(questions)
    .rightJoin(answers, eq(questions.questionId, answers.questionId))
    .rightJoin(
      candidateAnswers,
      eq(answers.answerId, candidateAnswers.answerId)
    )
    .rightJoin(
      candidates,
      eq(candidateAnswers.candidateId, candidates.candidateId)
    );

  console.log(result);
  res.status(200).json({ status: "okay", result });
}
