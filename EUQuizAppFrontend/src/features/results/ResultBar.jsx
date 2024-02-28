import { styled } from "styled-components";

const Bar = styled.div`
  width: ${(props) => props.percentage};
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
  height: 1.75rem;
`;

function ResultBar({ result }) {
  let result2 = Math.round(result) + "%";
  return (
    // <div className="h-7 w-[450px] bg-indigo-100 outline outline-indigo-600">
    <div className="h-7 w-[450px] bg-indigo-100 outline outline-2 outline-indigo-600">
      <Bar percentage={result2}></Bar>
    </div>
  );
}

export default ResultBar;
