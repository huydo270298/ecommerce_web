import React from "react";

const ProductInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="product_info">
      <img src={data.image} alt={data.image} />
      <div className="box">
        <h2>{data.title}</h2>
        <h3>${data.price}</h3>
        <p>{data.description}</p>
        <h4>Category: {data.category}</h4>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
