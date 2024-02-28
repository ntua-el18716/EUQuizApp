import { useDispatch } from 'react-redux';
import ImportanceButton from './ImportanceButton';
import { setImportance } from '../questions/questionsSlice';

function AspectItem({ aspect }) {
  const { aspectId, importance } = aspect;
  const dispatch = useDispatch();
  return (
    // <div className="col-start-2 col-end-3">
    <div
      className="col-start-1 col-end-2 flex flex-row items-center justify-center gap-1 text-xl"
      key={aspectId}
    >
      <ImportanceButton
        active={importance === 0.5}
        onClick={() =>
          dispatch(setImportance({ index: aspectId - 1, importance: 0.5 }))
        }
      >
        -
      </ImportanceButton>
      <ImportanceButton
        active={importance === 1}
        onClick={() =>
          dispatch(setImportance({ index: aspectId - 1, importance: 1 }))
        }
      >
        =
      </ImportanceButton>
      <ImportanceButton
        active={importance === 1.5}
        onClick={() =>
          dispatch(setImportance({ index: aspectId - 1, importance: 1.5 }))
        }
      >
        +
      </ImportanceButton>
    </div>
  );
}

export default AspectItem;
