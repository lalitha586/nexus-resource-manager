import React, { useContext, useState } from 'react'
import './Signin.css'
import { AuthContext } from '../Context/AuthContext.js'
import Switch from '@material-ui/core/Switch';

function Signin() {
    const [isAdmin, setIsAdmin] = useState(false) 
    const [identifier, setIdentifier] = useState("") 
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { dispatch } = useContext(AuthContext)

    const handleForm = (e) => {
        e.preventDefault()
        
        // 1. Logic for Admin Login (Demo Credentials)
        if (isAdmin) {
            if (identifier === "admin@lib.com" && password === "admin123") {
                dispatch({ 
                    type: "LOGIN_SUCCESS", 
                    payload: { username: "Administrator", isAdmin: true } 
                });
            } else {
                setError("Invalid Admin Credentials.")
            }
        } 
        
        // 2. Logic for Standard Users (Accepts anything for now)
        else {
            // This allows any user to get access without a backend check
            dispatch({ 
                type: "LOGIN_SUCCESS", 
                payload: { username: identifier, isAdmin: false } 
            });
        }
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <form onSubmit={handleForm}>
                    <h2 className="signin-title">Library Login</h2>
                    <p className="line"></p>
                    
                    <div className="persontype-question">
                        <p>Login as Admin?</p>
                        <Switch
                            onChange={() => {
                                setIsAdmin(!isAdmin);
                                setError(""); // Clear errors when switching roles
                            }}
                            color="primary"
                        />
                    </div>

                    <div className="error-message"><p>{error}</p></div>
                    
                    <div className="signin-fields">
                        <label htmlFor="identifier"> 
                            <b>{isAdmin ? "Admin Username" : "Library ID / Email"}</b>
                        </label>
                        <input 
                            className='signin-textbox' 
                            type="text" 
                            placeholder={isAdmin ? "Enter Admin Email" : "Enter Email to Access"} 
                            name="identifier" 
                            required 
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        
                        <label htmlFor="password"><b>Password</b></label>
                        <input 
                            className='signin-textbox' 
                            type="password" 
                            minLength='6' 
                            placeholder="Enter Password" 
                            name="psw" 
                            required 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    
                    <button className="signin-button">
                        {isAdmin ? "Admin Login" : "User Login"}
                    </button>
                    
                    <a className="forget-pass" href="#home">Forgot password?</a>
                </form>
                
                
            </div>
        </div>
    )
}

export default Signin