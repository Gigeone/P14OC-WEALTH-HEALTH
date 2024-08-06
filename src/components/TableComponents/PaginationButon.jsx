import Proptypes from "prop-types";

const PaginationButton = ({ onClick, disabled, label }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default PaginationButton;

PaginationButton.propTypes = {
  onClick: Proptypes.func.isRequired,
  disabled: Proptypes.bool.isRequired,
  label: Proptypes.string.isRequired,
};
