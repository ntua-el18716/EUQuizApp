import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { partyEnum } from "./Enums/partyEnum";
import { relations } from "drizzle-orm";
import { candidates } from "./candidates";

export const parties = pgTable("parties", {
  // partyId: serial("partyId").primaryKey(),
  partyName: text("partyName"),
  partyImg: text("partyImg"),
  partyAbbreviation: text("partyAbbreviation")
    .$type<typeof partyEnum>()
    .primaryKey(),
});

export const partiesRelations = relations(parties, ({ many }) => ({
  candidates: many(candidates),
}));
