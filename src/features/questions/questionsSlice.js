import { createSlice } from '@reduxjs/toolkit';
import { questions as questionsArray } from '../../data/questions';

export const NUMBER_OF_QUESTIONS = questionsArray.length;

const answerPerQuestion = Array(NUMBER_OF_QUESTIONS).fill(0);

// const asp = new Set();
// const aspArr = [];
// for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
//   asp.add(questionsArray[i].questionAspect);
// }
// const aspIterator = asp.values();
// for (let i = 0; i < asp.size; i++) {
//   aspArr.push({
//     aspectId: i,
//     value: aspIterator.next().value,
//     importance: 1,
//   });
// }

const aspectsArr = [
  { aspectId: 1, value: 'Cyprus Problem', importance: 1, questions: [] },
  { aspectId: 2, value: 'European Union', importance: 1, questions: [] },
  { aspectId: 3, value: 'Foreign Policy', importance: 1, questions: [] },
  { aspectId: 4, value: 'Economy', importance: 1, questions: [] },
  { aspectId: 5, value: 'Immigration', importance: 1, questions: [] },
  { aspectId: 6, value: 'Green Politics', importance: 1, questions: [] },
  { aspectId: 7, value: 'Social Issues', importance: 1, questions: [] },
];

const initialState = {
  currentQuestion: 0,
  currentAnswer: null,
  questions: questionsArray,
  numberOfQuestions: NUMBER_OF_QUESTIONS,
  answerPerQuestion,
  aspects: aspectsArr,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    goNext(state) {
      if (state.currentQuestion < NUMBER_OF_QUESTIONS - 1)
        state.currentQuestion += 1;
    },
    goPrevious(state) {
      console.log(NUMBER_OF_QUESTIONS);
      if (state.currentQuestion > 0) state.currentQuestion -= 1;
    },
    goToIndex(state, action) {
      state.currentQuestion = action.payload;
    },
    pickAnswer(state, action) {
      state.answerPerQuestion[state.currentQuestion] = action.payload;
    },
    setImportance(state, action) {
      console.log(action.payload);
      state.aspects[action.payload.index].importance =
        action.payload.importance;
      console.log(state.aspects[action.payload.index].importance);
    },
    resetQuestions() {
      return initialState;
    },
  },
});

export const {
  goNext,
  goPrevious,
  goToIndex,
  pickAnswer,
  setImportance,
  resetQuestions,
} = questionsSlice.actions;

export default questionsSlice.reducer;

export const getQuestions = (state) => state.questions.questions;

export const getCurrentQuestion = (state) => state.questions.currentQuestion;

export const getCurrentAnswers = (id) => (state) =>
  state.questions.questions[id].answers;

export const getNumberOfQuestions = (state) =>
  state.questions.numberOfQuestions;

export const getAnswerOfQuestion = (state) =>
  state.questions.answerPerQuestion[state.questions.currentQuestion];

export const getAnswerPerQuestion = (state) =>
  state.questions.answerPerQuestion;

export const getAspects = (state) => state.questions.aspects;
