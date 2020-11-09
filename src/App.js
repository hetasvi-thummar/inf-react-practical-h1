import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./utils/router";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer position="top-center" autoClose={5000} />
    </Provider>
  );
}

export default App;
