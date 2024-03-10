import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiBaseUrl from "../../services/apiConfig";
import { sortedQuizData as sortedQuizDatav2 } from "../../data/questions13";

// import { questions as questionsArray } from "../../data/questions3";
// let s = "https://eu-quiz-app-backend.vercel.app";
export const fetchQuizData = createAsyncThunk(
  "questions/getQuizData",
  async function () {
    const res = await fetch(`${apiBaseUrl}/getQuizData`);
    // const res = await fetch(
    //   "https://eu-quiz-app-backend.vercel.app/getQuizData",
    // );
    // console.log(res);
    const quizData = await res.json();
    // console.log(quizData);
    // return quizData.sortedQuizData;
    return sortedQuizDatav2;
  },
);

// export const NUMBER_OF_QUESTIONS = questionsArray.length;

// const answerPerQuestion = Array(NUMBER_OF_QUESTIONS).fill(0);
let answerPerQuestion; // = Array(1).fill(0);
let answerIdPerQuestion; // = Array(1).fill(0);

let candidateCustomAnswerPerQuestion = Array(13).fill("");

const aspectsArr = [
  { aspectId: 1, value: "Cyprus Problem", importance: 1 },
  { aspectId: 2, value: "European Union", importance: 1 },
  { aspectId: 3, value: "Foreign Policy", importance: 1 },
  { aspectId: 4, value: "Economy", importance: 1 },
  { aspectId: 5, value: "Immigration", importance: 1 },
  { aspectId: 6, value: "Green Politics", importance: 1 },
  { aspectId: 7, value: "Social Issues", importance: 1 },
];

const initialState = {
  currentQuestion: 0,
  currentAnswer: null,
  // questions: questionsArray,
  questions: [],
  numberOfQuestions: 0,
  answerPerQuestion,
  answerIdPerQuestion,
  aspects: aspectsArr,
  status: "idle",
  //candidate data variables
  candidateCustomAnswerPerQuestion,
  candidateMode: false,
  candidateInfo: {
    candidateId: 0,
    candidateCode: "0",
    candidateEmail: "",
    candidateMobileNumber: "",
    candidateName: { el: "", en: "" },
  },
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
      state.answerPerQuestion[state.currentQuestion] = action.payload.answer;
      state.answerIdPerQuestion[state.currentQuestion] =
        action.payload.answerId;
    },
    setCandidateInfo(state, action) {
      console.log("data:" + action.payload);
      state.candidateInfo = { candidateCode: "0", ...action.payload };
      state.candidateMode = true;
      console.log(state.candidateMode);
    },
    setCandidateCustomAnswer(state, action) {
      // console.log(action.payload);
      console.log(state.currentQuestion);
      state.candidateCustomAnswerPerQuestion[state.currentQuestion] =
        action.payload;
      console.log(
        state.candidateCustomAnswerPerQuestion[state.currentQuestion],
      );
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
        answerPerQuestion: state.answerPerQuestion,
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
        // console.log(questionArray);
        state.questions = questionArray;
        state.numberOfQuestions = questionArray.length;
        state.status = "fulfilled";
        const answerPerQuestion = Array(state.numberOfQuestions).fill(0);
        const answerIdPerQuestion = Array(state.numberOfQuestions).fill(0);
        // const answerPerQuestion = Array(3).fill(0);
        state.answerPerQuestion = answerPerQuestion;
        state.answerIdPerQuestion = answerIdPerQuestion;
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
  setCandidateCustomAnswer,
  setCandidateInfo,
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

export const getCandidateCustomAnswerOfQuestion = (state) =>
  state.questions.candidateCustomAnswerPerQuestion[
    state.questions.currentQuestion
  ];

export const getCandidateCustomAnswerPerQuestion = (state) =>
  state.questions.candidateCustomAnswerPerQuestion;

export const getCandidateMode = (state) => state.questions.candidateMode;

export const getCandidateInfo = (state) => state.questions.candidateInfo;

export const getAnswerPerQuestion = (state) =>
  state.questions.answerPerQuestion;

export const getAnswerIdPerQuestion = (state) =>
  state.questions.answerIdPerQuestion;

export const getAspects = (state) => state.questions.aspects;

export const getQuizDataStatus = (state) => state.questions.status;
