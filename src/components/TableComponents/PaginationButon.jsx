const PaginationButton = ({ onClick, disabled, label }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default PaginationButton;
