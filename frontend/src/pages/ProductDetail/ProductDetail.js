import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductInfo";
import useQuery from "../../hooks/useQuery";

const ProductDetail = () => {
  let { id } = useParams();
  const ref = useRef(0);
  const { data, loading, error } = useQuery(`/products/${id}`);

  return (
    <div>
      <h2>render: {ref.current++}</h2>
      {data && <ProductInfo data={data} />}
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ProductDetail;
