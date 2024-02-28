import { eq } from "drizzle-orm";
import { db } from "../src";
import { partyEnum } from "../src/schema/Enums/partyEnum";
import { candidates } from "../src/schema/candidates";

export async function fetchCandidates(res) {
  try {
    const dataArray: {}[] = [];
    const candidatesResult = await db.query.candidates.findMany();

    // console.log(candidatesResult);

    res.status(200).json({ status: "okay", candidatesResult });
  } catch (error) {
    console.error("Error fetching candidates:", error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
