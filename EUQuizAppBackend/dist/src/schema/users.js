"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRelations = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const userAnswers_1 = require("./userAnswers");
exports.users = (0, pg_core_1.pgTable)("users", {
    userId: (0, pg_core_1.serial)("userId").primaryKey(),
    votedLastElection: (0, pg_core_1.text)("votedLastElection"),
    mayVote: (0, pg_core_1.text)("mayVote"),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    userAnswers: many(userAnswers_1.userAnswers),
}));
