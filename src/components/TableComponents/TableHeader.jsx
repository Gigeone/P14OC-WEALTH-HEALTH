import React from "react";
import GlobalFilter from "./GlobalFilter";
import PageSizeSelector from "./PageSizeSelector";

const TableHeader = ({
  headerGroups,
  setGlobalFilter,
  globalFilter,
  setPageSize,
  pageSize,
}) => (
  <div className="TableHeader">
    <GlobalFilter
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
    <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
  </div>
);

export default TableHeader;
