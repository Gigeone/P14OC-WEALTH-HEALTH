import React from "react";
import { useSelector } from "react-redux";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import GlobalFilter from "./GlobalFilter";
// import "./App.css";

// Function to get the sorting indicator
const getSortingIndicator = (column) => {
  if (!column.isSorted) {
    return "";
  }
  return column.isSortedDesc ? " 🔽" : " 🔼";
};
const TableEmployee = () => {
  const employees = useSelector((state) => state.employee);
  console.log(employees);
  const columns = React.useMemo(
    () => [
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Date of Birth", accessor: "date_birthday" },
      { Header: "Start Date", accessor: "start_date" },
      { Header: "Street", accessor: "street" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip Code", accessor: "zip_code" },
      { Header: "Department", accessor: "department" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable({ columns, data: employees }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()} className="display">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={`headerGroup-${index}`}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  {column.render("Header")}
                  {/* Ajouter un indicateur de tri */}
                  <span>{getSortingIndicator(column)}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableEmployee;
