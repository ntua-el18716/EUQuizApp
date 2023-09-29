import PartyResult from './ResultItem';

function ResultsPresentation({ resultsPerParty }) {
  let results = [];
  for (var party in resultsPerParty) {
    results.push([party, resultsPerParty[party]]);
  }

  results.sort(function (a, b) {
    return b[1] - a[1];
  });

  return (
    <div>
      <ul id="print" className="flex flex-col gap-6">
        {results.map((party) => (
          <PartyResult party={party[0]} result={party[1]} key={party[0]} />
        ))}
      </ul>
    </div>
  );
}

export default ResultsPresentation;
