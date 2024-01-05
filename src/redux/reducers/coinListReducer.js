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
        coins: [...action.payload], // coins array is reset here
        isLoading: false,
        isError: false,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export default coinListReducer;
