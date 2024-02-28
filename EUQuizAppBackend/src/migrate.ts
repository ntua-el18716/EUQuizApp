import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./index";

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: "drizzle" })
  // migrate(db, { migrationsFolder: "./db/migratio?ns" })
  .then(() => {
    console.log("Migrations complete!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migrations failed!", err);
    process.exit(1);
  });
