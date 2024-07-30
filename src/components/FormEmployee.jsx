import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { departments } from "../Datas/departments";
import { states } from "../Datas/states";
import { createEmployee } from "../Redux/slice";
import DatePickerField from "./FormComponents/DatePickerField";
import SelectField from "./FormComponents/SelectField";
import SubmitButton from "./FormComponents/SubmitButton";
import TextField from "./FormComponents/TextField";
// import { useState } from "react";

const FormEmployee = () => {
  const dispatch = useDispatch();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState(null);
  // const [startDate, setStartDate] = useState(null);
  // const [street, setStreet] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [department, setDepartment] = useState("Sales");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date_birthday = data.date_birthday.toISOString().split("T")[0];
    data.start_date = data.start_date.toISOString().split("T")[0];
    dispatch(createEmployee(data));
  };

  return (
    <div>
      <form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="First Name"
          id="first_name"
          register={register}
          required
          errors={errors}
        />
        <TextField
          label="Last Name"
          id="last_name"
          register={register}
          required
          errors={errors}
        />
        <DatePickerField
          label="Date of Birth"
          id="date_birthday"
          control={control}
          required
          errors={errors}
        />
        <DatePickerField
          label="Start Date"
          id="start_date"
          control={control}
          required
          errors={errors}
        />

        <fieldset className="address">
          <legend>Address</legend>
          <TextField
            label="Street"
            id="street"
            register={register}
            required
            errors={errors}
          />
          <TextField
            label="City"
            id="city"
            register={register}
            required
            errors={errors}
          />
          <SelectField
            label="State"
            id="state"
            register={register}
            required
            options={states.map((state) => ({
              value: state.abbreviation,
              label: state.name,
            }))}
            errors={errors}
          />
          <TextField
            label="Zip Code"
            id="zip_code"
            register={register}
            required
            errors={errors}
          />
        </fieldset>

        <SelectField
          label="Department"
          id="department"
          register={register}
          required
          options={departments.map((department) => ({
            value: department.name,
            label: department.name,
          }))}
          errors={errors}
        />

        <SubmitButton text="Save" type="submit" />
      </form>
    </div>
  );
};

export default FormEmployee;
