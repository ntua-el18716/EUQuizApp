import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuestionTitle from "./QuestionTitle";
import Button from "../../ui/Button";
import AnswerItem from "./AnswerItem";
import {
  getAnswerOfQuestion,
  getAnswerPerQuestion,
  getNumberOfQuestions,
  goNext,
  goPrevious,
} from "./questionsSlice";
import { submitAnswers, calculateResults } from "../results/resultsSlice";
import QuestionAspect from "./QuestionAspect";
import { useTranslation } from "react-i18next";

function Question({ question }) {
  const { questionId, questionTitle, answers, questionAspect } = question;
  const numberOfQuestions = useSelector(getNumberOfQuestions);
  // const answer = useSelector(getAnswerOfQuestion);
  const dispatch = useDispatch();
  const answerPerQuestion = useSelector(getAnswerPerQuestion);
  const navigate = useNavigate();

  const { t } = useTranslation();

  console.log(t("questions.1.questionTitle"), { ns: "questions" });
  let questionTitleT = t(`questions.${questionId - 1}.questionTitle`, {
    ns: "questions",
  });
  let questionAspectT = t(`questions.${questionId - 1}.questionAspect`, {
    ns: "questions",
  });
  let answersT = t(`questions.${questionId - 1}.answers`, {
    ns: "questions",

    returnObjects: true,
  });
  console.log(answersT);
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
            <AnswerItem answer={answer} key={answer.answerId} />
          ))}
        </ul>
      </div>

      <div className="flex justify-between px-6 pb-3 pt-6">
        <Button onClick={() => dispatch(goPrevious())}>BACK</Button>
        {questionId !== numberOfQuestions ? (
          <Button onClick={() => dispatch(goNext())}>NEXT</Button>
        ) : (
          <Button
            disabled={answerPerQuestion.includes(0)}
            onClick={() => {
              console.log("sry");
              dispatch(submitAnswers(answerPerQuestion));
              dispatch(calculateResults());
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
