import React, { useState } from "react";
import NavbarLists from "../components/NavbarLists";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav id="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <img src="https://htmldemo.net/eduhome/eduhome/img/logo/logo.png" />
              </div>
            </div>
            <div className="col-8">
              <NavbarLists />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
