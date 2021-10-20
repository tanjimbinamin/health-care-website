import React,{useState} from 'react';
import './Login.css'
import {Button} from 'react-bootstrap'

import useAuth from '../CustomHooks/useAuth';
import testUtils from 'react-dom/test-utils';




const Login = () => {

    const {loginWithGoogle,userLogin,userRegister}=useAuth({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [change,setChange]=useState(true)


    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        userLogin(email,password)
        // console.log(email,password)
    }

    const handleRegister =(e)=>{
        e.preventDefault()
        userRegister(email,password)
        // console.log(email,password)
    }

    return (
        <div className="center">
            {change? (<div>
            <h1>Login</h1>
                <form >
                    <div className="txt_field">
                    <input onBlur={handleEmail} type="email" required/>
                    <span></span>
                    <label>Username</label>
                    </div>
                    <div className="txt_field">
                    <input onBlur={handlePassword} type="password" required/>
                    <span></span>
                    <label>Password</label>
                    </div>
                    
                    <input onClick={handleLogin} type="submit" value="Login"/>
                    <p>are you new member? <a style={{color:"coral",cursor:"pointer"}} onClick={()=>setChange(false)} ><b>Sign Up</b></a></p>
                    <div className="text-center">
                       <Button onClick={loginWithGoogle} className="mb-3 " variant="primary">
                            Sign in with google
                       </Button>
                    </div>
            </form>
            </div>)
            :
            (<div>
            <h1>Register</h1>
                <form >
                    <div className="txt_field">
                    <input onBlur={handleEmail} type="email" required/>
                    <span></span>
                    <label>Username</label>
                    </div>
                    <div className="txt_field">
                    <input onBlur={handlePassword} type="password" required/>
                    <span></span>
                    <label>Password</label>
                    </div>
                    
                    <input onClick={handleRegister} type="submit" value="Register"/>
                    <div className="signup_link">
                    Already have an account? <a style={{color:"coral",cursor:"pointer"}} onClick={()=>setChange(true)}><b>Sign In</b></a> 
                    </div>
                    <div className="text-center">
                       <Button onClick={loginWithGoogle} className="mb-3 " variant="primary">
                            Sign up with google
                       </Button>
                    </div>
            </form>
            </div>)}
        </div>
    
    );
};

export default Login;