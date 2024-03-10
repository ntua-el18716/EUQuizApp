import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuestionTitle from "./QuestionTitle";
import Button from "../../ui/Button";
import AnswerItem from "./AnswerItem";
import {
  getAnswerOfQuestion,
  getAnswerPerQuestion,
  getCandidateCustomAnswerOfQuestion,
  getCandidateMode,
  getNumberOfQuestions,
  getQuestions,
  goNext,
  goPrevious,
  pickAnswer,
  setCandidateCustomAnswer,
} from "./questionsSlice";
import { submitAnswers, calculateResults } from "../results/resultsSlice";
import QuestionAspect from "./QuestionAspect";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import LeftArrow from "../../../public/images/arrow-left.svg?react";
import RightArrow from "../../../public/images/arrow-right.svg?react";

function Question({ question }) {
  const { i18n } = useTranslation();

  // const { questionIndex, questionTitle, answers, questionAspect } = question;
  const { questionIndex } = question;
  const numberOfQuestions = useSelector(getNumberOfQuestions);
  const questionsArray = useSelector(getQuestions);
  // const answer = useSelector(getAnswerOfQuestion);
  const dispatch = useDispatch();
  const answerPerQuestion = useSelector(getAnswerPerQuestion);
  const candidateCustomAnswerPerQuestion = useSelector(
    getCandidateCustomAnswerOfQuestion,
  );
  const candidateMode = useSelector(getCandidateMode) || false;

  const navigate = useNavigate();

  const { t } = useTranslation();

  let language = i18n.language;

  useEffect(() => {
    const handlePopstate = (event) => {
      event.preventDefault();
      dispatch(goPrevious());
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopstate);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [dispatch]);

  let questionTitleT =
    questionsArray[questionIndex - 1].questionTitle[language];
  // let questionTitleT = t(`questions.${questionIndex - 1}.questionTitle`, {
  //   ns: "questions",
  // });
  let questionAspectT =
    questionsArray[questionIndex - 1].questionAspect[language];
  // let questionAspectT = t(`questions.${questionIndex - 1}.questionAspect`, {
  //   ns: "questions",
  // });
  let answersT = questionsArray[questionIndex - 1].answers;
  // let answersT = t(`questions.${questionIndex - 1}.answers`, {
  //   ns: "questions",
  //   returnObjects: true,
  // });
  // console.log(answersT);
  const answerOfQuestion = useSelector(getAnswerOfQuestion);

  return (
    <div className="flex flex-col gap-0 bg-cyan-100">
      <div className="flex justify-between bg-cyan-700">
        <QuestionTitle title={questionTitleT} />
        <div className="hidden md:block">
          <QuestionAspect aspect={questionAspectT} />
        </div>
      </div>
      {/* <Answers /> */}
      <div>
        <ul className="flex flex-col gap-6 pt-6">
          {answersT.map((answer) => (
            <AnswerItem
              answer={answer}
              language={language}
              key={answer.answerId}
            />
          ))}

          {candidateMode && (
            <div
              className={`checkbox-wrapper cursor-pointer hover:bg-gradient-to-l hover:from-indigo-500 hover:via-sky-600 hover:to-indigo-500  hover:font-semibold hover:text-white ${
                answerOfQuestion === -1
                  ? "bg-indigo-600 font-semibold text-white placeholder:text-white"
                  : "bg-cyan-200"
              }`}
              onClick={() => dispatch(pickAnswer({ answer: -1, answerId: -1 }))}
            >
              <label className="flex gap-1">
                <input
                  type="checkbox"
                  checked={answerOfQuestion === -1 ? true : false}
                  className="w-5 content-start"
                  onChange={() => {}}
                ></input>
                <input
                  placeholder="Click here and write a custom answer"
                  className={`bg-cyan-200 w-full checkbox-wrapper focus:outline-none  hover:bg-gradient-to-l hover:from-indigo-500 hover:via-sky-600 hover:to-indigo-500  hover:font-semibold hover:text-white px-4 py-2 placeholder:italic placeholder:font-sans placeholder:text-slate-700 placeholder:hover:text-white ${
                    answerOfQuestion === -1
                      ? "bg-indigo-600 font-semibold text-white placeholder:text-white placeholder:font-normal"
                      : "bg-cyan-200"
                  }`}
                  value={candidateCustomAnswerPerQuestion}
                  onChange={(e) =>
                    dispatch(setCandidateCustomAnswer(e.target.value))
                  }
                ></input>
              </label>
            </div>
          )}
        </ul>
      </div>

      <div className="flex justify-between px-6 pb-3 pt-6">
        <Button
          onClick={() => {
            dispatch(goPrevious());
          }}
          disabled={questionIndex === 1}
        >
          <div className="flex gap-1">
            <LeftArrow />
            BACK
          </div>
        </Button>
        {questionIndex !== numberOfQuestions ? (
          <Button onClick={() => dispatch(goNext())}>
            <div className="flex gap-1">
              NEXT <RightArrow />
            </div>
          </Button>
        ) : candidateMode ? (
          <Button
            onClick={() => navigate("/candidateReview")}
            disabled={answerPerQuestion.includes(0)}
          >
            <div className="flex gap-1">
              CONTINUE <RightArrow />
            </div>
          </Button>
        ) : (
          <Button
            disabled={answerPerQuestion.includes(0)}
            onClick={() => {
              dispatch(
                submitAnswers({
                  answerPerQuestion,
                  questionsArray,
                  numberOfQuestions,
                }),
              );
              dispatch(calculateResults({ numberOfQuestions }));
              navigate("/review");
            }}
          >
            SUBMIT
          </Button>
        )}
      </div>
    </div>
  );
}

export default Question;
