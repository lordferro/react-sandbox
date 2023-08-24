import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../../img/logo.svg";

const Navigation = () => (
  <div className={styles.navigation}>
    <div className={styles.logoWrapper}>
      <img src={logo} height="60" alt="logo" />
    </div>
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink to="/button-group">Button Group</NavLink>
        </li>
        <li>
          <NavLink to="/icon">Icon</NavLink>
        </li>
        <li>
          <NavLink to="/image">Image</NavLink>
        </li>
        <li>
          <NavLink to="/chip">Chip</NavLink>
        </li>
        <li>
          <NavLink to="/badge">Badge</NavLink>
        </li>
        <li>
          <NavLink to="/list-group">List group</NavLink>
        </li>
        <li>
          <NavLink to="input">Input</NavLink>
        </li>
        <li>
          <NavLink to="tab-bar">Tab bar</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
