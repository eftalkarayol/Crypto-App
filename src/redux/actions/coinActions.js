import axios from "axios";

export const getCoins =
  (searchTerm = "") =>
  (dispatch) => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false&locale=en`;
    axios
      .get(url)
      .then((res) => {
        const filteredData = res.data.filter((coin) =>
          coin.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        dispatch({ type: "GET_COINS", payload: filteredData });
      })
      .catch((err) => console.log(err));
  };

export const getCoinDetails = (coinId) => (dispatch) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  axios
    .get(url)
    .then((res) => dispatch({ type: "GET_COIN_DETAILS", payload: res.data }))
    .catch((err) => console.log(err));
};
