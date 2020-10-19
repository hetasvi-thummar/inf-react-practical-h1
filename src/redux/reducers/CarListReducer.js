const initialState = {
  loading: false,
  cars: null,
  error: false,
  message: null,
};

const CarListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARLIST_DATA_PENDING":
      return { ...state, loading: true, cars: null };

    case "CARLIST_DATA_SUCCESS":
      return { ...state, loading: false, cars: action.cars };

    case "CARLIST_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        message: action.message,
        error: true,
        cars: null,
      };

    default:
      return { ...state };
  }
};

export default CarListReducer;
