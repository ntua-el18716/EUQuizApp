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
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("newRequest");
    next();
});
router.post("/insertQuestionAnswers", async (req, res) => {
    await (0, insertQuestionAnswers_1.insertQuestionAndAnswers)(req.body);
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
router.put("/updateCandidate", async (req, res) => {
    await (0, updateCandidate_1.updateCandidate)(req.body);
    res.send("Candidate Updated");
});
router.post("/insertParty", async (req, res) => {
    await (0, insertParty_1.insertParty)(req.body);
    res.send("Party Added");
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
exports.default = router;