"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAnswersRelations = exports.userAnswers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const answers_1 = require("./answers");
const users_1 = require("./users");
const drizzle_orm_1 = require("drizzle-orm");
exports.userAnswers = (0, pg_core_2.pgTable)("userAnswers", {
    userId: (0, pg_core_1.integer)("userId").references(() => users_1.users.userId),
    answerId: (0, pg_core_1.integer)("answerId").references(() => answers_1.answers.answerId),
}, (table) => {
    return {
        pk: (0, pg_core_1.primaryKey)(table.userId, table.answerId),
    };
});
exports.userAnswersRelations = (0, drizzle_orm_1.relations)(exports.userAnswers, ({ one }) => ({
    user: one(users_1.users, {
        fields: [exports.userAnswers.userId],
        references: [users_1.users.userId],
    }),
    answer: one(answers_1.answers, {
        fields: [exports.userAnswers.answerId],
        references: [answers_1.answers.answerId],
    }),
}));
