import React, { useState } from "react";
import styles from "./auth.module.scss";
// import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const LoginWithCode = () => {
  return (
    <div className={`container ${styles.auth}`}>
      {/* <Card> */}
      <div className={styles.form}>
        <div className="--flex-center">
          <BiLogIn size={35} color="#999" />
        </div>
        <h2>Enter Access Code</h2>

        <br />

        <form>
          <input type="email" placeholder="Access Code" name="email" required />
          {/* <input type="password" placeholder="Password" name="password" value={password} onChange={HandleInputChange}required/> */}
          {/* <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/> */}
          <button type="submit" className="--btn --btn-primary --btn-block">
            Proceed to login
          </button>
          <h5 className="--flex-center">Check your email for login access code</h5>
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

export default LoginWithCode;
