import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuestionTitle from './QuestionTitle';
import Button from '../../ui/Button';
import AnswerItem from './AnswerItem';
import {
  getAnswerOfQuestion,
  getAnswerPerQuestion,
  getNumberOfQuestions,
  goNext,
  goPrevious,
} from './questionsSlice';
import { calculateResults, submitAnswers } from '../results/resultsSlice';
import QuestionAspect from './QuestionAspect';

function Question({ question }) {
  const { questionId, questionTitle, answers, questionAspect } = question;
  const numberOfQuestions = useSelector(getNumberOfQuestions);
  const answer = useSelector(getAnswerOfQuestion);
  const dispatch = useDispatch();
  const answerPerQuestion = useSelector(getAnswerPerQuestion);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-0 bg-cyan-100">
      <div className="flex justify-between bg-cyan-700">
        <QuestionTitle title={questionTitle} />
        {/* <div className="float-right w-fit justify-items-end"> */}
        <div className="hidden md:block">
          <QuestionAspect aspect={questionAspect} />
        </div>
      </div>
      {/* <Answers /> */}
      <div>
        <ul className="flex flex-col gap-6 pt-6">
          {answers.map((answer) => (
            <AnswerItem answer={answer} key={answer.answerId} />
          ))}
        </ul>
      </div>

      <div className="flex justify-between px-6 pb-3 pt-6">
        <Button onClick={() => dispatch(goPrevious())}>BACK</Button>
        {questionId !== numberOfQuestions ? (
          <Button disabled={answer === 0} onClick={() => dispatch(goNext())}>
            NEXT
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(submitAnswers(answerPerQuestion));
              navigate('/review');
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
