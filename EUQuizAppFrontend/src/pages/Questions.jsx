import { useSelector } from "react-redux";
import QuestionAspect from "../features/questions/QuestionAspect";
import QuestionNavigation from "../features/questions/QuestionNavigation";
import Question from "../features/questions/Question";
import {
  getCurrentQuestion,
  getQuestions,
} from "../features/questions/questionsSlice";
import { redirect, useNavigate } from "react-router-dom";
import Home from "./Home";

function Questions() {
  const questions = useSelector(getQuestions);
  const currentQuestion = useSelector(getCurrentQuestion);

  const navigate = useNavigate();
  if (!questions || !questions[currentQuestion]) {
    console.log(currentQuestion);
    // Redirect to the home page if questions are undefined
    navigate("/");
    return <Home />;
  }
  const aspect = questions[currentQuestion].questionAspect.gr;

  return (
    <div className="mx-auto flex w-80 flex-col gap-0 bg-cyan-100 pt-8 md:w-screen md:max-w-[45rem]">
      <div className="flex w-full flex-row justify-between outline outline-1 outline-cyan-500 ">
        <QuestionNavigation />
      </div>
      <div className="flex justify-between pb-[1px] pt-0.5 md:hidden">
        <div></div>
        <QuestionAspect aspect={aspect} />
      </div>
      <div className="md:pt-5">
        <Question question={questions[currentQuestion]} />
      </div>
    </div>
  );
}

export default Questions;
