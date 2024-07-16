import React from "react";
import TableEmployee from "../components/TableEmployee";
import logo from "../assets/logo.png";

const EmployeeList = () => {
  return (
    <div className="container-table">
      <header className="flex justify-center items-center">
        <img className="table_logo" src={logo} alt="Wealth Health's logo" />
        <div>
          <h1>Wealth Heath</h1>
          <h2>List of all your current Employees</h2>
        </div>
      </header>
      <TableEmployee />
    </div>
  );
};

export default EmployeeList;
