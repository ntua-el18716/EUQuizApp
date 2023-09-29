import { useState } from 'react';
import ResultsNavBar from '../features/results/ResultsNavBar';
import Button from '../ui/Button';
import ResultsMainBody from '../features/results/ResultsMainBody';
import { useDispatch } from 'react-redux';
import { resetResults } from '../features/results/resultsSlice';
import { resetQuestions } from '../features/questions/questionsSlice';
import { useNavigate } from 'react-router-dom';
function Results() {
  const [active, setActive] = useState('results');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleReset() {
    dispatch(resetQuestions());
    dispatch(resetResults());
    navigate('/');
  }

  return (
    <div className="mx-auto h-full w-80 max-w-3xl bg-cyan-100 pb-2 pt-6 md:w-screen md:max-w-3xl">
      <ResultsNavBar active={active} onActive={setActive} />
      <div className="pb-3"></div>
      <ResultsMainBody active={active} />
      <div className="flex justify-between pt-3">
        <Button onClick={handleReset}>Home 🏠</Button>
        <Button>Download Screenshot</Button>
      </div>
    </div>
  );
}

export default Results;
