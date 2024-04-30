// import ResultsPresentation from './ResultsPresentation';
// import ResultNavItem from './ResultNavItem';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
function ResultsNavBar({ active, onActive }) {
  return (
    <ul className="w-3xl  flex h-12 flex-row items-center justify-evenly bg-sky-500 px-2  font-semibold text-white">
      <li
        className={`hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 ${
          active === "results" ? "bg-indigo-600" : ""
        }  p-3`}
      >
        <button onClick={() => onActive("results")}>RESULTS</button>
      </li>

      <li
        className={`hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 ${
          active === "basic-results" ? "bg-indigo-600" : ""
        } px-3 md:py-3 py-3 hidden  sm:block`}
      >
        <button onClick={() => onActive("basic-results")}>BASIC RESULTS</button>
      </li>
      <li
        className={`hiddsen hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 md:block ${
          active === "info" ? "bg-indigo-600" : ""
        } p-3`}
      >
        <button onClick={() => onActive("info")}>CANDIDATES</button>
      </li>
      <li
        className={`${
          active ? "bg-slate-600" : ""
        } p-2 sm:flex gap-4 shidden sm:block hidden`}
      >
        <div className="flex gap-3">
          <button className="hover:hidden">SHARE </button>
          <FacebookShareButton
            url="www.cyvoteeu.com"
            description="Try CYvoteEU, the quiz that helps you decide who to vote for in the EU Elections"
            hashtags={["cyprus", "CYvoteEU", "ΜαζίBirlikte", "euelections2024"]}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url="www.cyvoteeu.com"
            title="Try CYvoteEU, the quiz that helps you decide who to vote for in the EU Elections"
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton
            url="www.cyvoteeu.com   "
            title="Try CYvoteEU, the quiz that helps you decide who to vote for in the EU Elections"
            hashtags={["cyprus", "CYvoteEU", "ΜαζίBirlikte", "euelections2024"]}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <ViberShareButton
            url="www.cyvoteeu.com   "
            title="Try CYvoteEU, the quiz that helps you decide who to vote for in the EU Elections"
          >
            <ViberIcon size={32} round={true} />
          </ViberShareButton>
          <FacebookMessengerShareButton
            appId={"436425642084863"}
            url="www.cyvoteeu.com   "
            // title="Try CYvoteEU, the quiz that helps you decide who to vote for in the EU Elections"
          >
            <FacebookMessengerIcon size={32} round={true} />
          </FacebookMessengerShareButton>
        </div>
      </li>
    </ul>
  );
}

export default ResultsNavBar;
