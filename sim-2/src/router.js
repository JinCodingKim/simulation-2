import React from "react";
import { Switch, Route } from "react-router-dom";

//import your Home component here!!
//import your Dashboard component here!!
//import your Wizard component here!!

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
