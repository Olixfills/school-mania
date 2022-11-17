import React from "react";
import Styles from "./Comps.module.css";
import { clearUser } from "../features/userSlice";
import { CgCloseR } from "react-icons/cg";

const menuLinks = [
  { title: "Dashboard", link: "/student" },
  { title: "Students", link: "/coming-soon" },
  { title: "Library", link: "/coming-soon" },
  { title: "Settings", link: "/coming-soon" },
];

const SideBar = ({ navigate, dispatch, sb, setsideBarOpen }) => {
  const active = "Dashboard";

  const onLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div data-testid="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className={Styles.logo}>SM</h2>
        {sb && <div onClick={() => setsideBarOpen((r) => !r)} style={{marginRight: '20px', fontSize: '1.5rem', color: '#1161ee'}}>
          <CgCloseR />
        </div>}
      </div>
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
        <div
          className={`${Styles.dashboard_link} ${Styles.logout}`}
          onClick={onLogout}
        >
          {" "}
          Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
