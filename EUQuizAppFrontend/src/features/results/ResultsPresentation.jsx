import ResultItem from "./ResultItem";

function ResultsPresentation({ resultsPerParty }) {
  console.log(resultsPerParty);
  let results = [];
  for (var party in resultsPerParty) {
    results.push([party, resultsPerParty[party]]);
  }
  console.log(resultsPerParty);

  results.sort(function (a, b) {
    return b[1] - a[1];
  });
  return (
    <div>
      <ul
        id="print"
        className="no-scrollbar max-h-screen h-full flex flex-col gap-6 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5"
      >
        {results.map((party) => (
          <ResultItem party={party[0]} result={party[1]} key={party[0]} />
        ))}
      </ul>
    </div>
  );
}

export default ResultsPresentation;
