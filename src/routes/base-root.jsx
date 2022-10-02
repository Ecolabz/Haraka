import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Hello from "../pages/Hello";

function AboutPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/hello" component={Hello} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default AboutPage;
