import { Link } from "react-router-dom";
import Home from "../../images/home.svg?react";

function ListOfCandidates({ candidates, candidateId, onCandidateId }) {
  const sortedCandidates = candidates.sort((a, b) =>
    a.candidateParty.localeCompare(b.candidateParty),
  );
  return (
    <ul className="no-scrollbar max-h-screen h-full flex flex-col gap-4 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5">
      <div className="flex justify-between px-2 ">
        <Link
          to="/"
          className=" bg-indigo-700 flex px-2 py-3 rounded-lg text-lg font-bold uppercase text-white my-auto"
        >
          <h1 className="hidden md:block pr-1">Home</h1>
          <Home />
        </Link>
        <h1 className="text-2xl text-indigo-900 text-center py-3 font-bold font-serif">
          List of Candidates
        </h1>
        <h1 className="px-4 w-[70px]"></h1>
      </div>
      <button
        className="uppercase font-bold gap-4 p-4 bg-indigo-700 text-white hover:bg-indigo-500 rounded-xl w-1/2 text-center mx-auto"
        onClick={() => {
          onCandidateId(-1);
        }}
      >
        Insert a new Candidate
      </button>
      {sortedCandidates.map((candidate) => (
        <button
          key={candidate.candidateId}
          className={`grid grid-cols-5 gap-4 justify-venly p-4 bg-indigo-700 text-white hover:bg-indigo-500 rounded-xl font-semibold hover:from-emerald-500 hover:via-sky-600 hover:to-indigo-500 ${
            candidate.candidateId === candidateId
              ? "bg-gradient-to-r from-indigo-500 via-teal-600 to-indigo-500"
              : ""
          }`}
          onClick={() => {
            onCandidateId(candidate.candidateId);
          }}
        >
          <p>{candidate.candidateName.el}</p>
          <p>{candidate.candidateName.en}</p>
          <p>{candidate.candidateParty}</p>
          <p>{candidate.candidateMobileNumber}</p>
          <p>{candidate.candidateEmail}</p>
        </button>
      ))}
    </ul>
  );
}

export default ListOfCandidates;
