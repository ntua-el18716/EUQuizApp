import { createSlice } from '@reduxjs/toolkit';
import { parties, questions as questionsArray } from '../../data/questions';

export const NUMBER_OF_QUESTIONS = Number(questionsArray.length);

const initialState = {
  pointsPerParty: parties,
  resultsPerParty: parties,
  importantPointsPerParty: parties,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    submitAnswers(state, action) {
      for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let answerPoints =
          questionsArray[i].answers[action.payload[i] - 1].answerPoints;
        answerPoints.map((answer) => {
          state.pointsPerParty[answer.party] += answer.value;
        });
      }
    },
    calculateResults(state) {
      Object.keys(state.pointsPerParty).map((party) => {
        state.resultsPerParty[party] =
          (state.pointsPerParty[party] / NUMBER_OF_QUESTIONS) * 100;
      });
    },

    calculateImportanceResults(state, action) {
      const aspects = action.payload.aspects;
      const answerPerQuestion = action.payload.answerPerQuestion;
      let importanceSum = 0;
      aspects.map((aspect) => (importanceSum += aspect.importance));
      for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let answerPoints =
          questionsArray[i].answers[answerPerQuestion[i] - 1].answerPoints;
        answerPoints.map((answer) => {
          let a = aspects.find(
            ({ value }) => value === questionsArray[i].questionAspect,
          );
          state.importantPointsPerParty[answer.party] +=
            answer.value * a.importance;
        });
      }

      Object.keys(state.importantPointsPerParty).map((party) => {
        state.importantPointsPerParty[party] =
          (state.importantPointsPerParty[party] / NUMBER_OF_QUESTIONS) *
          ((100 * aspects.length) / importanceSum);
      });
    },

    resetResults() {
      return initialState;
    },
  },
});

export const {
  submitAnswers,
  calculateResults,
  calculateImportanceResults,
  resetResults,
} = resultsSlice.actions;

export default resultsSlice.reducer;

export const getPointsPerParty = (state) => state.results.pointsPerParty;

export const getResultsPerParty = (state) => state.results.resultsPerParty;
export const getImportantResultsPerParty = (state) =>
  state.results.importantPointsPerParty;
