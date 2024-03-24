import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetQuestions } from "../features/questions/questionsSlice";
import { resetResults } from "../features/results/resultsSlice";
import { useTranslation } from "react-i18next";

const lngs = {
  tr: { nativeName: "Türkçe", displayValue: "tr" },
  en: { nativeName: "English", displayValue: "en" },
  el: { nativeName: "Ελληνικά", displayValue: "gr" },
};

function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetQuestions());
    dispatch(resetResults());
  }

  // if (i18n.language);

  return (
    // <div className="flex-items-center justify-between bg-cyan-700 uppercase">
    <div className="flex justify-between bg-indigo-700">
      <Link
        to="/"
        className="justify-left flex items-center gap-5 bg-indigo-700 px-6 py-4 text-xl font-bold uppercase text-white"
        onClick={handleReset}
      >
        <h1 className="md:hidden">EU 2024 </h1>
        <h1 className="hidden md:block">EU ELECTIONS 2024 </h1>

        <span className="font-size-md">🇪🇺</span>
      </Link>

      <Link
        to="/candidateUpdate"
        className="justify-left flex items-center gap-5 bg-indigo-700 px-6 py-4 text-xl font-bold uppercase text-white"
        onClick={handleReset}
      >
        {/* <h1 className="md:hidden">EU 2023 </h1> */}
        <h1 className="hidden md:block">Candidates Form</h1>
      </Link>
      <Link
        to="/questionUpdate"
        className="justify-left flex items-center gap-5 bg-indigo-700 px-6 py-4 text-xl font-bold uppercase text-white"
        onClick={handleReset}
      >
        {/* <h1 className="md:hidden">EU 2023 </h1> */}
        <h1 className="hidden md:block">Questions Form</h1>
      </Link>

      <div className="pr-3 pt-1 items-center font-bold">
        <select
          value={i18n.language}
          // value={"en"}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-sky-600 text-cyan-50 fontbold hover:bg-gradient-to-l hover:from-sky-700 hover:to-sky-700 py-3 px-4 justify-center border border-indigo-500 rounded-lg focus:outline-none focus:shadow-outline-indigo uppercase "
        >
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng} className="font-bold">
              {lngs[lng].displayValue}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
