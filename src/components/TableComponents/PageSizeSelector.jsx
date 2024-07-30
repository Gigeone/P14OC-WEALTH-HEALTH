const PageSizeSelector = ({ pageSize, setPageSize }) => {
  return (
    <div>
      <label htmlFor="numberList">Show </label>
      <select
        id="numberList"
        name="numberList"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span> entries</span>
    </div>
  );
};

export default PageSizeSelector;
