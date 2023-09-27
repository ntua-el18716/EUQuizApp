import { useState } from 'react';
import ResultsNavBar from '../features/results/ResultsNavBar';
import Button from '../ui/Button';
import ResultsMainBody from '../features/results/ResultsMainBody';
function Results() {
  const [active, setActive] = useState('results');

  return (
    <div className="mx-auto h-full w-80 max-w-3xl bg-cyan-100 pb-2 pt-6 md:w-screen md:max-w-3xl">
      <ResultsNavBar active={active} onActive={setActive} />
      <ResultsMainBody active={active} />
      <div className="flex justify-between">
        <Button>Home 🏠</Button>
        <Button>Download Screenshot</Button>
      </div>
    </div>
  );
}

export default Results;
