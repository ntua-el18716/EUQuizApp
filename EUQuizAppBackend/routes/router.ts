// routes.ts
import express from "express";

import { insertQuestionAndAnswers } from "./insertQuestionAnswers";
import { insertUserAnswers } from "./insertUserAnswers";
import { insertCandidateAnswers } from "./insertCandidateAnswers";
import { insertParties, insertParty } from "./insertParty";
import { updateCandidate } from "./updateCandidate";
import { fetchCandidates } from "./getCandidates";
import { fetchQuizData } from "./getQuestionsAnswers";
import { fetchParties } from "./getParties";
import { insertCandidate, insertCandidates } from "./insertCandidate";
import { updateQuestionAnswers } from "./updateQuestionAnswers";
import { insertQuizData } from "./insertQuizData";
import { candidateCalculate } from "./candidateCalculate";
import { questionStats } from "./questionStats";

const router = express.Router();

router.use((req, res, next) => {
  console.log("newRequest");
  next();
});

router.post("/insertQuestionAnswers", async (req, res) => {
  await insertQuestionAndAnswers(req.body);
  res.send("Question and Answers Added");
});

router.post("/insertQuizData", async (req, res) => {
  await insertQuizData(req.body);
  res.send("Question and Answers Added");
});

router.put("/updateQuestionAnswers", async (req, res) => {
  await updateQuestionAnswers(req.body);
  res.send("Question and Answers Updated");
});

router.post("/insertUserAnswers", async (req, res) => {
  await insertUserAnswers(req.body);
  res.send("User Answers Added");
});

router.post("/insertCandidateAnswers", async (req, res) => {
  await insertCandidateAnswers(req.body);
  res.send("Candidate Answers Added");
});

router.post("/insertCandidate", async (req, res) => {
  await insertCandidate(req.body);
  res.send("Candidate Added");
});

router.post("/insertCandidates", async (req, res) => {
  await insertCandidates(req.body);
  res.send("Candidates Added");
});

router.put("/updateCandidate", async (req, res) => {
  await updateCandidate(req.body);
  res.send("Candidate Updated");
});

router.post("/insertParty", async (req, res) => {
  await insertParty(req.body);
  res.send("Party Added");
});

router.post("/insertParties", async (req, res) => {
  await insertParties(req.body);
  res.send("Parties Added");
});

router.get("/getQuizData", async (req, res) => {
  await fetchQuizData(res);
  // res.send("Here are the questions");
});

router.get("/getCandidates", async (req, res) => {
  await fetchCandidates(res);
  // res.send("Here are the questions");
});

router.get("/getParties", async (req, res) => {
  await fetchParties(res);
  // res.send("Here are the questions");
});

// router.get("/candidateCalculate", async (req, res) => {
router.post("/candidateCalculate", async (req, res) => {
  // await candidateCalculate(res);
  await candidateCalculate({ req, res });
  // res.send("Here are the questions");
});

router.get("/getQuestionStats", async (req, res) => {
  await questionStats(res);
  // res.send("Here are the questions");
});

router.get("/", (req, res) => {
  res.send("Welcome to the Backend of the EU Quiz App"); // You can customize the response message
});

export default router;
