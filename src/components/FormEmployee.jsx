import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Modal } from "react-modal-component-matthieugh";
import { useDispatch } from "react-redux";
import { departments } from "../Datas/departments";
import { states } from "../Datas/states";
import { createEmployee } from "../Redux/slice";
import DatePickerField from "./FormComponents/DatePickerField";
import SelectField from "./FormComponents/SelectField";
import SubmitButton from "./FormComponents/SubmitButton";
import TextField from "./FormComponents/TextField";

const FormEmployee = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.date_birthday = data.date_birthday.toLocaleDateString("fr-FR");
    data.start_date = data.start_date.toLocaleDateString("fr-FR");
    dispatch(createEmployee(data));
    setIsOpen(true);
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

        <SubmitButton
          // onClick={() => setIsOpen(true)}
          text="Save"
          type="submit"
        />
        {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
      </form>
      <Modal
        className="customModal"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* <h1>Hello from Modal</h1> */}
        <div className="customModal__header">
          <h2>Success</h2>
        </div>
        <div className="customModal__body">
          <p>Employee Created!</p>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployee;
