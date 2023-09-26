import ResultBar from "./ResultBar";

function ResultItem({ party, result }) {
  return (
    <div className="flex flex-row justify-between gap-6 p-4">
      <p className="w-60 text-indigo-950 uppercase font-semibold text-lg">
        {party}
      </p>
      <ResultBar result={result} />
      <p className="text-indigo-950 font-semibold text-lg">{result}%</p>
    </div>
  );
}

export default ResultItem;
