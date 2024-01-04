const initialState = {
  coins: [],
  isError: false,
  isLoading: true,
};

const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COINS":
      return {
        ...state,
        coins: [...state.coins, ...action.payload], // mevcut coin listesine yeni coinleri ekleyin
        isLoading: false,
        isError: false,
      };
    case "SET_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export default coinListReducer;
