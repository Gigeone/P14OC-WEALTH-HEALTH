import React from "react";
import FormEmployee from "../components/FormEmployee";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const CreateEmployee = () => {
  return (
    <div className="App">
      <header className="title">
        <img className="form-logo" src={logo} alt="Wealth Health's logo" />
        <h3>
          <strong>Wealth Health</strong> <br /> HRnet Application
        </h3>
      </header>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <FormEmployee />
      </div>
    </div>
  );
};

export default CreateEmployee;
