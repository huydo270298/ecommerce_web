import React, { useRef } from "react";
import usePagination from "../../hooks/usePagination";

const Pagination = React.memo(({ totalPages, page }) => {
  const ref = useRef(0);
  const { firstArr, lastArr, isActive, nextPage, prevPage, jumbPage } =
    usePagination(totalPages, page);

  return (
    <div className="pagination">
      <h2>render: {ref.current++}</h2>
      {page !== 1 && <button onClick={prevPage}>&laquo;</button>}
      {firstArr.map((num) => (
        <button
          key={num}
          className={`${isActive(num)}`}
          onClick={() => jumbPage(num)}
        >
          {num}
        </button>
      ))}
      {lastArr.length > 0 && <button>...</button>}
      {lastArr.map((num) => (
        <button
          key={num}
          className={`${isActive(num)}`}
          onClick={() => jumbPage(num)}
        >
          {num}
        </button>
      ))}
      {page < totalPages && <button onClick={nextPage}>&raquo;</button>}
    </div>
  );
});

export default Pagination;
