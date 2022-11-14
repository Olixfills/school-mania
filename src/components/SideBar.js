import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Comps.module.css";



const menuLinks = [
{title: 'Dashboard', link: '/student'},
{title: 'Students', link: '/coming-soon'},
{title: 'Library', link: '/coming-soon'},
{title: 'Settings', link: '/coming-soon'},
]



const SideBar = () => {
  const active = 'Dashboard'
  return (
    <div>
      <h2 className={Styles.logo}>SM</h2>
      <div >
        {menuLinks.map((item) => (
          <Link to={item.link} key={item.title} className={`${Styles.dashboard_link} ${active === item.title && Styles.active}`}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar;