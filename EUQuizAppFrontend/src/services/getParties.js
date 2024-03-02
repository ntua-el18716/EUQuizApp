import apiBaseUrl from "./apiConfig";

export async function getParties() {
  const res = await fetch(`${apiBaseUrl}/getParties`);
  const parties = await res.json();
  // console.log(candidates);
  return parties.partiesResult;
}
