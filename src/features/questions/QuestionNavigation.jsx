import { useDispatch, useSelector } from "react-redux";
import {
  getAnswerPerQuestion,
  getCurrentQuestion,
  getNumberOfQuestions,
  goToIndex,
} from "./questionsSlice";
import { useEffect, useRef, useState } from "react";

function QuestionNavigation() {
  const num = useSelector(getNumberOfQuestions);
  const currentQuestion = useSelector(getCurrentQuestion);
  const answerPerQuestion = useSelector(getAnswerPerQuestion);
  const dispatch = useDispatch();
  let a = new Array(num).fill("");

  const scrollElement = useRef(null);

  const [scrollNext, setScrollNext] = useState(false);

  useEffect(() => {
    if (currentQuestion > 10) setScrollNext(true);
    else setScrollNext(false);
    if (scrollNext) scrollElement.current.scrollLeft = 300;
    else scrollElement.current.scrollLeft = 0;
  }, [scrollNext, currentQuestion]);

  return (
    <div>
      <ul
        ref={scrollElement}
        className="no-scrollbar h-[100%] w-80 gap-1 overflow-hidden overflow-x-auto whitespace-nowrap rounded-lg md:w-[100%] md:max-w-[45rem]"
      >
        {a.map((_, index) => (
          <button
            key={index}
            className={`mr-[7.5px] w-[1.4rem] justify-center py-[5px] font-bold text-indigo-50 hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 md:w-[1.7rem]  md:py-[8px] ${
              currentQuestion === index
                ? "bg-indigo-600"
                : currentQuestion > index && answerPerQuestion[index] === 0
                  ? "bg-slate-500 text-white"
                  : "bg-cyan-500"
            }`}
            onClick={() => {
              // scrollLeft();
              dispatch(goToIndex(index));
            }}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default QuestionNavigation;
