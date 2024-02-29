"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRelations = exports.answers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const questions_1 = require("./questions");
const candidateAnswers_1 = require("./candidateAnswers");
exports.answers = (0, pg_core_1.pgTable)("answers", {
    answerId: (0, pg_core_1.serial)("answerId").primaryKey(),
    questionId: (0, pg_core_1.integer)("questionId").references(() => questions_1.questions.questionId),
    answerIndex: (0, pg_core_1.integer)("answerIndex"),
    answerText: (0, pg_core_1.jsonb)("answerText").$type(),
    answerPoints: (0, pg_core_1.jsonb)("answerPoints")
        .$type()
        .array(),
});
exports.postsRelations = (0, drizzle_orm_1.relations)(exports.answers, ({ one, many }) => ({
    question: one(questions_1.questions, {
        fields: [exports.answers.questionId],
        references: [questions_1.questions.questionId],
    }),
    candidateAnswers: many(candidateAnswers_1.candidateAnswers),
    // userAnswers: many(candidateAnswers),
}));
