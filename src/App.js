import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Guides from "./Guides/Guides";

function App() {

  return (
    <>
      <Switch>
      <Route exact path="/" component={Catalog} />
      <Route exact path="/products" component />
      </Switch>
    </>
  );
}

export default App;
