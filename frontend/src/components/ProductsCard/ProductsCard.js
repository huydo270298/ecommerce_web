import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.image} />

      <div className="box">
        <h3>
          <Link to={`/products/${data._id}`}>
            <span />
            {data.title}
          </Link>
        </h3>
        <h4>${data.price}</h4>

        <div className="btn_div">
          <button className="btn_edit">Edit</button>
          <button className="btn_delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
