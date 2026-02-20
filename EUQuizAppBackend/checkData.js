const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://euquizdb_o90o_user:JV6e9TA2RwoDd90xT4ylZ9RYqaCoezej@dpg-d6c657ftn9qs73cc5p3g-a.frankfurt-postgres.render.com/euquizdb_o90o",
  ssl: true,
});

async function check() {
  try {
    await client.connect();
    const res = await client.query("SELECT COUNT(*) FROM questions");
    console.log("Questions in database:", res.rows[0].count);

    const answersRes = await client.query("SELECT COUNT(*) FROM answers");
    console.log("Answers in database:", answersRes.rows[0].count);

    await client.end();
  } catch (err) {
    console.error("Error:", err.message);
  }
}

check();
