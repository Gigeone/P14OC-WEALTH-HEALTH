const SelectField = ({ label, id, register, required, options, errors }) => (
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
    {errors[id] && <p>{errors[id].message}</p>}
  </>
);

export default SelectField;
