function Button({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 via-cyan-500 px-4 py-3 font-bold text-cyan-50 hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600  disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
