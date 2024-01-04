import React from "react";
import CoinItem from "../components/CoinItem";
import { useSelector } from "react-redux";
import "./Coins.css";
import LoadMore from "../redux/actions/LoadMore";
import { Link } from "react-router-dom";
import Coin from "./../routes/Coin";

const Coins = () => {
  const { coins, isError, isLoading } = useSelector(
    (state) => state.coinListReducer
  );

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
        {coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          );
        })}
      </div>

      <LoadMore />
    </div>
  );
};

export default Coins;
