import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questions/questionsSlice";
import resultsReducer from "./features/results/resultsSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    results: resultsReducer,
  },
});

export default store;
