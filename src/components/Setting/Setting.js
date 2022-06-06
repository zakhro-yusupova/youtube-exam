import { useState } from "react"
import useTheme from "../Hook/useTheme";
import NavItem from "../NavItem/NavItem";
import {SettingIcon, Home} from "../../assets/images/Icons/Icons"
import "./setting.css";
import "../../assets/css/main.css";

const Setting = () => {

  const [theme, setTheme] = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>

    <NavItem Icon={SettingIcon} title="Setting" PathName={'/'}/>

    <select onChange={(evt) => setTheme(evt.target.value)}>

    <option value="dark">Dark</option>

    <option value="light">Light</option>

    </select>
    </div>

    )
  }

  export default Setting;
