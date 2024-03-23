import { useEffect, useState } from "react";
import ListOfQuestions from "../../../features/devActions/ListOfQuestions";
import { getQuestionStats } from "../../../services/getQuestionStats";
import QuestionStatsView from "../../../features/devActions/QuestionStatsView";
import Loader from "react-spinner-loader";

function CandidateAnswersPerQuestion() {
  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchQuestionStats() {
      try {
        setIsLoading(true);
        const questionsArray = await getQuestionStats();
        console.log(questionsArray);
        setQuestions(questionsArray);
      } catch (error) {
        console.error("Loading stats failed:", error);
      }
      setIsLoading(false);
    }
    fetchQuestionStats();
  }, []);

  const viewQuestion = questions.find(
    (question) => question.questionId === questionId,
  );

  if (isLoading)
    return (
      <Loader
        show={true}
        type="body"
        stack="vertical"
        message="Loading stats, it takes a while..."
      />
    );

  return (
    <div className="grid grid-cols-2 max-h-screen min-h-screen overflow-x-hidden">
      <ListOfQuestions
        questions={questions}
        questionId={questionId}
        onQuestionId={setQuestionId}
      />
      <QuestionStatsView question={viewQuestion} />
    </div>
  );
}

export default CandidateAnswersPerQuestion;
