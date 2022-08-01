import React from "react";
import ProductsCard from "../ProductsCard";

const Products = ({ data, loading, error }) => {
  return (
    <section>
      <div className="products">
        {data.map((product) => (
          <ProductsCard key={product._id} data={product} />
        ))}
        {error && <h2>{error}</h2>}
        {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
      </div>
    </section>
  );
};

export default Products;
