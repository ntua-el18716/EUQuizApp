import { integer, jsonb, pgTable, serial, text } from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { relations } from "drizzle-orm";
import { userAnswers } from "./userAnswers";

export const users = pgTable("users", {
  userId: serial("userId").primaryKey(),
  votedLastElection: text("votedLastElection"),
  mayVote: text("mayVote"),
});

export const usersRelations = relations(users, ({ many }) => ({
  userAnswers: many(userAnswers),
}));
