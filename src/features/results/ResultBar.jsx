import { styled } from "styled-components";

const Bar = styled.div`
  width: ${(props) => props.percentage};
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
  height: 1.75rem;
`;

function ResultBar({ result }) {
  let result2 = result + "%";
  return (
    <div className="outline outline-indigo-600 h-7 w-screen bg-indigo-100">
      {/* <div className={`bg-indigo-600 h-7 w-[35%]`}></div> */}
      <Bar percentage={result2}></Bar>
    </div>
  );
}

export default ResultBar;
