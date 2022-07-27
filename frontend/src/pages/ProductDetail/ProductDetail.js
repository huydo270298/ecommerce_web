import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductInfo";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  return <div>{product && <ProductInfo data={product} />}</div>;
};

export default ProductDetail;
