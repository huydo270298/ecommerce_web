import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useQuery = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        toast.error(err.response.data.msg);
      })
      .finally(() => {
        setLoading(true);
      });

    return () => {};
  }, [url]);

  return { data, loading, error };
};

export default useQuery;
