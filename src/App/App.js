import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RedirectPage from "../pages/RedirectPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:key" component={RedirectPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
