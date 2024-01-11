import React, { useState } from 'react'
import "./profile.scss"
import Card from '../../components/card/Card'
import ProfileImage from "../../assets/avatarr.png"
import PageMenu from '../../components/pageMenu/PageMenu'
// import Card from '../../components/card/Card'

const Profile = () => {

    const intialstate = {
        name:"",
        email:"",
        phone:"",
        bio:"",
        role:"",
        isVerified:""
    }

    const [profile, setProfile] = useState(intialstate)

    const handleImageChange = () => {};
    const handleIputChange = () => {};
  return (
    <>
        <section>
            <div className='container'>
                <PageMenu/>
                <h2>Profile</h2>
                <div className='--flex-start profile'>
                    <Card cardClass={"card"}>
                        <>
                            <div className='profile-photo'>
                                <div>
                                <img src={ProfileImage}/>
                                    
                                <h3>Role: Admin</h3>
                                
                                </div>
                            </div>
                            <form>
                                <p>
                                    <label>Change Photo:</label>
                                    <input type='file' accept='image/*' name='image' onChange={handleImageChange}></input>
                                </p>
                                <p>
                                    <label>Name:</label>
                                    <input type='text'  name='name' value={profile.name} placeholder='Shakti Dube' onChange={handleIputChange}></input>
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input type='email'  name='email' value={profile.email} placeholder='ShaktiDube@gmail.com' onChange={handleIputChange} disabled></input>
                                </p>
                                <p>
                                    <label>Phone No:</label>
                                    <input type='text'  name='phone' value={profile.phone} placeholder='+12 1234567890' onChange={handleIputChange} ></input>
                                </p>
                                <p>
                                    <label>Bio:</label>
                                    {/* <input type='number'  name='phone' value={profile.phone} placeholder='+12 1234567890' onChange={handleIputChange} ></input> */}
                                    <textarea name='bio' value={profile.phone} onChange={handleIputChange} cols="30" rows="10" ></textarea>
                                </p>
                                <button className='--btn --btn-primary --btn-block'>Update profile</button>
                            </form>
                        </>
                    </Card>
                </div>
            </div>
        </section>
    </>
  )
}

export default Profile