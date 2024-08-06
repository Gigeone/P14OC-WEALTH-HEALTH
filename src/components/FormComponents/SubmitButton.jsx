import PropTypes from "prop-types"; //Proptypes

const SubmitButton = ({ text, type }) => {
  return (
    <button className="submitButton" type={type}>
      {text}
    </button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
