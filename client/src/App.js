import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/">
            <h3 className="navLink">Home</h3>
          </NavLink>
          <NavLink to="/login">
            <h3 className="navLink">Login</h3>
          </NavLink>
          <NavLink to="/bubble-page">
            <h3 className="navLink">Bubbles</h3>
          </NavLink>
        </nav>

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/bubble-page" component={BubblePage}/>
          
      </Router>

    </div>
  );
}

export default App;
