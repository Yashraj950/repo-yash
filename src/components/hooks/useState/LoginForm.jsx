import { useState } from "react";
import "./index.css";


export const LoginForm = () => {
const [username,setUsername] =  useState("");
const [password, setPassword] = useState("");

const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(loginData);
  };


    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                        <input type="text" name="username" autoComplete="off" required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        />

                        <label htmlFor="password"> Password</label>
                            <input type="text" name="password"  autoComplete="off" required 
                             value={password} 
                             onChange={(e) => setPassword(e.target.value)} 
                            />


                       <button type="submit">Login</button>
                    
                </form>
            </div>
        </div>
    )
}