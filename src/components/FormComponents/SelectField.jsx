import PropTypes from "prop-types";

const SelectField = ({ label, id, register, options, errors }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...register(id, { required: `${label} is required` })}>
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors[id] && <p className="errorMessage">{errors[id].message}</p>}
  </>
);

export default SelectField;

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  errors: PropTypes.object,
};
