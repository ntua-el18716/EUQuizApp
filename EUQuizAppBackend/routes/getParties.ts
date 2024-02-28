import { db } from "../src";

export async function fetchParties(res) {
  try {
    const dataArray: {}[] = [];
    const partiesResult = await db.query.parties.findMany();

    // console.log(partiesResult);

    res.status(200).json({ status: "okay", partiesResult });
  } catch (error) {
    console.error("Error fetching parties:", error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
