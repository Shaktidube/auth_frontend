// import React from 'react'
// import PasswordInput from '../../components/passwordinput/PasswordInput'


// // const intialState ={
  
// //   password:"",
// //   password2:""
// // }

// const Changepassword = () => {

//   // const [formdata, setFormdata] = useState(intialState);
//   //   const { password, password2} = formdata

//     // const [passLen, setPassLen] = useState(false)

//   const HandleInputChange =(e)=>{
//     const {name, value} = e.target
//     setFormdata({...formdata, [name]:value})
//   };
//   return (
//     <>
//       <form>
//         <p>
//           <label>password</label>
//           <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/>
//         </p>
//         <p>
//           <label>New Password:</label>
//             <PasswordInput placeholder="New Password" name="password2" value={password2} onChange={HandleInputChange}/>
//           {/* <PasswordInput placeholder="Password" name="password" value={password} onChange={HandleInputChange}/> */}

//         </p>
//         <p>
//           <label>Cofirm Password:</label>
//           <PasswordInput placeholder="New Password" name="password2" value={password2} onChange={HandleInputChange}/>

//         </p>
//         <button type="submit" className="--btn --btn-danger --btn-block">Change password</button>

//       </form>
//     </>
//   )
// }

// export default Changepassword