import React from "react";
import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/Dashboard";
import { Grid, MuiThemeProvider } from "@material-ui/core";
import { Navbar } from "./components/shared/navbar/Navbar";
import { posTheme, POSTheme } from "./constants/posTheme";
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={(posTheme as POSTheme)}>
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
                  <DashboardPage />
                </Route>
              </Switch>
            </div>
          </Grid>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
