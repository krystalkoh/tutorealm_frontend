import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBarParent = () => {
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
              Update Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarParent;
