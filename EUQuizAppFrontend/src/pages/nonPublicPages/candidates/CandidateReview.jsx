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
import { Trans, useTranslation } from "react-i18next";

function CandidateReview() {
  const candidateInfo = useSelector(getCandidateInfo);
  const answerIdPerQuestion = useSelector(getAnswerIdPerQuestion);
  const candidateCustomAnswerPerQuestion = useSelector(
    getCandidateCustomAnswerPerQuestion,
  );
  const navigate = useNavigate();
  const [candidateConsent, setCandidateConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();
  let language = i18n.language;

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
        <Trans i18nKey="candidateReview.title" />
      </h1>

      <p className="font-mono text-2xl text-indigo-900 text-center md:pt-2 md:py-3 font-extrabold">
        {candidateInfo.candidateName[language]}
      </p>
      <p className="mx-auto text-indigo-900 font-semibold">
        <Trans i18nKey="candidateReview.reviewText.1" />
      </p>
      <p className="text-indigo-900">
        <Trans i18nKey="candidateReview.reviewText.2" />
      </p>
      <p className="text-indigo-900 font-semibold">
        <Trans i18nKey="candidateReview.reviewText.3" />
      </p>
      <p className="text-indigo-900 italic pb-2">
        <Trans i18nKey="candidateReview.reviewText.4" />
      </p>
      <label className="flex gap-3 mx-auto py-4 outline outline-1 px-2 bg-indigo-600 text-white font-semibold hover:bg-gradient-to-r hover:from-indigo-600 hover:to-sky-600">
        <input
          type="checkbox"
          className="w-5 content-start"
          onChange={() =>
            setCandidateConsent((candidateConsent) => !candidateConsent)
          }
        />
        <Trans i18nKey="candidateReview.consentText" />
      </label>
      <div className="flex justify-between py-12">
        <Button onClick={() => navigate("/questions")}>
          <Trans i18nKey="candidateReview.buttons.editAnswers" />
        </Button>
        <Button onClick={handleSubmit}>
          <Trans i18nKey="candidateReview.buttons.finalSubmit" />
        </Button>
      </div>
    </div>
  );
}

export default CandidateReview;
