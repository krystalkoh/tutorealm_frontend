import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/parent/create"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Create Assignment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/parent/jobs"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Created Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/parent/update"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Edit Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
