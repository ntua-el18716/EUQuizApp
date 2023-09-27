import ResultBar from './ResultBar';

function ResultItem({ party, result }) {
  const roundedResult = Math.round(result);
  return (
    <div className="flex flex-row justify-between gap-6 p-4">
      <p className="w-60 text-lg font-semibold uppercase text-indigo-950">
        {party}
      </p>
      <ResultBar result={result} />
      <p className="text-lg font-semibold text-indigo-950">{roundedResult}%</p>
    </div>
  );
}

export default ResultItem;
