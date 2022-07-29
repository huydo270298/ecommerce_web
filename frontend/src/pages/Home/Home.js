import { useEffect, useMemo, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import useQuery from "../../hooks/useQuery";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);

  const { search } = useLocation();
  const ref = useRef(0);

  const { data, loading, error } = useQuery(
    `/products?limit=${limit}&page=${page}`
  );

  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);

  const totalPages = useMemo(() => {
    if (!data?.count) return 0;

    return Math.ceil(data.count / limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.count]);

  useEffect(() => {
    const page = new URLSearchParams(search).get("page") || 1;
    setPage(Number(page));
  }, [search]);
  return (
    <main>
      <h2>Render: {ref.current++}</h2>
      <div className="products">
        {products &&
          products.map((product) => (
            <Products key={product._id} data={product} />
          ))}
        {error && <h2>{error}</h2>}
        {loading && <h2>Loading...</h2>}
      </div>
      <Pagination totalPages={totalPages} page={page} />
    </main>
  );
};
export default Home;
