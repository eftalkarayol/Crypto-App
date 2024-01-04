const initialState = {
  coin: {},
  isLoading: true,
  isError: false,
};

const coinInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COIN_DETAILS":
      return {
        ...state,
        coin: action.payload,
        isLoading: false,
        isError: false,
      };
    case "COIN_DETAILS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "COIN_DETAILS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default coinInfoReducer;
