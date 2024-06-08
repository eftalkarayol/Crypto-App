const initialState = {
  coins: [],
  isError: false,
  isLoading: true,
  searchTerm: "",
};
const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COINS":
      return {
        ...state,
        coins: action.payload, // Tüm coin verilerini güncelle
        isLoading: false,
        isError: false,
      };
    case "SET_SEARCH_TERM":
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        searchTerm: searchTerm,
        coins: state.coins.filter((coin) =>
          coin.name.toLowerCase().startsWith(searchTerm)
        ), // Filtreleme işlemini burada gerçekleştir
      };
    case "SET_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export default coinListReducer;
