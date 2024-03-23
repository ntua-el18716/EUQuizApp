import { useEffect, useState } from "react";
import { candidateCalculate } from "../../services/candidateCalculate";

function ResultsCandidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchCandidates() {
      const candidatesArray = await candidateCalculate();
      setCandidates(candidatesArray);
    }
    fetchCandidates();
  }, []);

  return (
    <div>
      <ul>{candidates.map((candidate) => console.log(candidate.count))}</ul>
    </div>
  );
}

export default ResultsCandidates;
