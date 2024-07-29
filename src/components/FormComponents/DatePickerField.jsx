import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ label, id, control, required, errors }) => (
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
    {errors[id] && <p>{errors[id].message}</p>}
  </>
);

export default DatePickerField;
