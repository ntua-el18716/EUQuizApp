function QuestionStatsView({ question }) {
  if (!question) return <p>Loading...</p>;
  // console.log(question);
  return (
    <div className="bg-indigo-800 flex flex-col gap-4 text-white p-4">
      <p className="text-lg font-semibold italic">
        Question {question.questionIndex}
      </p>
      <p className="bg-sky-600 text-xl p-4 rounded-lg font-semibold">
        {question.questionTitle.en}
      </p>
      {question.answers.map((answer) => (
        <div key={answer.answerId} className="flex flex-col gap-2">
          <div className="flex rounded-md p-2 bg-blue-600 font-semibold">
            <p className="p-2 font-semibold">{answer.answerIndex}.</p>
            <p className="p-2">{answer.answerText.en}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 py-2 pb-4">
            {answer.candidates.map((candidate) => (
              <li
                key={candidate.candidateId}
                // className="bg-emerald-700 p-2 rounded-lg flex gap-3 place-items-center"
                className={`
                  ${
                    candidate.candidateConsent ? "bg-emerald-600" : "bg-red-600"
                  } p-2 rounded-lg flex gap-3 place-items-center`}
              >
                <img
                  src={`/images/candidateImages/${candidate.candidateImg}.jpg`}
                  alt="Your Image"
                  style={{ maxHeight: "60px", width: "auto" }}
                  loading="lazy"
                  className="col-span-4 sm:col-span-2"
                />
                <p>{candidate?.candidateName.en}</p>
                <p>{candidate?.candidateConsent ? "✔" : "❌"}</p>
                <img
                  src={`/images/partyLogos/${candidate?.candidateParty}.png`}
                  alt="Your Image"
                  style={{
                    objectFit: "contain",
                    margin: "auto",
                    backgroundPosition: "center",
                    maxHeight: "65px",
                    // maxWidth: "70px",
                    // width: "70px",
                    height: "auto",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuestionStatsView;
