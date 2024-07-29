import React from "react";

const TextField = ({ label, id, register, required, errors }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      {...register(id, { required: `${label} is required` })}
    />
    {errors[id] && <p>{errors[id].message}</p>}
  </>
);

export default TextField;
