import { Link } from "react-router-dom";
import Home from "../../../public/images/home.svg?react";

function ListOfQuestions({ questions, questionId, onQuestionId }) {
  const sortedQuestions = questions.sort(
    (a, b) => a.questionIndex - b.questionIndex,
  );
  return (
    <div className="h-5/6">
      <div className="flex justify-between px-2 ">
        <Link
          to="/"
          className=" bg-indigo-700 flex px-2 py-3 rounded-lg text-lg font-bold uppercase text-white my-auto"
        >
          <h1 className="hidden md:block pr-1">Home</h1>
          <Home />
        </Link>
        <h1 className="text-2xl text-indigo-900 text-center pt-5 font-bold py-4 font-serif">
          List of Questions
        </h1>
        <h1 className="px-4 w-[70px]"></h1>
      </div>
      <ul className="no-scrollbar max-h-screen h-full flex flex-col gap-4 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5">
        <button
          className="uppercase font-bold gap-4 p-4 bg-indigo-700 text-white hover:bg-indigo-500 rounded-xl w-1/2 text-center mx-auto"
          onClick={() => {
            onQuestionId(-1);
          }}
        >
          Insert a new Question
        </button>
        {sortedQuestions.map((question) => (
          <button
            key={question.questionId}
            className={`grid grid-cols-11 gap-4 p-4 bg-indigo-700 text-white hover:bg-indigo-500 rounded-xl font-semibold hover:from-teal-500 hover:via-sky-600 hover:to-indigo-500 ${
              question.questionId === questionId
                ? "bg-gradient-to-r from-indigo-500 via-sky-600 to-indigo-500"
                : ""
            }`}
            onClick={() => {
              onQuestionId(question.questionId);
            }}
          >
            <p>{question.questionIndex}</p>
            <p>{question.questionTitle.en}</p>
          </button>
        ))}
      </ul>
    </div>
  );
}

export default ListOfQuestions;
