import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Favorites from "./components/favorites";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/favorites"
            render={(props) => <Favorites {...props} />}
          />
        </Switch>
      </main>
      <footer>
        <p className="border-top pt-3  text-center ">
          Weather App © {new Date().getFullYear()}
        </p>
      </footer>
    </React.Fragment>
  );
};

export default App;
