import PartyLogo from './PartyLogo';
import ResultBar from './ResultBar';
// import Disy from '../../images/disy.svg?react';
function ResultItem({ party, result }) {
  const roundedResult = Math.round(result);
  return (
    <div className="flex flex-row items-center justify-between gap-6 px-2 py-1 outline outline-1 outline-sky-700 md:p-4">
      {/* <p className="w-60 text-lg font-semibold uppercase text-indigo-950">
        {party}
      </p> */}
      <PartyLogo party={party} />
      {/* <Disy width={150} /> */}
      {/* <div className="h-10/ w-auto bg-red-600"> */}
      <ResultBar result={result} />
      {/* JAJAAJAJAJ */}
      {/* </div> */}
      <p className="text-lg font-semibold text-indigo-950">{roundedResult}%</p>
    </div>
  );
}

export default ResultItem;
