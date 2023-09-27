// import ResultsPresentation from './ResultsPresentation';
// import ResultNavItem from './ResultNavItem';
function ResultsNavBar({ active, onActive }) {
  return (
    <ul className="w-3xl flex h-12 flex-row items-center justify-evenly bg-sky-500 px-2  font-semibold text-white">
      {/* {active === 'results' && ( */}
      <li className={`${active === 'results' ? 'bg-indigo-600' : ''} p-3`}>
        <button onClick={() => onActive('results')}>RESULTS</button>
      </li>

      <li
        className={`${
          active === 'basic-results' ? 'bg-indigo-600' : ''
        } px-3 md:py-3`}
      >
        <button onClick={() => onActive('basic-results')}>BASIC RESULTS</button>
      </li>
      <li
        className={`hidden md:block ${
          active === 'info' ? 'bg-indigo-600' : ''
        } p-3`}
      >
        <button onClick={() => onActive('info')}>INFORMATION</button>
      </li>
      <li className={`${active ? 'bg-slate-600' : ''} p-3`}>
        <button>SHARE</button>
      </li>
    </ul>
  );
}

export default ResultsNavBar;
