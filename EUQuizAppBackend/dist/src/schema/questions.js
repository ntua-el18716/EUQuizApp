"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsAnswersRelations = exports.questions = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const answers_1 = require("./answers");
exports.questions = (0, pg_core_1.pgTable)("questions", {
    questionId: (0, pg_core_1.serial)("questionId").primaryKey(),
    questionIndex: (0, pg_core_1.integer)("questionIndex"),
    questionTitle: (0, pg_core_1.jsonb)("questionTitle").$type(),
    questionAspect: (0, pg_core_1.jsonb)("questionAspect").$type(),
});
exports.questionsAnswersRelations = (0, drizzle_orm_1.relations)(exports.questions, ({ many }) => ({
    answers: many(answers_1.answers),
}));
