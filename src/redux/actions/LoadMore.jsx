import { useDispatch } from "react-redux";
import { getCoins } from "./coinActions.js"; // getCoins fonksiyonunu import edin
import LoadMoreView from "../../components/LoadMoreView.jsx";
import { useState } from "react";

const LoadMore = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage(page + 1);
    dispatch(getCoins(page + 1));
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMore;
