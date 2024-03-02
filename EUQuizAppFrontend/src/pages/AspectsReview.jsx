import { useDispatch, useSelector } from "react-redux";
import AspectList from "../features/aspects/AspectList";
import {
  calculateImportanceResults,
  resetResults,
} from "../features/results/resultsSlice";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import {
  getAnswerIdPerQuestion,
  getAnswerPerQuestion,
  getAspects,
  getNumberOfQuestions,
  getQuestions,
} from "../features/questions/questionsSlice";
import { insertUserAnswers } from "../services/insertUserAnswers";

function AspectsReview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aspects = useSelector(getAspects);
  const answerPerQuestion = useSelector(getAnswerPerQuestion);
  const answerIdPerQuestion = useSelector(getAnswerIdPerQuestion);
  const questionsArray = useSelector(getQuestions);
  const numberOfQuestions = useSelector(getNumberOfQuestions);

  const handleFinalSubmit = () => {
    insertUserAnswers({ answers: answerIdPerQuestion });
    dispatch(
      calculateImportanceResults({
        aspects: aspects,
        answerPerQuestion: answerPerQuestion,
        questionsArray: questionsArray,
        numberOfQuestions: numberOfQuestions,
      }),
    );
    navigate("/results");
  };

  return (
    <div className="mx-auto flex h-5/6 w-80 flex-col justify-between gap-0 bg-cyan-100 pt-8 md:w-screen md:max-w-3xl">
      {/* <div className="max-w-2xl items-center flex flex-col mx-auto"> */}
      <p className="px-4">Choose which aspects are more important to you</p>
      <div className="mx-auto max-w-3xl items-center">
        <AspectList />
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => {
            dispatch(resetResults());
            navigate("/questions");
          }}
        >
          Edit Answers
        </Button>
        <Button
          // onClick={() => {
          //   dispatch(
          //     calculateImportanceResults({
          //       aspects: aspects,
          //       answerPerQuestion: answerPerQuestion,
          //       questionsArray: questionsArray,
          //       numberOfQuestions: numberOfQuestions,
          //     }),
          //   );
          //   navigate("/results");
          // }}
          onClick={handleFinalSubmit}
        >
          Final Submit
        </Button>
      </div>
    </div>
  );
}

export default AspectsReview;
