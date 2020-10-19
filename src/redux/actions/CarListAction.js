import axios from "axios";
import { Config } from "../../common";

const jwt = localStorage.getItem("jwt");
export const carListData = () => {
  return (dispatch) => {
    dispatch({ type: "CARLIST_DATA_PENDING" });
    axios
      .get(`${Config.apiUrl}/test/carListing`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })

      .then((res) => {
        dispatch({
          type: "CARLIST_DATA_SUCCESS",
          cars: res.data.results.cars,
        });
      })

      .catch((error) => {
        dispatch({
          type: "CARLIST_DATA_FAILURE",
          message: error.message,
        });
      });
  };
};
