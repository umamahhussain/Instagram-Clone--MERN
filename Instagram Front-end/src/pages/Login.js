import React from "react";
import { GiButterfly } from "react-icons/gi";

const Login = () => {
    return (
        <div className="signup-card">
            <div className="card">
                <div className="authcard">
                    <h2 style={{ fontFamily: "Grand Hotel, cursive", color: "rgb(255, 37, 146)", display: 'inline' }}>Instagram </h2>
                    <div style={{ color: 'rgb(255, 37, 146)', display: 'inline-block' }}>
                        <GiButterfly size="50px" />
                    </div>

                    <input type="text" placeholder="username"></input>
                    <input type="text" placeholder="password"></input>
                    <button className="btn" style={{ backgroundColor: "rgb(255, 37, 146)", color: "white" }} type="submit" name="action">Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login;