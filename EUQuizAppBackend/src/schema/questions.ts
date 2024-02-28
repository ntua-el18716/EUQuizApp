import { relations } from "drizzle-orm";
import { integer, jsonb, pgTable, serial, text } from "drizzle-orm/pg-core";
import { answers } from "./answers";
import {
  enAspectsEnum,
  grAspectsEnum,
  trAspectsEnum,
} from "./Enums/aspectEnum";

export const questions = pgTable("questions", {
  questionId: serial("questionId").primaryKey(),
  questionIndex: integer("questionIndex"),
  questionTitle: jsonb("questionTitle").$type<{
    el: string;
    tr: string;
    en: string;
  }>(),
  questionAspect: jsonb("questionAspect").$type<{
    el: typeof grAspectsEnum;
    tr: typeof trAspectsEnum;
    en: typeof enAspectsEnum;
  }>(),
});

export const questionsAnswersRelations = relations(questions, ({ many }) => ({
  answers: many(answers),
}));
