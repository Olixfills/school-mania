import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { getUserState } from '../features/userSlice';
import useWindowSize from "../hooks/useWindowSize";
import Styles from "./Pages.module.css";
import SideBar from "../components/SideBar";
import NavBar from '../components/NavBar';

const Dashboard = () => {
  const userObj = useSelector(getUserState)
  const user = userObj?.user[0]
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { width } = useWindowSize();
  const mobile = width <= 768;
  const [sidebarOpen, setsideBarOpen] = React.useState(false)


  return (
    <div className={Styles.dashboard} data-testid="dash">
      {!mobile && (
        <div className={Styles.sidebar}>
          <SideBar navigate={navigate} dispatch={dispatch} />
        </div>
      )}
      <div className={Styles.right_side}>
        <NavBar user={user} setsideBarOpen={setsideBarOpen}/>
        <Outlet />
        {sidebarOpen && <div className={Styles.mobileDash}>
        <SideBar navigate={navigate} dispatch={dispatch} setsideBarOpen={setsideBarOpen} sb={true}/>
        </div>}
      </div>
    </div>
  );
};

export default Dashboard;
