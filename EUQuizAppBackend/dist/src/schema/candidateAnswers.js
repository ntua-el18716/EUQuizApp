"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidateAnswersRelations = exports.candidateAnswers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const answers_1 = require("./answers");
const candidates_1 = require("./candidates");
const drizzle_orm_1 = require("drizzle-orm");
exports.candidateAnswers = (0, pg_core_2.pgTable)("candidateAnswers", {
    candidateId: (0, pg_core_1.integer)("candidateId").references(() => candidates_1.candidates.candidateId),
    answerId: (0, pg_core_1.integer)("answerId").references(() => answers_1.answers.answerId),
}, (table) => {
    return {
        pk: (0, pg_core_1.primaryKey)(table.candidateId, table.answerId),
    };
});
exports.candidateAnswersRelations = (0, drizzle_orm_1.relations)(exports.candidateAnswers, ({ one }) => ({
    candidate: one(candidates_1.candidates, {
        fields: [exports.candidateAnswers.candidateId],
        references: [candidates_1.candidates.candidateId],
    }),
    answer: one(answers_1.answers, {
        fields: [exports.candidateAnswers.answerId],
        references: [answers_1.answers.answerId],
    }),
}));
