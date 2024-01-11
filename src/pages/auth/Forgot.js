import React, { useState } from "react";
import styles from "./auth.module.scss";
// import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className={`container ${styles.auth}`}>
      {/* <Card> */}
      <div className={styles.form}>
        <div className="--flex-center">
          <BiLogIn size={35} color="#999" />
        </div>
        <h2>Forgot Password</h2>

        <br />

        <form>
          <input type="email" placeholder="Email" name="email" required />
          {/* <input type="password" placeholder="Password" name="password" value={password} onChange={HandleInputChange}required/> */}
          {/* <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/> */}
          <button type="submit" className="--btn --btn-primary --btn-block">
            Get Reset Email
          </button>
          <div className={styles.register}>
            <p>
              <Link to="/" className="--fw-bold">
                - Home
              </Link>
            </p>
            <p>
              <Link to="/login" className="--fw-bold">
                - Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default Forgot;
