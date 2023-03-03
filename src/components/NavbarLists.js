import React from "react";
import NavbarList from "./NavbarList";

const NavbarLists = () => {
  return (
    <ul className="nav-bar__lists">
      <NavbarList url="#" content="Home" />
      <NavbarList url="#" content="About" />
      <NavbarList url="#" content="Courses" />
      <NavbarList url="#" content="Event" />
      <NavbarList url="#" content="Teacher" />
      <NavbarList url="#" content="Blog" />
      <NavbarList url="#" content="Contact" />
    </ul>
  );
};

export default NavbarLists;
