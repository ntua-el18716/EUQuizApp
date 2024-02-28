import { pgEnum } from "drizzle-orm/pg-core";

export const grAspectsEnum = pgEnum("grAspectsEnum", [
  "Κυπριακό Πρόβλημα",
  "Ευρωπαϊκή Ένωση",
  "Οικονομία",
  "Εξωτερική Πολιτική",
  "Μεταναστευτικό",
  "Περιβάλλον",
  "Κοινωνικά Θέματα",
]);

export const enAspectsEnum = pgEnum("enAspectsEnum", [
  "Cyprus Problem",
  "European Union",
  "Economy",
  "Foreign Policy",
  "Immigration",
  "Green Politics",
  "Social Issues",
]);

export const trAspectsEnum = pgEnum("trAspectsEnum", [
  "Κυπριακό Πρόβλημα",
  "Ευρωπαϊκή Ένωση",
  "Οικονομία",
  "Εξωτερική Πολιτική",
  "Μεταναστευτικό",
  "Περιβάλλον",
  "Κοινωνικά Θέματα",
]);
