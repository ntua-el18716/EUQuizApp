import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { getCandidates } from "../../../services/getCandidates";
import { getParties } from "../../../services/getParties";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchQuizData,
  setCandidateInfo,
} from "../../../features/questions/questionsSlice";
import { Trans, useTranslation } from "react-i18next";

function CandidateHomePage() {
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();
  const [candidates, setCandidates] = useState([]);
  const [parties, setParties] = useState([]);
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCandidates() {
      const candidatesArray = await getCandidates();
      setCandidates(candidatesArray);
    }
    async function fetchParties() {
      const partiesArray = await getParties();
      setParties(partiesArray);
    }
    fetchCandidates();
    fetchParties();
    dispatch(fetchQuizData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const party = watch("party");
  // console.log(candidates);
  let language = i18n.language;
  if (language === "tr") language === "en";

  const navigate = useNavigate();
  //you need to find the name of the candidate
  const onSubmit = (data) => {
    // console.log(data);
    const candidate = candidates.find(
      (candidate) =>
        candidate.candidateId === Number(data.candidate.candidateId),
    );
    data.candidate = {
      ...data.candidate,
      candidateId: Number(data.candidate.candidateId),
      candidateName: candidate.candidateName,
      candidateImg: candidate.candidateImg,
    };
    dispatch(setCandidateInfo(data.candidate));
    navigate("/questions");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mx-auto w-80 bg-cyan-100 pt-8 md:w-screen md:max-w-[45rem]"
    >
      <h1 className="font-mono text-3xl text-indigo-900 text-center md:pt-5 md:py-7 font-extrabold">
        <Trans i18nKey="candidateHome.title" />
      </h1>
      <p className="text-indigo-900 py-1 text-sm/[25px] md:text-base md:p-4 font-semibold">
        <Trans i18nKey="candidateHome.selectInfo" />
      </p>

      {/* Party */}
      <Controller
        name="party"
        control={control}
        defaultValue=""
        rules={{ required: "Please select a party" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="bg-indigo-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5 md:w-[15rem] mx-auto"
            >
              <option value="" disabled>
                Party
              </option>
              {parties.map((party) => (
                <option key={party.partyAbbrGr} value={party.partyAbbreviation}>
                  {language === "el"
                    ? party.partyAbbrGr
                    : party.partyAbbreviation}
                </option>
              ))}
            </select>
            {errors.party && (
              <p className="text-red-500">{errors.party.message}</p>
            )}
          </>
        )}
      />

      {/* Candidate */}
      <Controller
        name="candidate.candidateId"
        control={control}
        defaultValue=""
        rules={{ required: "Please select a candidate" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="bg-indigo-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5 md:w-[15rem] mx-auto"
            >
              <option value="" disabled>
                Candidate
              </option>
              {candidates
                .filter((candidate) => candidate.candidateParty === party)
                .map((candidate) => (
                  <option
                    key={candidate.candidateId}
                    value={candidate.candidateId}
                  >
                    {candidate.candidateName[language]}
                  </option>
                ))}
            </select>
            {errors.candidate?.id && (
              <p className="text-red-500">
                {errors.candidate.candidateId.message}
              </p>
            )}
          </>
        )}
      />

      <input
        className="bg-indigo-600 font-mono font-semibold text-sm md:text-lg rounded-lg text-white px-4 py-2 w-[7rem]  md:w-[12rem] mx-auto truncate text-center"
        {...register("candidate.candidateCode")}
        placeholder="Enter your Code"
      />
      <p className="text-indigo-900 py-1 text-sm/[25px] md:text-base md:p-4 font-semibold">
        <Trans i18nKey="candidateHome.selectContactInfo" />
      </p>
      {/* Email */}
      <div className="flex flex-col md:flex-row justify-between">
        <label className="font-bold text-indigo-900 text-xl px-4 py-1  w-[15rem] ">
          Email:
        </label>
        <input
          className="bg-indigo-600 font-mono font-semibold text-sm md:text-lg rounded-lg text-white px-4 py-2 w-[15rem]  md:w-[25rem] mx-auto"
          {...register("candidate.candidateEmail")}
          placeholder="Enter your email"
        />
      </div>
      {/* Phone Number */}
      <div className="flex flex-col md:flex-row justify-between">
        <label className="font-bold text-indigo-900 text-xl px-4 py-1  w-[15rem]">
          <Trans i18nKey="candidateHome.phoneLabel" />
        </label>
        <input
          className="bg-indigo-600 font-mono font-semibold text-sm md:text-lg rounded-lg text-white px-4 py-2 w-[15rem]  md:w-[25rem] mx-auto truncate"
          {...register("candidate.candidateMobileNumber")}
          placeholder="Enter your Phone Number"
        />
      </div>
      <div className="pt-4 mx-auto flex gap-2">
        {/* <Button>Start Quiz</Button> */}
        <input
          type="submit"
          className="hover:bg-em rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-7 py-3 text-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-sky-600 font-bold text-white hover:transition-opacity"
          //disabled={quizDataStatus != "idle"} // Disable the link if loading
          value="START THE QUIZ"
        />
        {/* <Link
          className="hover:bg-em rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-7 py-3 text-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-sky-600 font-bold text-white hover:transition-opacity"
          //disabled={quizDataStatus != "idle"} // Disable the link if loading
          to={"/questions"}
        >
          START THE QUIZ
        </Link> */}
      </div>
    </form>
  );
}

export default CandidateHomePage;
