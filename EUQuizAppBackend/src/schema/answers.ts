import { integer, jsonb, pgTable, serial, text } from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { relations } from "drizzle-orm";
import { questions } from "./questions";
import { candidateAnswers } from "./candidateAnswers";

export const answers = pgTable("answers", {
  answerId: serial("answerId").primaryKey(),
  questionId: integer("questionId").references(() => questions.questionId),
  answerIndex: integer("answerIndex"),
  answerText: jsonb("answerText").$type<{
    el: string;
    tr: string;
    en: string;
  }>(),
  answerPoints: jsonb("answerPoints")
    .$type<{
      party: typeof partyEnum;
      value: number;
    }>()
    .array(),
});

export const postsRelations = relations(answers, ({ one, many }) => ({
  question: one(questions, {
    fields: [answers.questionId],
    references: [questions.questionId],
  }),
  candidateAnswers: many(candidateAnswers),
  // userAnswers: many(candidateAnswers),
}));
