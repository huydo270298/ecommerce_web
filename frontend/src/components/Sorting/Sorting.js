import React from "react";
import { useMyContext } from "../../context/store";
import useCustomRouter from "../../hooks/useCustomRouter";

const Sorting = React.memo(() => {
  const { page, sort } = useMyContext();
  const { pushQuery } = useCustomRouter();

  const handleSort = (e) => {
    const { value } = e.target;
    pushQuery({ page, sort: value });
  };
  return (
    <div className="sorting">
      <select value={sort} onChange={handleSort}>
        <option value="-createdAt">Newest</option>
        <option value="createdAt">Oldest</option>
        <option value="-price">Price: Hight-Low</option>
        <option value="price">Price: Low-Hight</option>
      </select>
      <h2>&#8678;Sort</h2>
    </div>
  );
});

export default Sorting;
