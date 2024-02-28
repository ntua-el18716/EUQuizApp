import { useDispatch } from "react-redux";
import ImportanceButton from "./ImportanceButton";
import { setImportance } from "../questions/questionsSlice";

function AspectItem({ aspect }) {
  const { aspectId } = aspect;
  const dispatch = useDispatch();
  return (
    // <div className="col-start-2 col-end-3">
    <div
      className="flex flex-row gap-1 col-start-1 col-end-2 text-xl items-center justify-center"
      key={aspectId}
    >
      <ImportanceButton
        onClick={() =>
          dispatch(setImportance({ index: aspectId, importance: -1 }))
        }
      >
        -
      </ImportanceButton>
      <ImportanceButton
        onClick={() =>
          dispatch(setImportance({ index: aspectId, importance: 0 }))
        }
      >
        =
      </ImportanceButton>
      <ImportanceButton
        onClick={() =>
          dispatch(setImportance({ index: aspectId, importance: 1 }))
        }
      >
        +
      </ImportanceButton>
    </div>
  );
}

export default AspectItem;
