import { useDispatch, useSelector } from "react-redux";
import { getAnswerOfQuestion, pickAnswer } from "./questionsSlice";
// import { current } from "@reduxjs/toolkit";

function AnswerItem({ answer }) {
  // const { answerId, answerText, answerPoints } = answer;
  const { answerId, answerText } = answer;
  const dispatch = useDispatch();
  const answerOfQuestion = useSelector(getAnswerOfQuestion);
  const currentQuestion = answerOfQuestion === answerId;
  return (
    <div
      className={`checkbox-wrapper cursor-pointer  hover:bg-gradient-to-l hover:from-indigo-500 hover:via-sky-600 hover:to-indigo-500  hover:font-semibold hover:text-white ${
        currentQuestion
          ? "bg-indigo-600 font-semibold text-white"
          : "bg-cyan-200"
      }`}
    >
      <label className="flex flex-row gap-2">
        <input
          type="checkbox"
          onChange={() => dispatch(pickAnswer(answerId))}
          className="w-5"
          checked={answerOfQuestion === answerId}
          disabled={answerOfQuestion === answerId}
        />
        <span className="w-screen px-4 py-2">{answerText} </span>
      </label>
    </div>
  );
}

export default AnswerItem;
