import { integer, primaryKey } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { answers } from "./answers";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const userAnswers = pgTable(
  "userAnswers",
  {
    userId: integer("userId").references(() => users.userId),
    answerId: integer("answerId").references(() => answers.answerId),
  },
  (table) => {
    return {
      pk: primaryKey(table.userId, table.answerId),
    };
  }
);

export const userAnswersRelations = relations(userAnswers, ({ one }) => ({
  user: one(users, {
    fields: [userAnswers.userId],
    references: [users.userId],
  }),
  answer: one(answers, {
    fields: [userAnswers.answerId],
    references: [answers.answerId],
  }),
}));
