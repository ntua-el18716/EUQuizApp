// routes.ts
import express from "express";

import { insertQuestionAndAnswers } from "./insertQuestionAnswers";
import { insertUserAnswers } from "./insertUserAnswers";
import { insertCandidateAnswers } from "./insertCandidateAnswers";
import { insertParty } from "./insertParty";
import { updateCandidate } from "./updateCandidate";
import { fetchCandidates } from "./getCandidates";
import { fetchQuizData } from "./getQuestionsAnswers";
import { fetchParties } from "./getParties";
import { insertCandidate } from "./insertCandidate";
import { updateQuestionAnswers } from "./updateQuestionAnswers";
import { insertQuizData } from "./insertQuizData";

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

router.put("/updateCandidate", async (req, res) => {
  await updateCandidate(req.body);
  res.send("Candidate Updated");
});

router.post("/insertParty", async (req, res) => {
  await insertParty(req.body);
  res.send("Party Added");
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

router.get("/", (req, res) => {
  res.send("Welcome to the Backend of the EU Quiz App"); // You can customize the response message
});

export default router;
