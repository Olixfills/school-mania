import React from "react";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Styles from "./Pages.module.css";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <div className={Styles.dashboard}>
      {!mobile && (
        <div className={Styles.sidebar}>
          <SideBar />
        </div>
      )}
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
