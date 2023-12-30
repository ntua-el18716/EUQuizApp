import { useSelector } from "react-redux";
import ResultsPresentation from "./ResultsPresentation";
import {
  getImportantResultsPerParty,
  getResultsPerParty,
} from "./resultsSlice";
import { forwardRef } from "react";

const ResultsMainBody = forwardRef(function ResultsMainBody({ active }, ref) {
  const resultsPerPartyBasic = useSelector(getResultsPerParty);
  const resultsPerParty = useSelector(getImportantResultsPerParty);
  let results = [];
  for (var party in resultsPerParty) {
    results.push([party, resultsPerParty[party]]);
  }

  results.sort(function (a, b) {
    return b[1] - a[1];
  });
  return (
    <div>
      {active === "results" && (
        <ResultsPresentation resultsPerParty={resultsPerParty} />
      )}
      {active === "basic-results" && (
        <ResultsPresentation resultsPerParty={resultsPerPartyBasic} />
      )}
      {active === "info" && <p>info</p>}
    </div>
  );
});

export default ResultsMainBody;
