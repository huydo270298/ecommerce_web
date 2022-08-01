import { useMemo } from "react";
import { useMyContext } from "../context/store";
import useCustomRouter from "./useCustomRouter";

const usePagination = (totalPages) => {
  const { page, sort } = useMyContext();
  const { pushQuery } = useCustomRouter();

  const { firstArr, lastArr } = useMemo(() => {
    const newArr = [...Array(totalPages)].map((_, i) => i + 1);
    if (totalPages < 4) {
      return {
        firstArr: newArr,
        lastArr: [],
      };
    }
    if (totalPages - page >= 3) {
      if (page > 1) {
        return {
          firstArr: newArr.slice(page - 2, page + 1),
          lastArr: newArr.slice(totalPages - 1),
        };
      } else {
        return {
          firstArr: newArr.slice(page - 1, page + 2),
          lastArr: newArr.slice(totalPages - 1),
        };
      }
    } else {
      return {
        firstArr: newArr.slice(0, 1),
        lastArr: newArr.slice(totalPages - 3, totalPages),
      };
    }
  }, [totalPages, page]);

  const isActive = (index) => {
    if (index === page) return "active";
    return "";
  };

  const nextPage = () => {
    const newPage = Math.min(page + 1, totalPages);
    pushQuery({ page: newPage, sort });
  };

  const prevPage = () => {
    const newPage = Math.max(page - 1, 1);
    pushQuery({ page: newPage, sort });
  };

  const jumbPage = (num) => {
    pushQuery({ page: num, sort });
  };

  return {
    firstArr,
    lastArr,
    isActive,
    nextPage,
    prevPage,
    jumbPage,
  };
};

export default usePagination;
