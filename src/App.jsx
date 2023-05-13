import React, { useState } from "react";
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
  const [theme, setTheme] = useState("dark");
  return (
    <div className="app" data-theme={theme}>
      {/* <h2>Hello, World!</h2> */}
      <NavBar />
      <Home />
      <ScrollToTop />
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
