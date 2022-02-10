import "./Topbar.scss";

import {
  Mail,
  Person,
} from "@material-ui/icons";

import React from 'react';

export default function Topbar({
  menuOpen,
  setMenuOpen
}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#contacts" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tranlephu1207@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
