import { candidateAnswers } from "../src/schema/candidateAnswers";
import { db } from "../src";

import { sql, eq, inArray, or, asc, desc } from "drizzle-orm";
import { candidates } from "../src/schema/candidates";

// Assuming candidateAnswers is defined in your schema
const answerIds = [106, 122, 6, 7, 3, 151, 154];

// For demonstration, assuming direct grouping and counting is performed via raw SQL
// export async function candidateCalculate(userAnswersData) {
export async function candidateCalculate(res) {
  const result = await db
    .select({
      candidateId: candidateAnswers.candidateId,
      candidateName: candidates.candidateName,
      candidateImg: candidates.candidateImg,
      count: sql<number>`cast(count(${candidateAnswers.answerId}) as int)`,
    })
    .from(candidateAnswers)
    .rightJoin(
      candidates,
      eq(candidateAnswers.candidateId, candidates.candidateId)
    )
    .where(inArray(candidateAnswers.answerId, answerIds))
    .groupBy(
      candidateAnswers.candidateId,
      candidates.candidateName,
      candidates.candidateImg
    )
    // .having(({ count }) => eq(count, 1))
    // .orderBy(({ count }, { desc }) => desc(count));
    .orderBy(desc(sql.raw("count")));

  // .orderBy(desc({ counter })=>);

  console.log(result);
  res.status(200).json({ status: "okay", result });
}
