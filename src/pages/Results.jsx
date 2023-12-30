import { useRef, useState } from "react";
import ResultsNavBar from "../features/results/ResultsNavBar";
import Button from "../ui/Button";
import ResultsMainBody from "../features/results/ResultsMainBody";
import { useDispatch } from "react-redux";
import { resetResults } from "../features/results/resultsSlice";
import { resetQuestions } from "../features/questions/questionsSlice";
import { useNavigate } from "react-router-dom";
// import { useScreenshot, createFileName } from "use-react-screenshot";

// import { HiOutlineHome, HiOutlineHomeModern } from "react-icons/hi2";

function Results() {
  const [active, setActive] = useState("results");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleReset() {
    dispatch(resetQuestions());
    dispatch(resetResults());
    navigate("/");
  }
  const ref = useRef(null);

  //eslint-disable-next-line no-unused-vars
  // const [image, takeScreenshot] = useScreenshot({
  //   type: "image/jpeg",
  //   quality: 1.0,
  // });

  // const downloadScreenshot = () => takeScreenshot(ref.current).then(download);
  const downloadScreenshot = () => console.log("tbi");

  return (
    <div className="mx-auto w-80 max-w-3xl md:bg-cyan-100 pb-2 pt-6 md:w-screen md:max-w-3xl">
      <ResultsNavBar active={active} onActive={setActive} />
      <div className="pb-3 bg-transparent"></div>
      <ResultsMainBody ref={ref} active={active} />
      <div className="flex justify-between pt-3">
        <Button onClick={handleReset}>Home 🏠</Button>
        <Button onClick={downloadScreenshot}>Download Screenshot</Button>
      </div>
    </div>
  );
}

export default Results;
