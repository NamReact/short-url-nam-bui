import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RedirectPage from "../pages/RedirectPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:key" component={RedirectPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
