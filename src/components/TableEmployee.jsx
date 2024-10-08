import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Pagination from "./TableComponents/Pagination";
import TableHeader from "./TableComponents/TableHeader";

// Function to get the sorting indicator
const getSortingIndicator = (column) => {
  if (!column.isSorted) {
    return "";
  }
  return column.isSortedDesc ? " 🔽" : " 🔼";
};

// Function to convert date strings to Date objects
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}`);
};
const TableEmployee = () => {
  const employees = useSelector((state) => state.employee);
  console.log(employees);
  const data = useMemo(() => employees, [employees]);
  const columns = React.useMemo(
    () => [
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      {
        Header: "Date of Birth",
        accessor: "date_birthday",
        sortType: (a, b) =>
          parseDate(a.original.date_birthday) -
          parseDate(b.original.date_birthday),
      },
      {
        Header: "Start Date",
        accessor: "start_date",
        sortType: (a, b) =>
          parseDate(a.original.start_date) - parseDate(b.original.start_date),
      },
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
    page, // Use 'page' from usePagination hook
    prepareRow,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    pageOptions,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageSize, pageIndex } = state;

  return (
    <>
      <TableHeader
        headerGroups={headerGroups}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
      <div style={{ overflowX: "auto" }}>
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
                    style={{ whiteSpace: "nowrap" }}
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
            {page.map((row) => {
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
      </div>

      <Pagination
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        page={page}
      />
    </>
  );
};

export default TableEmployee;
