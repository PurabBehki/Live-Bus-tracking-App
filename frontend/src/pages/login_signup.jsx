import React from "react";
import "./login_signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import API from "../services/api";

const LoginSignup=() =>{
    const [mode, setMode]= useState("login")
    const [formData, setFormData] =useState({name:"", email:"", password:"" })
    const navigate= useNavigate()
    const isLogin=mode==="login"
    const handleChange=(e)=> {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async () => {
        try { if(isLogin) {
                const res=await API.post("/user/login",{ email:formData.email, password: formData.password,});
                console.log("LOGIN RESPONSE:", res.data);
                localStorage.setItem( "user", JSON.stringify(res.data.user) );
                navigate("/passenger");
            }else {const res = await API.post("/user/signup",{name:formData.name,email: formData.email, password:formData.password,});
                alert("Signup Successful");
                navigate("/passenger");
            }
        }catch(error) {
            alert( error.response?.data?.message || "Something went wrong" );
            console.log(error);}
    };
    return(
        <div className="main_container">
            <div className="left">
                <div className="left_content">
                    <h1 style={{fontSize: "2.5rem",marginBottom:"10px" }}>Track your Bus<FontAwesomeIcon icon={faBus} /></h1>
                    <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
                    <p>{isLogin? "Sign in to continue.": "Sign up to get started."}</p>
                </div>
            </div>
            <div className="right">
                <div className='container'>
                    <div className='text'>{isLogin ?"Sign In" :"Sign Up"}</div>
                    <div className='inputs'>{!isLogin &&
                            <div className='input'>
                                <span className='icon'>👤</span>
                                <input type="text" placeholder='Full Name' name="name" value={formData.name} onChange={handleChange}/>
                            </div>}
                        <div className='input'>
                            <span className='icon'>✉️</span>
                            <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className='input'>
                            <span className='icon'>🔒</span>
                            <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                    </div>
                    {isLogin &&
                        <div className='forget_password'> Lost Password? <span>Click here!</span> </div>}
                    <div className='submit_container'>
                        <button className="submit-btn" onClick={handleSubmit}> {isLogin ? "Login" : "Sign Up"}</button>
                        <div className="mode-toggle">
                            {isLogin ?(<span>Don't have an account? <button type="button" onClick={() => setMode("signup")}>Sign Up</button></span>
                            ):(
                            <span> Already have an account? <button type="button" onClick={() => setMode("login")}>Login</button></span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
