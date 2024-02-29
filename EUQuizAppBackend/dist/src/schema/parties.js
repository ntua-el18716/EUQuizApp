"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partiesRelations = exports.parties = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const candidates_1 = require("./candidates");
exports.parties = (0, pg_core_1.pgTable)("parties", {
    // partyId: serial("partyId").primaryKey(),
    partyName: (0, pg_core_1.text)("partyName"),
    partyImg: (0, pg_core_1.text)("partyImg"),
    partyAbbreviation: (0, pg_core_1.text)("partyAbbreviation")
        .$type()
        .primaryKey(),
});
exports.partiesRelations = (0, drizzle_orm_1.relations)(exports.parties, ({ many }) => ({
    candidates: many(candidates_1.candidates),
}));
