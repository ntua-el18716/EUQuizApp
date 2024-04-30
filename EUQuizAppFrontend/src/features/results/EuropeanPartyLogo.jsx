import Epp from "../../../public/images/europeanGroupLogos/eppv3.svg?react";
// import SD from "../../../public/images/europeanGroupLogos/s&d.svg?react";
import SD from "../../../public/images/europeanGroupLogos/s&d.svg?react";
import GueNgl from "../../../public/images/europeanGroupLogos/gue.svg?react";
import Alde from "../../../public/images/europeanGroupLogos/alde.svg?react";
import EuropeanGreens from "../../../public/images/europeanGroupLogos/europeanGreens.svg?react";
// import EuropeanGreensEFA from "../../../public/images/europeanGroupLogos/GreensEFA.svg?react";
import VoltEuropa from "../../../public/images/europeanGroupLogos/voltStars.svg?react";
import Ecr from "../../../public/images/europeanGroupLogos/ecr.svg?react";

function EuropeanPartyLogo({ party }) {
  switch (party) {
    case "disy":
      return <Epp width={130} height={70} />;
    case "akel":
      return <GueNgl width={130} height={70} />;
    case "diko":
      return <SD width={130} height={70} />;
    case "elam":
      return <Ecr width={130} height={70} />;
    case "edek":
      return <SD width={130} height={70} />;
    case "depa":
      return <Alde width={130} height={70} />;
    case "greens":
      return <EuropeanGreens width={130} height={70} />;
    // return <EuropeanGreensEFA width={130} height={70} />;
    case "volt":
      // return <EuropeanGreensEFA width={130} height={70} />;
      return <VoltEuropa width={130} height={70} />;
    default:
      return <SD width={130} height={70} />;
  }
}

export default EuropeanPartyLogo;
