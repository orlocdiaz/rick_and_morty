import React, { useState } from "react";
import styles from "./Form.module.css";
import { validation } from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const key = event.target.name;
    const val = event.target.value;

    setUserData({ ...userData, [key]: val });
    validation({ ...userData, [key]: val }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      {/*       <img
        src={require("../../assets/imgs/pickleRick.png")}
        className={styles.stickers}
      />
      <img
        src={require("../../assets/imgs/butt.png")}
        className={styles.stickers}
      /> */}
      <fieldset className={styles.login}>
        <legend>Login</legend>
        <form className={styles.loginForm}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={styles.inputs}
          />
          <div className={styles.errors}>{errors.email}</div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={styles.inputs}
          />
          <div className={styles.errors}>{errors.password}</div>
          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
