import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";

//!CORREGIR PARA FLEXBOX

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavLink to="/" className={styles.linkHome}>
          <div className={styles.imgContainer}>
            <img
              src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
              alt="Rick and Morty"
            />
          </div>
        </NavLink>
        <div className={styles.menu}>
          <NavLink to="/home" className={styles.linkMenu}>
            <div className={styles.buttonMenu}>Home</div>
          </NavLink>
          <NavLink to="/characters" className={styles.linkMenu}>
            <div className={styles.buttonMenu}>Characters</div>
          </NavLink>
          <NavLink to="/favorites" className={styles.linkMenu}>
            <div className={styles.buttonMenu}>Favorites</div>
          </NavLink>
          <NavLink to="/about" className={styles.linkMenu}>
            <div className={styles.buttonMenu}>About</div>
          </NavLink>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
