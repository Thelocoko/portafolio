import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home.js";
import Portafolio from "./pages/portafolio/Portafolio";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/portafolio" exact>
            <Portafolio />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
