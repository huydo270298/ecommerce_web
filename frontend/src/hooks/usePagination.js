import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePagination = (totalPages, page) => {
  const [firstArr, setFirstArr] = useState([]);
  const [lastArr, setLastArr] = useState([]);

  useEffect(() => {
    const newArr = [...Array(totalPages)].map((_, i) => i + 1);
    if (totalPages < 4) {
      setFirstArr(newArr);
      setLastArr([]);
      return;
    }
    if (totalPages - page >= 3) {
      if (page > 1) {
        setFirstArr(newArr.slice(page - 2, page + 1));
      } else {
        setFirstArr(newArr.slice(page - 1, page + 2));
      }
      setLastArr(newArr.slice(totalPages - 1));
    } else {
      setFirstArr(newArr.slice(0, 1));
      setLastArr(newArr.slice(totalPages - 3, totalPages));
    }
  }, [totalPages, page]);

  const navigate = useNavigate();

  const isActive = (index) => {
    if (index === page) return "active";
    return "";
  };

  const nextPage = () => {
    const newPage = Math.min(page + 1, totalPages);
    navigate(`/?page=${newPage}`);
  };

  const prevPage = () => {
    const newPage = Math.max(page - 1, 1);
    navigate(`/?page=${newPage}`);
  };

  const jumbPage = (num) => {
    navigate(`/?page=${num}`);
  };

  return {
    firstArr,
    lastArr,
    navigate,
    isActive,
    nextPage,
    prevPage,
    jumbPage,
  };
};

export default usePagination;
