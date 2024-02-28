import { useForm } from "react-hook-form";
import { insertCandidate } from "../../../services/insertCandidate";

function CandidateInsertPage() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => insertCandidate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto  max-w-2xl gap-2"
    >
      <h1 className="text-2xl text-slate-900 text-center pt-5 font-bold">
        Add Candidate Form
      </h1>
      {/* Candidate Name */}
      <label className="text-lg font-bold text-slate-900">Candidate Name</label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        {...register("candidateName.el", {
          required: "This is required",
        })}
        placeholder="Candidate Name in Greek"
      />
      <input
        className="bg-slate-600 text-white py-2 px-2"
        {...register("candidateName.en", {
          required: "This is required",
        })}
        placeholder="Candidate Name in English"
      />

      {/* Canidate Party */}
      <select
        className="bg-slate-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5  md:w-[15rem] mx-auto"
        defaultValue="party"
        {...register("candidateParty", {
          required: true,
        })}
      >
        <option value="party" disabled>
          Party
        </option>
        <option value="disy">ΔΗΣΥ</option>
        <option value="akel">ΑΚΕΛ</option>
        <option value="diko">ΔΗΚΟ</option>
        <option value="elam">ΕΛΑΜ</option>
        <option value="edek">ΕΔΕΚ</option>
        <option value="depa">ΔΗΠΑ</option>
        <option value="greens">Οικολόγοι</option>
        <option value="volt">VOLT</option>
      </select>

      {/* Candidate Ballot Number */}
      <label className="text-lg font-bold text-slate-900">
        Candidate Ballot Number
      </label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        type="number"
        {...register("candidateBallotNumber")}
        placeholder="Candidate Ballot Number"
      />

      {/* Candidate Mobile Number */}
      <label className="text-lg font-bold text-slate-900">
        Candidate Mobile Number
      </label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        type="number"
        {...register("candidateMobileNumber")}
        placeholder="Candidate Mobile Number"
      />

      {/* Candidate Image */}
      <label className="text-lg font-bold text-slate-900">
        Candidate Image
      </label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        {...register("candidateImg")}
        placeholder="Candidate Image"
      />

      {/* Candidate Email */}
      <label className="text-lg font-bold text-slate-900">
        Candidate Email
      </label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        {...register("candidateEmail")}
        placeholder="Candidate Email"
      />

      {/* Candidate Email */}
      <label className="text-lg font-bold text-slate-900">
        Candidate WebPage
      </label>
      <input
        className="bg-slate-600 text-white py-2 px-2"
        {...register("candidateWebPage")}
        placeholder="Candidate WebPage"
      />
      <input
        className="bg-slate-600 text-white py-3 px-3 w-[12rem] font-bold uppercase rounded-xl mx-auto hover:bg-slate-500"
        type="submit"
        value="Add candidate"
      />
    </form>
  );
}

export default CandidateInsertPage;
