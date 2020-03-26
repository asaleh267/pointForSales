import React from "react";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashoardPage from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
        <DashoardPage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
