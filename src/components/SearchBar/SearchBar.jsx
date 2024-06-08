import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../redux/actions/coinActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coinListReducer.coins);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      dispatch({ type: "SET_SEARCH_TERM", payload: "" });
      dispatch(getCoins()); // Call getCoins without arguments to retrieve all coins
    }
  };
  const searchHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_SEARCH_TERM", payload: input });
    // Tüm coinleri almak için sayfa parametresini kaldırın
    dispatch(getCoins(null, input));
  };

  return (
    <div className="coin_search">
      <form onSubmit={searchHandler}>
        <input
          onChange={inputHandler}
          value={input}
          type="text"
          placeholder="Search crypto.."
          className="coin_input"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
