import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { relations } from "drizzle-orm";
import { candidateAnswers } from "./candidateAnswers";
import { parties } from "./parties";

export const candidates = pgTable("candidates", {
  candidateId: serial("candidateId").primaryKey(),
  candidateName: jsonb("candidateName").$type<{
    el: string;
    en: string;
  }>(),
  candidateParty: text("candidateParty").$type<typeof partyEnum>(),
  candidateBallotNumber: integer("candidateBallotNumber"),
  candidateMobileNumber: text("candidateMobileNumber"),
  candidateEmail: text("candidateEmail"),
  candidateWebPage: text("candidateWebPage"),
  candidateImg: text("candidateImg"),
  candidateCode: text("candidateCode"),
  candidateCustomAnswers: text("candidateCustomAnswers").array(),
  candidateConsent: boolean("candidateConsent"),
});

export const candidatesRelations = relations(candidates, ({ many, one }) => ({
  candidateAnswers: many(candidateAnswers),
  party: one(parties, {
    fields: [candidates.candidateParty],
    references: [parties.partyAbbreviation],
  }),
}));
