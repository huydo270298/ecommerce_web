import React, { useState } from "react";
import Modal from "../Modal";
import FilterForm from "../FilterForm/FilterForm";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <header>
      <nav>
        <p>Home</p>
        <p>Create Product</p>
        <p onClick={() => setOpenSearch(true)}>Search</p>
        <p onClick={() => setOpenFilter(true)}>Filter</p>
      </nav>
      {openSearch && (
        <Modal titleTxt="Search" setOpen={setOpenSearch}>
          <SearchForm />
        </Modal>
      )}

      {openFilter && (
        <Modal titleTxt="Filter" setOpen={setOpenFilter}>
          <FilterForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
