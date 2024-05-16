// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();

// export default {
//   schema: "./src/schema/*",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql", // "postgresql" | "mysql"
  // driver: "pg", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
