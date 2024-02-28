function ImportanceButton({ onClick, active, children }) {
  return (
    <button
      onClick={onClick}
      className={`h-7 w-7 justify-center rounded-md bg-cyan-200 text-center text-lg font-semibold text-cyan-950 outline outline-1  outline-cyan-800 hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 hover:text-white ${
        active ? 'bg-indigo-600 font-bold text-white' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default ImportanceButton;
