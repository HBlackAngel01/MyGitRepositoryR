import './loginform.css'
import user from '../assets/user (2).png'
import email from '../assets/mail.png'
import lock from '../assets/lock.png'
import { useState } from 'react'
const Loginform = () => {
    //method to display register & login 
    const [action, setAction] = useState("Signup")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        {action == "login"? <div></div>:
        <div className="inputfield">
            <img src={user} alt="" className="user" />
            <input type="text" className="Input" placeholder='Name'/>
        </div>}
        <div className="inputfield">
            <img src={email} alt="" className="email" />
            <input type="text" className="Input" placeholder='Email' />
        </div>
        <div className="inputfield">
            <img src={lock} alt="" className="user" />
            <input type="text" className="Input" placeholder='Password' />
        </div>
        {action == "Signup"?<div></div>:<div className="forgetpass">Forget Password ?<span>click Here</span></div>}
        <div className="Submit">
            <div className={action == "login"? "submit gray" : "submit"} onClick={()=> setAction("Signup")}>Submit</div>
            <div className={action == "Signup"? "submit gray" : "submit"} onClick={()=> setAction("login")}>Login</div>
        </div>
    </div>
  )
}

export default Loginform