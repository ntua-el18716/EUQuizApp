import Disy from "../../images/partyLogos/disy.svg?react";
import Greens from "../../images/partyLogos/greens.svg?react";
// import Akel from "../../images/partyLogos/akel.svg?react";
import Akel from "../../images/partyLogos/akelv2.svg?react";
import Diko from "../../images/partyLogos/diko.svg?react";
import Elam from "../../images/partyLogos/elam.svg?react";
import Depa from "../../images/partyLogos/depa.svg?react";
import Edek from "../../images/partyLogos/edek.svg?react";
import Volt from "../../images/partyLogos/volt.svg?react";
function PartyLogo({ party }) {
  switch (party) {
    case "disy":
      return <Disy width={130} height={70} />;
    case "akel":
      return <Akel width={130} height={70} />;
    case "greens":
      return <Greens width={130} height={70} />;
    case "diko":
      return <Diko width={130} height={70} />;
    case "elam":
      return <Elam width={130} height={70} />;
    case "edek":
      return <Edek width={130} height={70} />;
    case "depa":
      return <Depa width={130} height={70} />;
    case "volt":
      return <Volt width={130} height={70} />;
    default:
      return <Greens width={130} height={70} />;
  }
}

export default PartyLogo;
