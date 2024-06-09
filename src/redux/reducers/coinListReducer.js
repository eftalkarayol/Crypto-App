const initialState = {
  allCoins: [],
  displayedCoins: [],
  isError: false,
  isLoading: true,
  searchTerm: "",
  nextIndex: 20,
};
const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COINS":
      return {
        ...state,
        allCoins: action.payload,
        displayedCoins: action.payload.slice(0, 20),
        isLoading: false,
        isError: false,
        nextIndex: 20,
      };
    case "SET_SEARCH_TERM":
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        searchTerm: searchTerm,
        displayedCoins: state.allCoins
          .filter((coin) => coin.name.toLowerCase().startsWith(searchTerm))
          .slice(0, 20),
        nextIndex: 20,
      };
    case "LOAD_MORE_COINS":
      const newIndex = state.nextIndex + 20;
      return {
        ...state,
        displayedCoins: [
          ...state.displayedCoins,
          ...state.allCoins.slice(state.nextIndex, newIndex),
        ],
        nextIndex: newIndex,
      };
    case "SET_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export default coinListReducer;
