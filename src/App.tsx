import React from "react";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashoardPage from "./pages/Dashboard/Dashboard";
import { Grid } from "@material-ui/core";
import { Navbar } from "./components/shared/Navbar";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Navbar></Navbar>
          </Grid>
          <div style={{ width: "100%" }}>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Route exact path="/dashboard">
                <DashoardPage />
              </Route>
            </Switch>
          </div>
        </Grid>
      </Router>
    );
  }
}

export default App;
