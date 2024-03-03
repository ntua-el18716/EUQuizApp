import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCandidates } from "../../../services/getCandidates";
import { getParties } from "../../../services/getParties";

function CandidateHomePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [candidates, setCandidates] = useState([]);
  const [parties, setParties] = useState([]);

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
  }, []);

  const party = watch("party");

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mx-auto w-80 bg-cyan-100 pt-8 md:w-screen md:max-w-[45rem]"
    >
      <h1 className="font-mono text-3xl text-indigo-900 text-center md:pt-5 md:py-7 font-extrabold">
        Candidate Form for EUQuizCY
      </h1>
      <p className="text-indigo-900 py-1 text-sm/[25px] md:text-base md:p-4 font-semibold">
        Please choose your party and then choose your name:
      </p>

      {/* Party */}
      <select
        name="party"
        className="bg-indigo-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5  md:w-[15rem] mx-auto"
        defaultValue="party"
        {...register("party", {
          required: true,
        })}
      >
        <option value="party" disabled>
          Party
        </option>
        {parties.map((party) => (
          <option key={party.partyAbbreviation} value={party.partyAbbreviation}>
            {party.partyAbbrGr}
          </option>
        ))}
      </select>

      {/* Candidate */}
      <select
        className="bg-indigo-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5  md:w-[15rem] mx-auto"
        defaultValue="candidate"
        {...register("candidate.candidate")}
      >
        <option value="candidate" disabled>
          Candidate
        </option>
        {candidates
          .filter((candidate) => candidate.candidateParty === party)
          .map((candidate) => (
            <option key={candidate.candidateId} value={candidate.candidateId}>
              {candidate.candidateName.el}
            </option>
          ))}
      </select>
      <p className="text-indigo-900 py-1 text-sm/[25px] md:text-base md:p-4 font-semibold">
        Providing your email and/or mobile number is optional but it will help
        us to stay in touch with you
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
          Phone Number:
        </label>
        <input
          className="bg-indigo-600 font-mono font-semibold text-sm md:text-lg rounded-lg text-white px-4 py-2 w-[15rem]  md:w-[25rem] mx-auto truncate"
          {...register("candidate.candidatePhoneNumber")}
          placeholder="Enter your Phone Number"
        />
      </div>
      <div className="pt-4 mx-auto">
        {/* <Button>Start Quiz</Button> */}
        <button className="w-40 text-lg px-4 py-3 font-bold rounded-md text-cyan-50 bg-gradient-to-r from-sky-600 to-indigo-600  disabled:cursor-not-allowed">
          Start Quiz
        </button>
      </div>
    </form>
  );
}

export default CandidateHomePage;
