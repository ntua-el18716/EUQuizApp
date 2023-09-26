import { useDispatch, useSelector } from "react-redux";
import { getAnswerOfQuestion, pickAnswer } from "./questionsSlice";
import { current } from "@reduxjs/toolkit";

function AnswerItem({ answer }) {
  const { answerId, answerText, answerPoints } = answer;
  const dispatch = useDispatch();
  const answerOfQuestion = useSelector(getAnswerOfQuestion);
  const currentQuestion = answerOfQuestion === answerId;
  return (
    <div
      className={`checkbox-wrapper ${
        currentQuestion
          ? "bg-indigo-500 text-white font-semibold"
          : "bg-cyan-200"
      }`}
    >
      <label className="flex flex-row gap-2">
        <input
          type="checkbox"
          onChange={() => dispatch(pickAnswer(answerId))}
          className="px-5"
          checked={answerOfQuestion === answerId}
          disabled={answerOfQuestion === answerId}
        />
        <span className="py-2 px-4 w-screen">{answerText} </span>
      </label>
    </div>
  );
}

export default AnswerItem;
