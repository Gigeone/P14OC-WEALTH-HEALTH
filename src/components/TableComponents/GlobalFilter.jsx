import Proptypes from "prop-types";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search all columns"
        style={{ fontSize: "1.1rem", margin: "10px" }}
      />
    </span>
  );
};

export default GlobalFilter;

GlobalFilter.propTypes = {
  globalFilter: Proptypes.string,
  setGlobalFilter: Proptypes.func,
};
