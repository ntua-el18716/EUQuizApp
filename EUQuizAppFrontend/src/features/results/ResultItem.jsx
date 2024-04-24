import EuropeanPartyLogo from "./EuropeanPartyLogo";
import PartyLogo from "./PartyLogo";
// import ResultBar from "./ResultBar";
import { ProgressBar } from "react-progressbar-fancy";

// import Disy from '../../images/disy.svg?react';
function ResultItem({ party, result }) {
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
    <div className="flex flex-col bg-cyan-200 hover:from-sky-300 hover:to-cyan-3 rounded-lg hover:bg-gradient-to-l cursor-pointer">
      <div className="flex flex-row items-center justify-between gap-1 px-2 py-1  md:p-4 ">
        <PartyLogo party={party} />

        <ProgressBar
          score={result}
          hideText
          primaryColor="purple"
          secondaryColor="blue"
          // primaryColor={colors[party]?.primaryColor}
          // secondaryColor={colors[party]?.secondaryColor}
        />
        {/* <ResultBar result={result} /> */}
        <div className="flex h-full align-middle text-lg text-center font-semibold text-indigo-950">
          {/* <p className={`${roundedResult === 0 ? "pl-1 md:pl-2" : ""}`}> */}
          <p className="pr-3 text-2xl font-bold text-indigo-800">
            {roundedResult}%
          </p>
        </div>
        <EuropeanPartyLogo party={party} />
      </div>
      <div className="p-4 flex flex-col gap-2 text-indigo-900 font-semibold ">
        <p className="font-bold text-lg">
          ΑΚΕΛ - Αριστερά - Κοινωνική Συμμαχία
        </p>
        <a
          href="https://akel.org.cy/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <p>The Left in the European Parliament – GUE/NGL</p>
        </a>
        {/* <a href="http://www.akel.com">Website Link: www.akel.com</a> */}
        <a
          href="https://akel.org.cy/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Website
        </a>
      </div>
    </div>
  );
}

export default ResultItem;
