import React from "react";
import "./scss/index.scss";

import {
  Categories,
  Choose,
  Footer,
  Home,
  NavBar,
  Products,
  Promo,
  Recommend,
  ScrollToTop,
  Services,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <h2>Hello, World!</h2>
      <ScrollToTop />
      <NavBar />
      <Home />
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <Footer />
    </div>
  );
};

export default App;
