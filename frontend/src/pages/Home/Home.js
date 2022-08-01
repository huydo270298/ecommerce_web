import { useEffect, useMemo, useState, useRef } from "react";

import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import Sorting from "../../components/Sorting";
import { useMyContext } from "../../context/store";
import useQuery from "../../hooks/useQuery";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(2);

  const ref = useRef(0);

  const { page, sort } = useMyContext();

  const { data, loading, error } = useQuery(
    `/products?limit=${limit}&page=${page}&sort=${sort}`
  );

  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);

  const totalPages = useMemo(() => {
    if (!data?.count) return 0;

    return Math.ceil(data.count / limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.count]);

  return (
    <main>
      <h2>Render: {ref.current++}</h2>
      <Sorting />
      <Products data={products} loading={loading} error={error} />
      <Pagination totalPages={totalPages} />
    </main>
  );
};
export default Home;
