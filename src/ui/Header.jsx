import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetQuestions } from "../features/questions/questionsSlice";
import { resetResults } from "../features/results/resultsSlice";

function Header() {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetQuestions());
    dispatch(resetResults());
  }

  return (
    // <div className="flex-items-center justify-between bg-cyan-700 uppercase">

    <Link
      to="/"
      className="flex items-center justify-left gap-5 bg-indigo-700 uppercase px-6 py-4 text-white text-xl font-bold"
      onClick={handleReset}
    >
      <h1>EU ELECTIONS 2023 </h1>
      <span className="font-size-md">🇪🇺</span>
    </Link>
  );
}

export default Header;
