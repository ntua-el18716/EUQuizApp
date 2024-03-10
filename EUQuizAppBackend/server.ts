import express from "express";
import { insertQuestionAndAnswers } from "./routes/insertQuestionAnswers";
import { insertUserAnswers } from "./routes/insertUserAnswers";
import { insertCandidateAnswers } from "./routes/insertCandidateAnswers";
import { fetchQuizData } from "./routes/getQuestionsAnswers";
import cors from "cors";
import { fetchCandidates } from "./routes/getCandidates";
import { insertCandidate } from "./routes/insertCandidate";
import { updateCandidate } from "./routes/updateCandidate";
import { fetchParties } from "./routes/getParties";
import { insertParty } from "./routes/insertParty";

import router from "./routes/router";

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors<Request>());

// app.get("/", (req, res) => {
//   return res.json({
//     status: "success!!!",
//   });
// });

app.use("/", router);

app.listen(port, () => {
  console.log("TypeScript with Express starsted at http:localhost:3000");
});

export default app;
