import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink(props) {
  const { linkTo, text, icon, id } = props;
  

  return (
    <li className="nav-item" id={id}>
      <NavLink
        to={linkTo}
        className={({ isActive }) => {
          return isActive
            ? 'nav-link link-light li-currentlink px-2'
            : 'nav-link link-light px-2';
        }}
      >
        <i className={"bi icons " + icon}></i>
        <p className="ms-1 d-none d-sm-inline">{text}</p>
      </NavLink>
    </li>
  )
}