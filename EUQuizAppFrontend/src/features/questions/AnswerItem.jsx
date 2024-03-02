import { useDispatch, useSelector } from "react-redux";
import { getAnswerOfQuestion, pickAnswer } from "./questionsSlice";
// import { current } from "@reduxjs/toolkit";

function AnswerItem({ answer, language }) {
  // const { answerId, answerText, answerPoints } = answer;
  const { answerIndex, answerText, answerId } = answer;
  const dispatch = useDispatch();
  const answerOfQuestion = useSelector(getAnswerOfQuestion);
  const currentQuestion = answerOfQuestion === answerIndex;
  return (
    <div
      className={`checkbox-wrapper cursor-pointer hover:bg-gradient-to-l hover:from-indigo-500 hover:via-sky-600 hover:to-indigo-500  hover:font-semibold hover:text-white ${
        currentQuestion
          ? "bg-indigo-600 font-semibold text-white"
          : "bg-cyan-200"
      }`}
    >
      <label className="flex flex-row gap-2">
        <input
          type="checkbox"
          onChange={() =>
            dispatch(pickAnswer({ answer: answerIndex, answerId: answerId }))
          }
          className="w-5 content-start"
          checked={answerOfQuestion === answerIndex}
          disabled={answerOfQuestion === answerIndex}
        />
        <span className="w-screens px-4 py-2">{answerText[language]}</span>
      </label>
    </div>
  );
}

export default AnswerItem;
