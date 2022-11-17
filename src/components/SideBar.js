import React from "react";
import Styles from "./Comps.module.css";
import {clearUser} from '../features/userSlice'



const menuLinks = [
  { title: "Dashboard", link: "/student" },
  { title: "Students", link: "/coming-soon" },
  { title: "Library", link: "/coming-soon" },
  { title: "Settings", link: "/coming-soon" },
];

const SideBar = ({navigate, dispatch}) => {
  const active = "Dashboard";


const onLogout = () => {
dispatch(clearUser())
navigate('/')
}

  return (
    <div data-testid="sidebar">
      <h2 className={Styles.logo}>SM</h2>
      <div>
        {menuLinks.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className={`${Styles.dashboard_link} ${
              active === item.title && Styles.active
            }`}
          >
            {item.title}
          </a>
        ))}
        <div className={`${Styles.dashboard_link} ${Styles.logout}`} onClick={onLogout}> Logout</div>
      </div>
    </div>
  );
};

export default SideBar;
