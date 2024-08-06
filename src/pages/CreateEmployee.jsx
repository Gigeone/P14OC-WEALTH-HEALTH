import { Link } from "react-router-dom";
import FormEmployee from "../components/FormEmployee";

const CreateEmployee = () => {
  return (
    <div className="App">
      <header className="title">
        {/* <img className="form-logo" src={logo} alt="Wealth Health's logo" /> */}
        <h1>HRnet Application</h1>
      </header>
      <div className="container">
        <Link className="linkTable" to="/employee-list">
          View Current Employees
        </Link>
        <h2>Create Employee</h2>
        <FormEmployee />
      </div>
    </div>
  );
};

export default CreateEmployee;
