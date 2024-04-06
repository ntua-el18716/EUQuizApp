// import { ProgressBar } from "react-progressbar-fancy";
import ResultItem from "./ResultItem";

import html2canvas from "html2canvas";

export const takeScreenshot = () => {
  // const element = document.getElementById("candidate");
  const element = document.getElementById("print");

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet?.insertRule(
    "body > div:last-child img { display: inline-block; }",
  );

  if (!element) return;
  html2canvas(element, {
    scale: 2,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  }).then((canvas) => {
    style.remove();
    let image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = "Capture.jpeg";
    a.click();
  });
};

function ResultsPresentation({ resultsPerParty }) {
  // console.log(resultsPerParty);
  let results = [];
  for (var party in resultsPerParty) {
    results.push([party, resultsPerParty[party]]);
  }
  // console.log(resultsPerParty);

  results.sort(function (a, b) {
    return b[1] - a[1];
  });
  return (
    <div id="parties">
      <ul
        id="print"
        className="no-scrollbar max-h-screen h-full flex flex-col gap-1 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5"
      >
        {results.map((party) => (
          <ResultItem party={party[0]} result={party[1]} key={party[0]} />
        ))}
      </ul>
    </div>
  );
}

export default ResultsPresentation;
