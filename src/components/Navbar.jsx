import React from "react";
import styles from "../style.module.css";

function Navbar() {
  return (
    <div className="container">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="#">AAER</a>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
          <button className="btn btn-secondary">Register</button>
          <i class="fas fa-moon"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
