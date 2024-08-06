import { Link } from "react-router-dom";
import TableEmployee from "../components/TableEmployee";

const EmployeeList = () => {
  return (
    <div className="containerTable">
      <h1 className="title">Current Employees</h1>

      <TableEmployee />
      <Link className="linkHome" to="/">
        Home
      </Link>
    </div>
  );
};

export default EmployeeList;
