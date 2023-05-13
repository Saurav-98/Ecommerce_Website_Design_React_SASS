import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>ShoppeIQ</span>
          <span className="dot">.</span>
          <div className="links-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
