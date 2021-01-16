import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./../../images/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            Categories <i className="fa fa-angle-down"></i>
            <ul>
              <li>
                <NavLink to="/menshoes">Men Shoes</NavLink>
              </li>
              <li>
                <NavLink to="/womenshoes">Women Shoes</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
