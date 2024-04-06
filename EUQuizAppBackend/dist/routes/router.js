"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const insertQuestionAnswers_1 = require("./insertQuestionAnswers");
const insertUserAnswers_1 = require("./insertUserAnswers");
const insertCandidateAnswers_1 = require("./insertCandidateAnswers");
const insertParty_1 = require("./insertParty");
const updateCandidate_1 = require("./updateCandidate");
const getCandidates_1 = require("./getCandidates");
const getQuestionsAnswers_1 = require("./getQuestionsAnswers");
const getParties_1 = require("./getParties");
const insertCandidate_1 = require("./insertCandidate");
const updateQuestionAnswers_1 = require("./updateQuestionAnswers");
const insertQuizData_1 = require("./insertQuizData");
const candidateCalculate_1 = require("./candidateCalculate");
const questionStats_1 = require("./questionStats");
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("newRequest");
    next();
});
router.post("/insertQuestionAnswers", async (req, res) => {
    await (0, insertQuestionAnswers_1.insertQuestionAndAnswers)(req.body);
    res.send("Question and Answers Added");
});
router.post("/insertQuizData", async (req, res) => {
    await (0, insertQuizData_1.insertQuizData)(req.body);
    res.send("Question and Answers Added");
});
router.put("/updateQuestionAnswers", async (req, res) => {
    await (0, updateQuestionAnswers_1.updateQuestionAnswers)(req.body);
    res.send("Question and Answers Updated");
});
router.post("/insertUserAnswers", async (req, res) => {
    await (0, insertUserAnswers_1.insertUserAnswers)(req.body);
    res.send("User Answers Added");
});
router.post("/insertCandidateAnswers", async (req, res) => {
    await (0, insertCandidateAnswers_1.insertCandidateAnswers)(req.body);
    res.send("Candidate Answers Added");
});
router.post("/insertCandidate", async (req, res) => {
    await (0, insertCandidate_1.insertCandidate)(req.body);
    res.send("Candidate Added");
});
router.post("/insertCandidates", async (req, res) => {
    await (0, insertCandidate_1.insertCandidates)(req.body);
    res.send("Candidates Added");
});
router.put("/updateCandidate", async (req, res) => {
    await (0, updateCandidate_1.updateCandidate)(req.body);
    res.send("Candidate Updated");
});
router.post("/insertParty", async (req, res) => {
    await (0, insertParty_1.insertParty)(req.body);
    res.send("Party Added");
});
router.post("/insertParties", async (req, res) => {
    await (0, insertParty_1.insertParties)(req.body);
    res.send("Parties Added");
});
router.get("/getQuizData", async (req, res) => {
    await (0, getQuestionsAnswers_1.fetchQuizData)(res);
    // res.send("Here are the questions");
});
router.get("/getCandidates", async (req, res) => {
    await (0, getCandidates_1.fetchCandidates)(res);
    // res.send("Here are the questions");
});
router.get("/getParties", async (req, res) => {
    await (0, getParties_1.fetchParties)(res);
    // res.send("Here are the questions");
});
// router.get("/candidateCalculate", async (req, res) => {
router.post("/candidateCalculate", async (req, res) => {
    // await candidateCalculate(res);
    await (0, candidateCalculate_1.candidateCalculate)({ req, res });
    // res.send("Here are the questions");
});
router.get("/getQuestionStats", async (req, res) => {
    await (0, questionStats_1.questionStats)(res);
    // res.send("Here are the questions");
});
router.get("/", (req, res) => {
    res.send("Welcome to the Backend of the EU Quiz App"); // You can customize the response message
});
exports.default = router;
