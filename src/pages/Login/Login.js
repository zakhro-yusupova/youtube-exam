import React from "react";
import {Logo} from "../../assets/images/Icons/Icons";
import { Context } from "../../context/TokenContext";

import "./login.css";

const Login = () => {

  const {setToken} = React.useContext(Context);

  const handleSubmit = (evt) => {

    evt.preventDefault();

    setToken({
      username: evt.target.elements.username.value,
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
    })

  }
  return (
    <div className="login-wrapper">

    <div className="login-logo-wrapper">

    <Logo/>

    <h1 className="login-title">Login to Your Account</h1>

    </div>

    <form onSubmit={handleSubmit} className="login-form">

    <div className="login-input-wrapper"> <input className="login-input" type="text" name="username" placeholder="Enter your username"/> </div>

    <div className="login-input-wrapper"> <input className="login-input" type="email" name="email" placeholder="Enter your email"/> </div>

    <div className="login-input-wrapper"> <input className="login-input" type="password" name="password" minLength="8" placeholder="Enter your password"/> </div>

    <button className="login-btn" type="submit">Login</button>

    </form>
    </div>
    )
  }

  export default Login;