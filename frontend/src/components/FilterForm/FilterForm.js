import React, { useState } from "react";

const FilterForm = () => {
  const [filter, setFilter] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="filter_form" title="Enter to filter">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="0"
            value={filter}
            required
          />
          <select onChange={e => setFilter(e.target.value)}>
            <option value='lt' title='lesser than'>LT</option>
            <option value='lte' title='lesser than or equal'>LTE</option>
            <option value='gt' title='greater than'>GT</option>
            <option value='gte' title='greater than or equal'>GTE</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FilterForm;
