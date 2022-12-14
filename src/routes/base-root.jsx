import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Terms from "../pages/terms";

function AboutPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default AboutPage;
