import React from "react";
import CoinItem from "../components/CoinItem";
import { useSelector, useDispatch } from "react-redux";
import "./Coins.css";
import LoadMore from "../redux/actions/LoadMore";
import { Link } from "react-router-dom";
import Coin from "./../routes/Coin";
import coinListReducer from "../redux/reducers/coinListReducer";
import { loadMoreCoins } from "../redux/actions/coinActions";

const Coins = () => {
  const { coins, isError, isLoading, displayedCoins } = useSelector(
    (state) => state.coinListReducer
  );

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreCoins());
  };

  if (isLoading) {
    return <h4 className="text-center mt-5 ">Loading...</h4>;
  }

  if (isError) {
    return (
      <h1 className="text-center mt-5">Error occurred while fetching data</h1>
    );
  }

  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {displayedCoins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          );
        })}
      </div>
      <div className="more-view">
        <button onClick={handleLoadMore}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Coins;
