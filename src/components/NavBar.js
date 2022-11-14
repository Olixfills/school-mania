import React from "react";
import Styles from "./Comps.module.css";
import useWindowSize from "../hooks/useWindowSize";
import { IoMdNotificationsOff } from "react-icons/io";
import { TbMessages } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";


const NavBar = () => {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <nav className={Styles.nav_container}>
      <div style={{height: '100%', width: '50%'}}></div>
      <div className={Styles.nav_icons_container}>
        <div>
          <IoMdNotificationsOff />
        </div>
        <div>
          <TbMessages />
        </div>
        <div>AO</div>
        {mobile && <div><TiThMenu /></div>}
      </div>
    </nav>
  );
};

export default NavBar;
