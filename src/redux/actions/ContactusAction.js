import axios from "axios";
import { toast } from "react-toastify";
import { Config } from "../../common";

export const contactData = (contactdata) => {
  return (dispatch) => {
    dispatch({ type: "CONTACTUS_DATA_PENDING" });
    axios
      .post(`${Config.apiUrl}/test/contactUs`, contactdata)

      .then((res) => {
        dispatch({
          type: "CONTACTUS_DATA_SUCCESS",
        });

        toast.success(res.data.message);
      })

      .catch((error) => {
        dispatch({
          type: "CONTACTUS_DATA_FAILURE",
          message: error.message,
        });

        toast.error(error.response.data.message[0]);
      });
  };
};
