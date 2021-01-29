import "./App.css";
import { useState, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Projects2 from "./pages/projects2";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects2} />
        <Route exact path="/About" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
