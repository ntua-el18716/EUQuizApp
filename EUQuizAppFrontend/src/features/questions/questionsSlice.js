import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { questions as questionsArray } from "../../data/questions3";

export const fetchQuizData = createAsyncThunk(
  "questions/getQuizData",
  async function () {
    const res = await fetch("http://localhost:3000/getQuizData");
    // console.log(res);
    const quizData = await res.json();

    return quizData.dataArray;
  },
);

// export const NUMBER_OF_QUESTIONS = questionsArray.length;

// const answerPerQuestion = Array(NUMBER_OF_QUESTIONS).fill(0);
const answerPerQuestion = Array(13).fill(0);

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
  { aspectId: 1, value: "Cyprus Problem", importance: 1 },
  { aspectId: 2, value: "European Union", importance: 1 },
  { aspectId: 3, value: "Foreign Policy", importance: 1 },
  { aspectId: 4, value: "Economy", importance: 1 },
  { aspectId: 5, value: "Immigration", importance: 1 },
  { aspectId: 6, value: "Green Politics", importance: 1 },
  { aspectId: 7, value: "Social Issues", importance: 1 },
];
// const aspectsArr = [
//   { aspectId: 1, value: "Cyprus Problem", importance: 1, questions: [] },
//   { aspectId: 2, value: "European Union", importance: 1, questions: [] },
//   { aspectId: 3, value: "Foreign Policy", importance: 1, questions: [] },
//   { aspectId: 4, value: "Economy", importance: 1, questions: [] },
//   { aspectId: 5, value: "Immigration", importance: 1, questions: [] },
//   { aspectId: 6, value: "Green Politics", importance: 1, questions: [] },
//   { aspectId: 7, value: "Social Issues", importance: 1, questions: [] },
// ];

const initialState = {
  currentQuestion: 0,
  currentAnswer: null,
  // questions: questionsArray,
  questions: [],
  numberOfQuestions: 0,
  answerPerQuestion,
  aspects: aspectsArr,
  status: "idle",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    goNext(state) {
      if (state.currentQuestion < state.numberOfQuestions - 1)
        state.currentQuestion += 1;
    },
    goPrevious(state) {
      if (state.currentQuestion > 0) state.currentQuestion -= 1;
    },
    goToIndex(state, action) {
      state.currentQuestion = action.payload;
    },
    pickAnswer(state, action) {
      state.answerPerQuestion[state.currentQuestion] = action.payload;
    },
    setImportance(state, action) {
      // console.log(action.payload);
      state.aspects[action.payload.index].importance =
        action.payload.importance;
      // console.log(state.aspects[action.payload.index].importance);
    },
    resetQuestions(state) {
      return {
        ...initialState,
        questions: state.questions,
        numberOfQuestions: state.numberOfQuestions,
      };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        let questionArray = action.payload;
        state.questions = questionArray;
        state.numberOfQuestions = questionArray.length;
        state.status = "fulfilled";
        const answerPerQuestion = Array(state.numberOfQuestions).fill(0);
        // const answerPerQuestion = Array(3).fill(0);
        state.answerPerQuestion = answerPerQuestion;
      })
      .addCase(fetchQuizData.rejected, (state) => {
        state.status = "error";
      }),
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

export const getQuizDataStatus = (state) => state.questions.status;
