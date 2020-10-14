const initialState = {
  loading: false,
  carmake: null,
  error: false,
  message: null,
  carmodel: { loading: false, carmodel: null },
};

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARMAKE_DATA_PENDING":
      return { ...state, loading: true, carmake: null };

    case "CARMAKE_DATA_SUCCESS":
      return { ...state, loading: false, carmake: action.carmake };

    case "CARMAKE_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        message: action.message,
        error: true,
        carmake: null,
      };

    case "CARMODEL_DATA_PENDING":
      return {
        ...state,
        carmodel: { loading: true, carmodel: null },
      };

    case "CARMODEL_DATA_SUCCESS":
      return {
        ...state,
        carmodel: {
          loading: false,
          carmodel: action.carmodel,
        },
      };

    case "CARMODEL_DATA_FAILURE":
      return {
        ...state,
        carmodel: {
          loading: false,
          message: action.message,
          error: true,
        },
      };

    default:
      return { ...state };
  }
};

export default CarsReducer;
