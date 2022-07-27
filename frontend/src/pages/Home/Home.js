import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`/products`).then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <Products key={product._id} data={product} />
        ))}
    </div>
  );
};
export default Home;
