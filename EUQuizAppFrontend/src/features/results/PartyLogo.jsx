// import Disy from "../../../public/images/partyLogos/disyv2.svg?react";
import Greens from "../../../public/images/partyLogos/greensv3.svg?react";
import Akel from "../../../public/images/partyLogos/akel.svg?react";
import Diko from "../../../public/images/partyLogos/diko.svg?react";
import Elam from "../../../public/images/partyLogos/elam.svg?react";
import Depa from "../../../public/images/partyLogos/depa.svg?react";
import Edek from "../../../public/images/partyLogos/edek.svg?react";
import Volt from "../../../public/images/partyLogos/volt.svg?react";

function PartyLogo({ party }) {
  switch (party) {
    case "disy":
      // return <Disy width={130} height={70} />;
      return (
        <div className=" max-h-[102px] msin-w-[88.2666px] px-[13.8833px]">
          <img
            src="/images/partyLogos/disyv2.svg"
            alt="Disy SVG"
            width="88.2666px"
            height="102px"
          />
        </div>
      );

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
