import React from "react";
import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/Dashboard";
import { Grid, ThemeProvider } from "@material-ui/core";
import { Navbar } from "./components/navbar/Navbar";
import { posTheme } from "./constants/posTheme";
class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={posTheme}>
        <Router>
          <Grid container>
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
      </ThemeProvider>
    );
  }
}

export default App;
