import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import "./assets/css/main.css";
import Videos from "./pages/Videos/Videos";


const AuthenticationApp = () => {

  return (
    <div>

    <Header />

          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/chanel/:id" element={<Channel />} />

            <Route path="/video/:id" element={<Videos />} />

          </Routes>

    </div>
    )
  }

  export default AuthenticationApp;