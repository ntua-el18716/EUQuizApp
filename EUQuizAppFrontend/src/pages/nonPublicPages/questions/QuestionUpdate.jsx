import { useEffect, useState } from "react";
import { getQuizData } from "../../../services/getQuizData";
import ListOfQuestions from "../../../features/devActions/ListOfQuestions";
import UpdateQuestionForm from "../../../features/devActions/UpdateQuestionForm";

function QuestionUpdate() {
  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState(-1);
  const [renderList, setRenderList] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const questionsArray = await getQuizData();
      setQuestions(questionsArray);
    }
    fetchQuestions();
  }, [renderList]);

  // console.log(questionId);
  const updateQuestion = questions.find(
    (question) => question.questionId === questionId,
  );
  // console.log(questions);

  const insertMode = questionId === -1;

  return (
    <div className="grid grid-cols-2 max-h-screen min-h-screen overflow-x-hidden">
      <ListOfQuestions
        questions={questions}
        questionId={questionId}
        onQuestionId={setQuestionId}
      />
      <UpdateQuestionForm
        question={updateQuestion}
        insertMode={insertMode}
        onRenderList={setRenderList}
      />
    </div>
  );
}

export default QuestionUpdate;
