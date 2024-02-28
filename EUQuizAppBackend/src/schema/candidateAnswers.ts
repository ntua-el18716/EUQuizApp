import { integer, primaryKey } from "drizzle-orm/pg-core";
import { pgTable, text } from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { answers } from "./answers";
import { candidates } from "./candidates";
import { relations } from "drizzle-orm";

export const candidateAnswers = pgTable(
  "candidateAnswers",
  {
    candidateId: integer("candidateId").references(
      () => candidates.candidateId
    ),
    answerId: integer("answerId").references(() => answers.answerId),
  },
  (table) => {
    return {
      pk: primaryKey(table.candidateId, table.answerId),
    };
  }
);

export const candidateAnswersRelations = relations(
  candidateAnswers,
  ({ one }) => ({
    candidate: one(candidates, {
      fields: [candidateAnswers.candidateId],
      references: [candidates.candidateId],
    }),
    answer: one(answers, {
      fields: [candidateAnswers.answerId],
      references: [answers.answerId],
    }),
  })
);
