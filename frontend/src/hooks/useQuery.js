import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useQuery = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let here = true;

    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        if (here) setData(res.data);
      })
      .catch((err) => {
        if (here) {
          setError(err.response.data.msg);
          toast.error(err.response.data.msg);
        }
      })
      .finally(() => {
        if (here) setLoading(false);
      });

    return () => {};
  }, [url]);

  return { data, loading, error };
};

export default useQuery;
