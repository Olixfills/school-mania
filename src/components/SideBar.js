import React from 'react'
import Dashboard from '../pages/Dashboard';
import { Link } from 'react-router-dom';
import Styles from "./Comps.module.css";



const menuLinks = [
{title: 'Dashboard', link: '/student'},
{title: 'Students', link: '/coming-soon'},
{title: 'Library', link: '/coming-soon'},
{title: 'Settings', link: '/coming-soon'},
]



const SideBar = () => {
  return (
    <div>
      <h2 className={Styles.logo}>SM</h2>
      <div >
        {menuLinks.map((item) => (
          <Link to={item.link} key={item.title} className={Styles.dashboard_link}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar;