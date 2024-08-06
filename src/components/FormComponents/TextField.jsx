import PropTypes from "prop-types";

const TextField = ({ label, id, register, errors }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      {...register(id, { required: `${label} is required` })}
    />
    {errors[id] && <p className="errorMessage">{errors[id].message}</p>}
  </>
);

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
