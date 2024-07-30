import PaginationButton from "./PaginationButon";

const Pagination = ({
  pageIndex,
  pageOptions,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  page,
}) => (
  <section className="pagination">
    <span>
      Showing {""}
      <strong>
        {pageIndex + 1} to {pageOptions.length} of {page.length}
      </strong>
      {""} entries
    </span>
    <div className="pagination_button">
      <PaginationButton
        onClick={previousPage}
        disabled={!canPreviousPage}
        label="Previous"
      />
      <PaginationButton
        onClick={nextPage}
        disabled={!canNextPage}
        label="Next"
      />
    </div>
    {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      Previous
    </button>
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      Next
    </button> */}
  </section>
);

export default Pagination;
