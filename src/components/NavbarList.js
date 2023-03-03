import React from "react";

const NavbarList = (props) => {
  return (
    <li>
      <a href={props.url}>{props.content}</a>
    </li>
  );
}

export default NavbarList;
