function Button({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-600 px-4 py-3 text-cyan-50 font-bold hover:bg-indigo-600"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
