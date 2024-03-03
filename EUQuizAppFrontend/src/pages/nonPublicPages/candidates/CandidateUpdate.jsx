import { useEffect, useState } from "react";
import { getCandidates } from "../../../services/getCandidates";
import ListOfCandidates from "../../../features/devActions/ListOfCandidates";
import UpdateCandidateForm from "../../../features/devActions/UpdateCandidateForm";

function CandidateUpdate() {
  const [candidates, setCandidates] = useState([]);
  const [candidateId, setCandidateId] = useState(-1);
  const [renderList, setRenderList] = useState(false);

  useEffect(() => {
    async function fetchCandidates() {
      const candidatesArray = await getCandidates();
      setCandidates(candidatesArray);
    }
    fetchCandidates();
  }, [renderList]);

  console.log(candidateId);
  const updateCandidate = candidates.find(
    (candidate) => candidate.candidateId === candidateId,
  );
  const insertMode = candidateId === -1;

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <ListOfCandidates
          candidates={candidates}
          candidateId={candidateId}
          onCandidateId={setCandidateId}
          renderList={renderList}
        />
      </div>
      <UpdateCandidateForm
        candidate={updateCandidate}
        insertMode={insertMode}
        onRenderList={setRenderList}
      />
    </div>
  );
}

export default CandidateUpdate;
