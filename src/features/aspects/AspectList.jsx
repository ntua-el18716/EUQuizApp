import { useSelector } from 'react-redux';
import { getAspects } from '../questions/questionsSlice';
import AspectItem from './AspectItem';

function AspectList() {
  const aspectsArray = useSelector(getAspects);
  return (
    <div className="grid grid-cols-1 items-center gap-3 py-5">
      {/* <div className=" items-center mx-auto max-w-2xl"> */}
      {aspectsArray.map((aspect) => (
        <ul
          className="flex justify-between bg-cyan-700 px-4 text-indigo-50"
          key={aspect.id}
        >
          <p
            className="col-start-1 bg-cyan-700 px-4 py-2 font-semibold text-indigo-50"
            key={aspect.id}
          >
            {aspect.value}
          </p>
          <div className="col-start-2 py-2" key={aspect.id}>
            <AspectItem aspect={aspect} key={aspect.id} />
          </div>
        </ul>
      ))}
    </div>
  );
}

export default AspectList;
