import React, { useState } from "react";
import styles from "./auth.module.scss";
// import Card from "../../components/card/Card";
import {  AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordinput/PasswordInput";

const Reset = () => {
  return (
    <div className={`container ${styles.auth}`}>
      {/* <Card> */}
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          
          <br />
          
          <form>
            {/* <input type="email" placeholder="Email" name="email" value={email} onChange={HandleInputChange}required/> */}
            {/* <input type="password" placeholder="Password" name="password" value={password} onChange={HandleInputChange}required/> */}
            <PasswordInput placeholder="Password" name="password" /*value={password} onChange={HandleInputChange}*//>
            <PasswordInput placeholder="Confirm Password" name="password2" /*value={password2} onChange={HandleInputChange}*/ />

            <button type="submit" className="--btn --btn-primary --btn-block">Reset Password</button>
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
  )
}

export default Reset