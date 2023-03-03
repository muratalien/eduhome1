import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navigation from "./layouts/Navigation";

const Layout = () => {
  return (
    <main>
        <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
