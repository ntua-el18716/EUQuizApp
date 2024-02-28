import { createSlice } from "@reduxjs/toolkit";
// import { parties, questions as questionsArray } from "../../data/questions";
import { parties } from "../../data/questions";

// export const NUMBER_OF_QUESTIONS = Number(questionsArray.length);

const initialState = {
  pointsPerParty: parties,
  resultsPerParty: parties,
  importantPointsPerParty: parties,
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    submitAnswers(state, action) {
      console.log(action.payload);
      for (let i = 0; i < action.payload.numberOfQuestions; i++) {
        let answerPoints =
          action.payload.questionsArray[i].answers[
            action.payload.answerPerQuestion[i] - 1
          ].answerPoints;
        answerPoints.map((answer) => {
          state.pointsPerParty[answer.party] += Number(answer.value);
        });
      }
    },
    calculateResults(state, action) {
      console.log(state.pointsPerParty);
      Object.keys(state.pointsPerParty).map((party) => {
        state.resultsPerParty[party] = parseFloat(
          (state.pointsPerParty[party] /
            Number(action.payload.numberOfQuestions)) *
            100,
        );

        console.log(party + ": " + state.pointsPerParty[party]);
      });
    },

    calculateImportanceResults(state, action) {
      // console.log(state.resultsPerParty);
      // console.log(action.payload);
      const aspects = action.payload.aspects;
      const numberOfQuestions = action.payload.numberOfQuestions;
      const answerPerQuestion = action.payload.answerPerQuestion;
      let importanceSum = 0;
      aspects.map((aspect) => (importanceSum += aspect.importance));
      importanceSum -= 2;
      for (let i = 0; i < numberOfQuestions; i++) {
        let answerPoints =
          action.payload.questionsArray[i].answers[answerPerQuestion[i] - 1]
            .answerPoints;
        answerPoints.map((answer) => {
          let a = aspects.find(
            ({ value }) =>
              value === action.payload.questionsArray[i].questionAspect.en,
          );
          state.importantPointsPerParty[answer.party] +=
            answer.value * a.importance;
        });
      }

      Object.keys(state.importantPointsPerParty).map((party) => {
        state.importantPointsPerParty[party] =
          (state.importantPointsPerParty[party] / numberOfQuestions) *
          // ((100 * aspects.length) / importanceSum);
          ((100 * 5) / importanceSum);
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
