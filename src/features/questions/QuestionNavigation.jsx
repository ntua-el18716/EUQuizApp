import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentQuestion,
  getNumberOfQuestions,
  goToIndex,
} from './questionsSlice';

function QuestionNavigation() {
  const num = useSelector(getNumberOfQuestions);
  const currentQuestion = useSelector(getCurrentQuestion);
  const dispatch = useDispatch();

  let a = new Array(num).fill('');

  return (
    <div>
      <ul className=" no-scrollbar h-[100%] w-80 gap-1 overflow-hidden overflow-x-auto overflow-y-scroll whitespace-nowrap rounded-lg md:w-[100%] md:max-w-[45rem]">
        {a.map((_, index) => (
          <button
            key={index}
            className={`mr-[7.5px] w-[1.4rem] justify-center py-[5px] font-bold text-indigo-50 md:w-[1.7rem] md:py-[8px] ${
              currentQuestion === index ? 'bg-indigo-600' : 'bg-cyan-500'
            }`}
            onClick={() => dispatch(goToIndex(index))}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </div>
  );
}

// return (
//   <div className="flex flex-row gap-1 w-screen justify-evenly">
//     <button className="bg-cyan-500 px-2 py-1.5 text-cyan-50 font-bold">
//       1
//     </button>
//     <button className="bg-cyan-500 px-2 py-1.5 text-cyan-50 font-bold">
//       2
//     </button>
//     <button className="bg-cyan-500 px-2 py-1.5 text-cyan-50 font-bold">
//       3
//     </button>
//     <button className="bg-cyan-500 px-2 py-1.5 text-cyan-50 font-bold">
//       4
//     </button>
//     <button className="bg-cyan-500 px-2 py-1.5 text-cyan-50 font-bold">
//       5
//     </button>
//   </div>
// );
//}

export default QuestionNavigation;
