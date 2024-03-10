import { useForm } from "react-hook-form";
import { updateCandidate } from "../../services/updateCandidate";
import { insertCandidate } from "../../services/insertCandidate";
import { useState } from "react";
import Loader from "react-spinner-loader";

const defaultInsertValue = {
  candidateName: {
    el: "",
    en: "",
  },
  candidateParty: "",
  candidateBallotNumber: 0,
  candidateMobileNumber: "",
  candidateImg: "",
  candidateEmail: "",
  candidateWebPage: "",
};

function UpdateCandidateForm({ candidate, insertMode, onRenderList }) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    values: insertMode ? defaultInsertValue : candidate,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      insertMode ? await insertCandidate(data) : await updateCandidate(data);
      onRenderList((t) => !t);
      reset();
    } catch (error) {
      console.error("Error updating/inserting candidate:", error);
    }
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <Loader show={true} type="body" stack="vertical" message="Loading" />
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto  max-w-2xl gap-2"
    >
      <h1 className="text-2xl font-serif text-indigo-900 text-center pt-5 font-bold">
        {insertMode ? "Add Candidate Form" : "Update Candidate Form"}
      </h1>
      {/* Candidate Name */}
      <label className="text-lg font-bold text-indigo-900">
        Candidate Name
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("candidateName.el")}
        placeholder="Candidate Name in Greek"
      />
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("candidateName.en", {
          required: "This is required",
        })}
        placeholder="Candidate Name in English"
      />

      {/* Canidate Party */}
      <select
        className="bg-indigo-600 text-lg font-semibold rounded-lg text-white px-2 py-4 w-[13rem] md:px-4 md:py-5  md:w-[15rem] mx-auto"
        defaultValue=""
        {...register("candidateParty", {
          required: true,
        })}
      >
        <option value="" disabled>
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
      <label className="text-lg font-bold text-indigo-900">
        Candidate Ballot Number
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        type="number"
        {...register("candidateBallotNumber", { valueAsNumber: true })}
        placeholder="Candidate Ballot Number"
      />

      {/* Candidate Mobile Number */}
      <label className="text-lg font-bold text-indigo-900">
        Candidate Mobile Number
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        type="number"
        {...register("candidateMobileNumber")}
        placeholder="Candidate Mobile Number"
      />

      {/* Candidate Image */}
      <label className="text-lg font-bold text-indigo-900">
        Candidate Image
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("candidateImg")}
        placeholder="Candidate Image"
      />

      {/* Candidate Email */}
      <label className="text-lg font-bold text-indigo-900">
        Candidate Email
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("candidateEmail")}
        placeholder="Candidate Email"
      />

      {/* Candidate Email */}
      <label className="text-lg font-bold text-indigo-900">
        Candidate WebPage
      </label>
      <input
        className="bg-indigo-700 text-white py-2 px-2"
        {...register("candidateWebPage")}
        placeholder="Candidate WebPage"
      />
      <input
        className="bg-indigo-600 text-white py-3 px-3 w-[12rem] font-bold uppercase rounded-xl mx-auto hover:bg-indigo-500"
        type="submit"
        value={insertMode ? "Insert candidate" : "Update candidate"}
      />
    </form>
  );
}

export default UpdateCandidateForm;
