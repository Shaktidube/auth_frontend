import React, { useState } from "react";
import styles from "./auth.module.scss";
// import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordinput/PasswordInput";
// import Card from "../../components/card/Card";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const HandleInputChange =()=>{};
  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      {/* <Card> */}
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login With Google</button>
          </div>
          <br />
          <p className="--flex-center --fw-bold">Or</p>
          <form onSubmit={loginUser}>
            <input type="email" placeholder="Email" name="email" value={email} onChange={HandleInputChange}required/>
            {/* <input type="password" placeholder="Password" name="password" value={password} onChange={HandleInputChange}required/> */}
            <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/>
            <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
          </form>
          <Link to="/forgot">Forgot Password</Link><br/>
          <span className={styles.register}>
          <Link to="/" className="--fw-bold">Home</Link>
          <p> &nbsp; Don't have an account? &nbsp; </p>
          <Link to="/register"className="--fw-bold">Register</Link>
          </span>
        </div>
      {/* </Card> */}
    </div>
  );
};

export default Login;
