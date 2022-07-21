import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavbarTutor = () => {
  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/tutor/available"
                className={(navData) =>
                  navData.isActive ? styles.active : " "
                }
              >
                Available Jobs
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/tutor/applied"
                className={(navData) =>
                  navData.isActive ? styles.active : " "
                }
              >
                Applied Jobs
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/tutor/profile"
                className={(navData) =>
                  navData.isActive ? styles.active : " "
                }
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavbarTutor;
