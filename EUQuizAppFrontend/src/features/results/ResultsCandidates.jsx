import { ProgressBar } from "react-progressbar-fancy";
import { useEffect, useState } from "react";
import { candidateCalculate } from "../../services/candidateCalculate";
import Loader from "react-spinner-loader";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  getAnswerIdPerQuestion,
  getNumberOfQuestions,
} from "../questions/questionsSlice";

function ResultsCandidates() {
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const answerIdPerQuestionArray = [106, 122, 6, 7, 3, 151, 154, 177]; //useSelector(getAnswerIdPerQuestion);
  const answerIdPerQuestionArray = useSelector(getAnswerIdPerQuestion) || [
    106, 122, 6, 7, 3, 151, 154,
  ];
  const numberOfQuestions = useSelector(getNumberOfQuestions);
  useEffect(() => {
    async function fetchCandidates() {
      try {
        setIsLoading(true);
        const candidatesArray = await candidateCalculate({
          answerIds: answerIdPerQuestionArray,
        });
        setCandidates(candidatesArray);
      } catch (error) {
        console.error("Error Calculating Candidate matches:", error);
      }
      setIsLoading(false);
    }
    fetchCandidates();
  }, []);

  const { i18n } = useTranslation();
  let language = i18n.language;
  if (language === "tr") language === "en";
  if (isLoading)
    return (
      <Loader
        show={true}
        type="body"
        stack="vertical"
        message="Finding your best matches"
      />
    );

  return (
    <div>
      <ul className="flex flex-col gap-1">
        {candidates.map((candidate) => (
          <li
            key={candidate.candidateId}
            className="py-3 flex bg-cyan-300 px-2 hover:bg-gradient-to-l hover:from-sky-400 hover:to-cyan-400 rounded-lg"
          >
            <img
              src={`/images/candidateImages/${candidate.candidateImg}.jpg`}
              alt="Your Image"
              style={{ maxHeight: "65px", width: "auto" }}
              loading="lazy"
              className="col-span-4 sm:col-span-2"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-between">
                <p className="pl-4 text-lg font-bold text-purple-900">
                  {candidate.candidateName[language]}
                </p>
                <p className="pr-3 text-2xl font-bold text-indigo-800">
                  {Math.round((candidate.count / numberOfQuestions) * 100)}%
                </p>
              </div>
              <ProgressBar
                score={(candidate.count / numberOfQuestions) * 100}
                // progressColor="purple"
                hideText
                primaryColor="purple"
                secondaryColor="blue"
                className="font-bold text-xl text-purple-500"
              />
            </div>
            <div className="w-[100px] max-h-[65px] content-center">
              <img
                src={`/images/partyLogos/${candidate.candidateParty}.png`}
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsCandidates;
