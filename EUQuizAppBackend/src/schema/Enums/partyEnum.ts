import { pgEnum } from "drizzle-orm/pg-core";

export const partyEnum = pgEnum("partyEnum", [
  "disy",
  "akel",
  "diko",
  "elam",
  "edek",
  "depa",
  "greens",
  "volt",
]);
