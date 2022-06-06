import React from "react";
import { Context } from "../../context/TokenContext";

import "./log-out.css";

const LogOut = () => {

const {setToken} = React.useContext(Context);

return (
  <>

  <button className="log-out-btn" onClick={() => setToken(false)}>Log out</button>

  </>
)
}

export default LogOut;