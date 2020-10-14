import axios from "axios";
import { Config } from "../../common";

export const carsData = () => {
  return (dispatch) => {
    dispatch({ type: "CARMAKE_DATA_PENDING" });
    axios
      .get(`${Config.apiUrl}/test/carMake`)

      .then((res) => {
        dispatch({
          type: "CARMAKE_DATA_SUCCESS",
          carmake: res.data.results.carMake,
        });
      })

      .catch((error) => {
        dispatch({
          type: "CARMAKE_DATA_FAILURE",
          message: error.message,
        });
      });
  };
};

export const carModelData = (Id) => {
  return (dispatch) => {
    dispatch({ type: "CARMODEL_DATA_PENDING" });
    axios
      .get(`${Config.apiUrl}/test/carModel/${Id}`)

      .then((res) => {
        dispatch({
          type: "CARMODEL_DATA_SUCCESS",
          carmodel: res.data.results.carModel,
        });
        console.log(res.data.results.carModel);
      })

      .catch((error) => {
        dispatch({
          type: "CARMODEL_DATA_FAILURE",
          message: error.message,
        });
      });
  };
};
