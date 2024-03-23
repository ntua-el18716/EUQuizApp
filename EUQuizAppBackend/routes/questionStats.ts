import { candidateAnswers } from "../src/schema/candidateAnswers";
import { db } from "../src";

import { sql, eq, inArray, or } from "drizzle-orm";
import { candidates } from "../src/schema/candidates";
import { questions } from "../src/schema/questions";
import { answers } from "../src/schema/answers";

export async function questionStats(res) {
  const dataArray: {}[] = [];

  const questionsArray = await db.query.questions.findMany();

  for (const question of questionsArray) {
    const answersArray = await db.query.answers.findMany({
      where: eq(answers.questionId, question.questionId),
    });
    const answersDataArray: {}[] = [];
    for (const answer of answersArray) {
      // console.log(answer);
      const candidatesArray = await db
        .select({
          candidateId: candidateAnswers.candidateId,
          candidateName: candidates.candidateName,
          candidateImg: candidates.candidateImg,
          candidateParty: candidates.candidateParty,
          candidateConsent: candidates.candidateConsent,
        })
        .from(candidateAnswers)
        .leftJoin(
          candidates,
          eq(candidateAnswers.candidateId, candidates.candidateId)
        )
        .where(eq(candidateAnswers.answerId, answer.answerId));

      answersDataArray.push({
        answerId: answer.answerId,
        answerText: answer.answerText,
        answerIndex: answer.answerIndex,
        candidates: candidatesArray,
      });
    }
    dataArray.push({
      questionId: question.questionId,
      questionIndex: question.questionIndex,
      questionTitle: question.questionTitle,
      answers: answersDataArray,
    });
  }
  res.status(200).json({ status: "okay", dataArray });
}
