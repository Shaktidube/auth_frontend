import React, { useEffect, useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordinput/PasswordInput";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
// import Card from "../../components/card/Card";
const intialState ={
    name:"",
    email:"",
    password:"",
    password2:""
}
const Register = () => {
  

  const [formdata, setFormdata] = useState(intialState);
    const {name, email, password, password2} = formdata

    const [uCase, setUCase] = useState(false)
    const [num, setNum] = useState(false)
    const [sChar, setSChar] = useState(false)
    const [passLen, setPassLen] = useState(false)

    const timesIcon = <FaTimes color="red" size={15} />
    const checkIcon = <BsCheck2All color="grenn" size={15} />

    const switchIcon = (condition) => {
      if(condition){
        return checkIcon
      }
      else{
        return timesIcon
      }

    }

  const HandleInputChange =(e)=>{
    const {name, value} = e.target
    setFormdata({...formdata, [name]:value})
  };
  // Password Strength
// Check Lower and Uppercase
// match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)

// Check For Numbers
// match(/([0-9])/)

// Check For Special char
// match(/([!,%,&,@,#,$,^,*,?,_,~])/)
  useEffect(() => {
    // if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
    //   setUCase(true)
    // }else{
    //   setUCase(false)
    // }

    // if(password.match(/([0-9])/)){
    //   setNum(true)
    // }else{
    //   setNum(false)
    // }

    // if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
    //   setSChar(true)
    // }else{
    //   setSChar(false)
    // }

    // if(password.length > 5){
    //   setPassLen(true)
    // }else{
    //   setPassLen(false)
    // }

    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      setUCase(true)
    }
    else if(password.match(/([0-9])/)){
      setNum(true)
    }
    else if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
      setSChar(true)
    }
    else if(password.length > 4){
      setPassLen(true)
    }
    
  }, [password])
  
  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      {/* <Card> */}
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          {/* <div className="--flex-center">
            <button className="--btn --btn-google">Login With Google</button>
          </div> */}
          <br />
          {/* <p className="--flex-center --fw-bold">Or</p> */}
          <form onSubmit={loginUser}>
          <input type="text" placeholder="Name" name="name" value={name} onChange={HandleInputChange}required/>

            <input type="email" placeholder="Email" name="email" value={email} onChange={HandleInputChange}required/>
            {/* <input type="password" placeholder="Password" name="password" value={password} onChange={HandleInputChange}required/> */}
            <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/>
            <PasswordInput placeholder="Confirm Password" name="password2" value={password2} onChange={HandleInputChange}/>
              {/* <Card className={styles.group}> */}
                <ul className="form-list">
                  <li>
                    <span className={styles.indicator}>
                      {switchIcon(uCase)}&nbsp; Lowercase & Uppercase
                      
                    </span>
                  </li>
                  <li>
                    <span className={styles.indicator}>
                      {switchIcon(num)}&nbsp; Number(0-9)
                      
                    </span>
                  </li>
                  <li>
                    <span className={styles.indicator}>
                      {switchIcon(uCase)}&nbsp; Special Character(*&^%$#@!)
                      
                    </span>
                  </li>
                  <li>
                    <span className={styles.indicator}>
                      {switchIcon(uCase)}&nbsp; Atleast 4 Character
                      
                    </span>
                  </li>
                </ul>
              {/* </Card> */}
              <br/>
            <button type="submit" className="--btn --btn-primary --btn-block">Register</button>
          </form>
          {/* <Link to="/forgot">Forgot Password</Link><br/> */}
          <span className={styles.register}>
          <Link to="/" className="--fw-bold">Home</Link>
          <p> &nbsp; Already have an account? &nbsp; </p>
          <Link to="/login"className="--fw-bold">Login</Link>
          </span>
        </div>
      {/* </Card> */}
    </div>
  );
};

export default Register;
