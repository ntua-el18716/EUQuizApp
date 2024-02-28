export async function getCandidates() {
  const res = await fetch("http://localhost:3000/getCandidates");
  const candidates = await res.json();
  // console.log(candidates);
  return candidates.candidatesResult;
}
