"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatesRelations = exports.candidates = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const candidateAnswers_1 = require("./candidateAnswers");
const parties_1 = require("./parties");
exports.candidates = (0, pg_core_1.pgTable)("candidates", {
    candidateId: (0, pg_core_1.serial)("candidateId").primaryKey(),
    candidateName: (0, pg_core_1.jsonb)("candidateName").$type(),
    candidateParty: (0, pg_core_1.text)("candidateParty").$type(),
    candidateBallotNumber: (0, pg_core_1.integer)("candidateBallotNumber"),
    candidateMobileNumber: (0, pg_core_1.text)("candidateMobileNumber"),
    candidateEmail: (0, pg_core_1.text)("candidateEmail"),
    candidateWebPage: (0, pg_core_1.text)("candidateWebPage"),
    candidateImg: (0, pg_core_1.text)("candidateImg"),
});
exports.candidatesRelations = (0, drizzle_orm_1.relations)(exports.candidates, ({ many, one }) => ({
    candidateAnswers: many(candidateAnswers_1.candidateAnswers),
    party: one(parties_1.parties, {
        fields: [exports.candidates.candidateParty],
        references: [parties_1.parties.partyAbbreviation],
    }),
}));
