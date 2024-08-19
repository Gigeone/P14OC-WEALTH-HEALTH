import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Controller } from "react-hook-form";
// import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const DatePickerField = ({ label, id, control, errors }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Controller
      control={control}
      name={id}
      rules={{ required: `${label} is required` }}
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={field.onChange}
          placeholderText={`Select ${label}`}
        />
      )}
    />
    {errors[id] && <p className="errorMessage">{errors[id].message}</p>}
  </>
);

export default DatePickerField;

DatePickerField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
};
