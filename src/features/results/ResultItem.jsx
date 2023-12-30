import PartyLogo from "./PartyLogo";
import ResultBar from "./ResultBar";
// import Disy from '../../images/disy.svg?react';
function ResultItem({ party, result }) {
  const roundedResult = Math.round(result);
  return (
    <div className=" flex flex-row items-center justify-between gap-6 px-2 py-1 bg-cyan-100 outline outline-2 outline-sky-700 md:p-4">
      <PartyLogo party={party} />
      <ResultBar result={result} />
      <div className="flex h-full align-middle text-lg text-center font-semibold text-indigo-950">
        <p>{roundedResult}%</p>
      </div>
    </div>
  );
}

export default ResultItem;
