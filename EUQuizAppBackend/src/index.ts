// db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as questions from "./schema/questions";
import * as answers from "./schema/answers";
import * as candidates from "./schema/candidates";
import * as candidateAnswers from "./schema/candidateAnswers";
import * as users from "./schema/users";
import * as userAnswers from "./schema/userAnswers";
import * as parties from "./schema/parties";

const schema = {
  ...questions,
  ...answers,
  ...candidates,
  ...candidateAnswers,
  ...users,
  ...userAnswers,
  ...parties,
};
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema: schema });
