"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const index_1 = require("./index");
// this will automatically run needed migrations on the database
(0, migrator_1.migrate)(index_1.db, { migrationsFolder: "drizzle" })
    // migrate(db, { migrationsFolder: "./db/migratio?ns" })
    .then(() => {
    console.log("Migrations complete!");
    process.exit(0);
})
    .catch((err) => {
    console.error("Migrations failed!", err);
    process.exit(1);
});
