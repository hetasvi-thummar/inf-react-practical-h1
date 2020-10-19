import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../../view/Home";
import { NewRequest } from "../../containers";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={NewRequest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
