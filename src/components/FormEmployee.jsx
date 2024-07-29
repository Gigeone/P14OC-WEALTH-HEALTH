import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { createEmployee } from "../Redux/slice";
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
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          {...register("last_name", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="date-of-birth">Date of Birth</label>
        <Controller
          control={control}
          name="date_birthday"
          rules={{ required: "Date of birth is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              placeholderText="Select date"
            />
          )}
        />
        {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}

        <label htmlFor="start-date">Start Date</label>
        <Controller
          control={control}
          name="start_date"
          rules={{ required: "Start date is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              placeholderText="Select date"
            />
          )}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            {...register("street", { required: "Street is required" })}
          />
          {errors.street && <p>{errors.street.message}</p>}

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p>{errors.city.message}</p>}

          <label htmlFor="state">State</label>
          <select
            id="state"
            {...register("state", { required: "State is required" })}
          >
            {/* Populate with state options */}
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="NY">New York</option>
          </select>
          {errors.state && <p>{errors.state.message}</p>}

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            id="zip-code"
            {...register("zip_code", { required: "Zip code is required" })}
          />
          {errors.zipCode && <p>{errors.zipCode.message}</p>}
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          {...register("department", { required: "Department is required" })}
        >
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        {errors.department && <p>{errors.department.message}</p>}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormEmployee;
