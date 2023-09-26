import { useDispatch, useSelector } from "react-redux";
import { calculateResults, getResultsPerParty } from "./resultsSlice";
import PartyResult from "./ResultItem";

function ResultsPresentation() {
  const resultsPerParty = useSelector(getResultsPerParty);
  const dispatch = useDispatch();

  let results = [];
  for (var party in resultsPerParty) {
    results.push([party, resultsPerParty[party]]);
  }
  console.log(results);

  results.sort(function (a, b) {
    return b[1] - a[1];
  });

  return (
    <div>
      <div className="flex flex-col gap-6">
        {results.map((party) => (
          <PartyResult party={party[0]} result={party[1]} key={party[0]} />
        ))}
      </div>
    </div>
  );
}

export default ResultsPresentation;
