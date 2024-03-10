import { useSelector } from "react-redux";
import {
  getAnswerIdPerQuestion,
  getCandidateCustomAnswerPerQuestion,
  getCandidateInfo,
} from "../../../features/questions/questionsSlice";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import { insertCandidateAnswers } from "../../../services/insertCandidateAnswers";
import { useState } from "react";
import Loader from "react-spinner-loader";

function CandidateReview() {
  const candidateInfo = useSelector(getCandidateInfo);
  const answerIdPerQuestion = useSelector(getAnswerIdPerQuestion);
  const candidateCustomAnswerPerQuestion = useSelector(
    getCandidateCustomAnswerPerQuestion,
  );
  const navigate = useNavigate();
  const [candidateConsent, setCandidateConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    const {
      candidateId,
      candidateCode,
      candidateEmail,
      candidateMobileNumber,
      candidateName,
    } = {
      ...candidateInfo,
    };
    const candidateInfoObject = {
      candidateId,
      candidateConsent,
      candidateCode,
      candidateCustomAnswers: candidateCustomAnswerPerQuestion,
    };

    if (candidateEmail !== "") {
      candidateInfoObject.candidateEmail = candidateEmail;
    }

    if (candidateMobileNumber !== "") {
      candidateInfoObject.candidateMobileNumber = candidateMobileNumber;
    }

    let candidateAnswersData = {
      candidateInfo: candidateInfoObject,
      answerIdPerQuestion,
    };
    try {
      setIsLoading(true);

      await insertCandidateAnswers(candidateAnswersData);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setIsLoading(false);
    }
    navigate("/candidateThankYou");
  };
  if (isLoading)
    return (
      <Loader show={true} type="body" stack="vertical" message="Loading" />
    );
  return (
    <div className="flex flex-col gap-2 mx-auto w-80 bg-cyan-100 pt-8 md:w-screen md:max-w-[45rem]">
      <h1 className="font-mono text-3xl text-indigo-900 text-center md:pt-5 md:py-1 font-extrabold">
        Review Page
      </h1>

      <p className="font-mono text-2xl text-indigo-900 text-center md:pt-2 md:py-3 font-extrabold">
        {candidateInfo.candidateName.el}
      </p>
      <p className="mx-auto text-indigo-900 font-semibold">
        Thank you for taking part in CYvoteEU!
      </p>
      <p className="text-indigo-900">
        The goal of the Mαζί-Birlikte initiative is to enhance the participation
        of Cypriot youth in the EU Elections, enabling them to familiarize
        themselves with the candidates and, of course, assisting them in making
        informed choices based on their own beliefs and priorities.
      </p>
      <p className="text-indigo-900 font-semibold">
        In this context, we kindly request candidates to grant us their consent
        for using the answers provided in the quiz. These answers will be
        utilized on our social media accounts to help individuals with similar
        opinions understand which candidates align with their beliefs
      </p>
      <p className="text-indigo-900 italic pb-2">
        Personal Info such as email/phone number WILL NOT be shared
      </p>
      <label className="flex gap-3 mx-auto py-4 outline outline-1 px-2 bg-indigo-600 text-white font-semibold hover:bg-gradient-to-r hover:from-indigo-600 hover:to-sky-600">
        <input
          type="checkbox"
          className="w-5 content-start"
          onChange={() =>
            setCandidateConsent((candidateConsent) => !candidateConsent)
          }
        />
        I consent to give you permission to share my answers
      </label>
      <div className="flex justify-between py-12">
        <Button onClick={() => navigate("/questions")}>Edit my Answers</Button>
        <Button onClick={handleSubmit}>Final Submit</Button>
      </div>
    </div>
  );
}

export default CandidateReview;
