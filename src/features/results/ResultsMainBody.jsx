import { useSelector } from 'react-redux';
import ResultsPresentation from './ResultsPresentation';
import {
  getImportantResultsPerParty,
  getResultsPerParty,
} from './resultsSlice';

function ResultsMainBody({ active }) {
  const resultsPerPartyBasic = useSelector(getResultsPerParty);
  const resultsPerParty = useSelector(getImportantResultsPerParty);

  return (
    <div>
      {active === 'results' && (
        <ResultsPresentation resultsPerParty={resultsPerParty} />
      )}
      {active === 'basic-results' && (
        <ResultsPresentation resultsPerParty={resultsPerPartyBasic} />
      )}
      {active === 'info' && <p>info</p>}
    </div>
  );
}

export default ResultsMainBody;
