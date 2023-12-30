import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetQuestions } from "../features/questions/questionsSlice";
import { resetResults } from "../features/results/resultsSlice";
import { useTranslation } from "react-i18next";

const lngs = {
  el: { nativeName: "Ελληνικά" },
  tr: { nativeName: "Türkçe" },
  en: { nativeName: "English" },
};

function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetQuestions());
    dispatch(resetResults());
  }

  return (
    // <div className="flex-items-center justify-between bg-cyan-700 uppercase">
    <div className="flex justify-between bg-indigo-700">
      <Link
        to="/"
        className="justify-left flex items-center gap-5 bg-indigo-700 px-6 py-4 text-xl font-bold uppercase text-white"
        onClick={handleReset}
      >
        <h1>EU ELECTIONS 2023 </h1>
        <span className="font-size-md">🇪🇺</span>
      </Link>
      {/* <div className="">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className={`bg-indigo-6s00 via-cyan-500 px-4 py-3 font-bold text-cyan-50 hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600  disabled:cursor-not-allowed ${
              i18n.language === lng ? "bg-sky-600" : ""
            }`}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              // console.log(i18n.language);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div> */}
      <div className="pr-3 pt-1 items-center">
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-sky-600 text-cyan-50 font-semibold hover:bg-gradient-to-l hover:from-indigo-700 hover:via-sky-700 hover:to-indigo-500 py-3 px-4 justify-center border border-indigo-500 rounded-lg focus:outline-none focus:shadow-outline-indigo"
        >
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng}>
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
