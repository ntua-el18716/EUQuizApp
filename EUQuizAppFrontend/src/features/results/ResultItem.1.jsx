import PartyLogo from "./PartyLogo";
import { ProgressBar } from "react-progressbar-fancy";

// import Disy from '../../images/disy.svg?react';
export function ResultItem({ party, result }) {
  const roundedResult = Math.round(result);
  // let roundedResult = result > 0 ? Math.round(result) : "   0";
  let colors = {
    akel: { primaryColor: "red", secondaryColor: "white" },
    disy: { primaryColor: "blue", secondaryColor: "white" },
    diko: { primaryColor: "blue", secondaryColor: "white" },
    depa: { primaryColor: " #00C8FF", secondaryColor: "orange" },
    elam: { primaryColor: "#43C6AC", secondaryColor: "#191654" },
    edek: { primaryColor: "blue", secondaryColor: "white" },
    greens: { primaryColor: "blue", secondaryColor: "white" },
    volt: { primaryColor: "purple", secondaryColor: "white" },
  };

  return (
    <div className=" flex flex-row items-center justify-between gap-1 px-2 py-1 bg-cyan-200 md:p-4 hover:bg-gradient-to-l hover:from-sky-300 hover:to-cyan-3 rounded-lg">
      <PartyLogo party={party} />
      <ProgressBar
        score={result}
        hideText
        primaryColor="purple"
        secondaryColor="blue"
      />
      {/* <ResultBar result={result} /> */}
      <div className="flex h-full align-middle text-lg text-center font-semibold text-indigo-950">
        {/* <p className={`${roundedResult === 0 ? "pl-1 md:pl-2" : ""}`}> */}
        <p className="pr-3 text-2xl font-bold text-indigo-800">
          {roundedResult}%
        </p>
      </div>
      {/* <EuropeanPartyLogo party={party} /> */}
    </div>
  );
}
