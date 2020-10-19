import axios from "axios";
import { toast } from "react-toastify";
import { Config } from "../../common";

export const loginData = (data) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_DATA_PENDING" });
    axios
      .post(`${Config.apiUrl}/test/login`, data)

      .then((res) => {
        localStorage.setItem("jwt", res.data.results.user.token);
        dispatch({
          type: "LOGIN_DATA_SUCCESS",
        });

        toast.success("successfully login");
      })

      .catch((error) => {
        dispatch({
          type: "LOGIN_DATA_FAILURE",
          message: error.message,
        });

        toast.error(error.response.data.message[0]);
      });
  };
};

export const registerData = (registerdata) => {
  return (dispatch) => {
    dispatch({ type: "REGISTER_DATA_PENDING" });
    axios
      .post(`${Config.apiUrl}/test/register`, registerdata)

      .then((res) => {
        dispatch({
          type: "REGISTER_DATA_SUCCESS",
        });

        toast.success("successfully register");
      })

      .catch((error) => {
        dispatch({
          type: "REGISTER_DATA_FAILURE",
          message: error.message,
        });
      });
  };
};
