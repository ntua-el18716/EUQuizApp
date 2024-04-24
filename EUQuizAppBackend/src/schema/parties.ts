import { jsonb, pgTable, serial, text } from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { relations } from "drizzle-orm";
import { candidates } from "./candidates";

export const parties = pgTable("parties", {
  // partyId: serial("partyId").primaryKey(),
  partyName: text("partyName"),
  partyAbbrGr: text("partyAbbrGr"),
  partyImg: text("partyImg"),
  partyElectionName: jsonb("partyElectionName").$type<{
    el: string;
    tr: string;
    en: string;
  }>(),
  partyWebsite: text("partyWebsite"),
  europeanGroupName: text("europeanGroupName"),
  europeanGroupWebsite: text("europeanGroupWebsite"),
  partyAbbreviation: text("partyAbbreviation")
    .$type<typeof partyEnum>()
    .primaryKey(),
});

export const partiesRelations = relations(parties, ({ many }) => ({
  candidates: many(candidates),
}));
