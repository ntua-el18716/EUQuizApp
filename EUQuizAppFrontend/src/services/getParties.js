export async function getParties() {
  const res = await fetch("http://localhost:3000/getParties");
  const parties = await res.json();
  // console.log(candidates);
  return parties.partiesResult;
}
