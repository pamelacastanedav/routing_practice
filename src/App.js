import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Routing Practice</h1>
      <p>
        {/* link is like a a tag */}
        {/* &nbsp; space!! */}
        <Link to="/home"> Home </Link> &nbsp; &nbsp;
        <Link to="/:input">Input</Link>&nbsp; &nbsp;
        <Link to="/:word/:color/:bccolor">Word with color</Link>
      </p>

      <Switch>
        <Route exact path="/:word/:color/:bccolor">
          <Word />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:input">
          <Number />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
