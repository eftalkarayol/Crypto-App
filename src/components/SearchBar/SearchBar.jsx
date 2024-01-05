import React from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getCoins } from "../../redux/actions/coinActions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(getCoins(1, searchTerm)); // getCoins action'ını yeni searchTerm ile çağırın
  };
  return (
    <div className="coin_search">
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search"
        className="coin_input"
      />
    </div>
  );
};

export default SearchBar;
