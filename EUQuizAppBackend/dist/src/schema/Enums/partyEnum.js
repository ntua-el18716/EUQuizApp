"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partyEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.partyEnum = (0, pg_core_1.pgEnum)("partyEnum", [
    "disy",
    "akel",
    "diko",
    "elam",
    "edek",
    "depa",
    "greens",
    "volt",
]);
