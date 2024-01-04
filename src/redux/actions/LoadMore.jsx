import { useDispatch } from "react-redux";
import { getCoins } from "./coinActions.js"; // getCoins fonksiyonunu import edin
import LoadMoreView from "../../components/LoadMoreView.jsx";
import { useState } from "react";

const LoadMore = () => {
  const [page, setPage] = useState(1); // Sayfa numarasını state olarak tutun
  const dispatch = useDispatch(); // Redux dispatch fonksiyonunu alın

  const handleClick = () => {
    setPage(page + 1); // Sayfa numarasını artırın
    dispatch(getCoins(page + 1)); // Yeni sayfa numarası ile getCoins fonksiyonunu çağırın
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMore;
