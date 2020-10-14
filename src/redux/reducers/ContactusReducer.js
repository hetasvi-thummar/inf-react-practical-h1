const initialState = {
  loading: false,
  contactdata: null,
  error: false,
  message: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACTUS_DATA_PENDING":
      return { ...state, loading: true, contactdata: null };

    case "CONTACTUS_DATA_SUCCESS":
      return { ...state, loading: false, message: action.message };

    case "CONTACTUS_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        message: action.message,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ContactReducer;
