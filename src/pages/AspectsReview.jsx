import { useDispatch, useSelector } from 'react-redux';
import AspectList from '../features/aspects/AspectList';
import {
  calculateResults,
  submitAnswers,
} from '../features/results/resultsSlice';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { getAnswerPerQuestion } from '../features/questions/questionsSlice';

function AspectsReview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answerPerQuestion = useSelector(getAnswerPerQuestion);

  return (
    <div className="mx-auto flex h-5/6 w-80 flex-col justify-between gap-0 bg-cyan-100 pt-8 md:w-screen md:max-w-3xl">
      {/* <div className="max-w-2xl items-center flex flex-col mx-auto"> */}
      <p className="px-4">Choose which aspects are more important to you</p>
      <div className="mx-auto max-w-3xl items-center">
        <AspectList />
      </div>
      <div className="flex justify-between">
        <Button>Edit Answers</Button>
        <Button
          onClick={() => {
            dispatch(calculateResults());
            navigate('/results');
          }}
        >
          Final Submit
        </Button>
      </div>
    </div>
  );
}

export default AspectsReview;
