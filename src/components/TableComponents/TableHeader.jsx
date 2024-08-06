import Proptypes from "prop-types";
import GlobalFilter from "./GlobalFilter";
import PageSizeSelector from "./PageSizeSelector";

const TableHeader = ({
  setGlobalFilter,
  globalFilter,
  setPageSize,
  pageSize,
}) => (
  <div className="tableHeader">
    <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
    <GlobalFilter
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
  </div>
);

export default TableHeader;

TableHeader.propTypes = {
  setGlobalFilter: Proptypes.func.isRequired,
  globalFilter: Proptypes.string,
  setPageSize: Proptypes.func.isRequired,
  pageSize: Proptypes.number.isRequired,
};
