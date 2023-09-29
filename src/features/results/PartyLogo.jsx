import Disy from '../../images/partyLogos/disy.svg?react';
import Greens from '../../images/partyLogos/greens.svg?react';
import Akel from '../../images/partyLogos/akel.svg?react';
import Diko from '../../images/partyLogos/diko.svg?react';
import Elam from '../../images/partyLogos/elam.svg?react';
import depa from '../../images/partyLogos/depa.png';
import Depa from '../../images/partyLogos/depa.svg?react';
import elam from '../../images/partyLogos/elam.png';
import edek from '../../images/partyLogos/edek.png';
import Edek from '../../images/partyLogos/edek.svg?react';
function PartyLogo({ party }) {
  console.log(party);

  switch (party) {
    case 'disy':
      return <Disy height={70} />;
    case 'akel':
      return <Akel width={130} height={70} />;
    case 'greens':
      return <Greens width={130} height={70} />;
    case 'diko':
      return <Diko width={130} height={70} />;
    case 'elam':
      return <Elam width={130} height={70} />;
    case 'edek':
      return <Edek width={130} height={70} />;

    // return (
    //   <div className="flex w-[130px] items-center justify-center py-[6.240px]">
    //     <img src={edek} width={90} />
    //   </div>
    // );
    case 'depa':
      return <Depa width={130} height={70} />;
    // return (
    //   <div className="flex w-[130px] items-center justify-center py-[6px]">
    //     <img src={depa} width={90} />
    //   </div>
    // );
    default:
      return <Greens width={130} height={70} />;
  }
}

export default PartyLogo;
