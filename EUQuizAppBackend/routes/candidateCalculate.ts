import { candidateAnswers } from "../src/schema/candidateAnswers";
import { db } from "../src";

import { sql, eq, inArray, or, asc, desc } from "drizzle-orm";
import { candidates } from "../src/schema/candidates";

// const answerIds = [106, 122, 6, 7, 3, 151, 154];

export async function candidateCalculate({ req, res }) {
  let answerIds = req.body.answerIds;
  const result = await db
    .select({
      candidateId: candidateAnswers.candidateId,
      candidateName: candidates.candidateName,
      candidateImg: candidates.candidateImg,
      candidateParty: candidates.candidateParty,
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
      candidates.candidateImg,
      candidates.candidateParty
    )
    // .having(({ count }) => eq(count, 1))
    // .orderBy(({ count }, { desc }) => desc(count));
    .orderBy(desc(sql.raw("count")));

  // .orderBy(desc({ counter })=>);

  console.log("result=" + result[1]);
  res.status(200).json({ status: "okay", result });
}
