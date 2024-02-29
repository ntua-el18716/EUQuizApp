"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trAspectsEnum = exports.enAspectsEnum = exports.grAspectsEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.grAspectsEnum = (0, pg_core_1.pgEnum)("grAspectsEnum", [
    "Κυπριακό Πρόβλημα",
    "Ευρωπαϊκή Ένωση",
    "Οικονομία",
    "Εξωτερική Πολιτική",
    "Μεταναστευτικό",
    "Περιβάλλον",
    "Κοινωνικά Θέματα",
]);
exports.enAspectsEnum = (0, pg_core_1.pgEnum)("enAspectsEnum", [
    "Cyprus Problem",
    "European Union",
    "Economy",
    "Foreign Policy",
    "Immigration",
    "Green Politics",
    "Social Issues",
]);
exports.trAspectsEnum = (0, pg_core_1.pgEnum)("trAspectsEnum", [
    "Κυπριακό Πρόβλημα",
    "Ευρωπαϊκή Ένωση",
    "Οικονομία",
    "Εξωτερική Πολιτική",
    "Μεταναστευτικό",
    "Περιβάλλον",
    "Κοινωνικά Θέματα",
]);
