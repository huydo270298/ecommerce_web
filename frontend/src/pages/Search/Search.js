import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products";
import useQuery from "../../hooks/useQuery";

const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useQuery(`/products?search=${value}`);
  console.log(data);
  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.product]);

  return (
    <div>
      <Products data={products} loading={loading} error={error} />
    </div>
  );
};

export default Search;
