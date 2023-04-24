import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
