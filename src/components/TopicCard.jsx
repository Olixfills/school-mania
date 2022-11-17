import React from 'react'
import Styles from "./Comps.module.css";
import { GiTimeBomb, GiBookmark } from "react-icons/gi";



const TopicCard = ({title, time, resources}) => {
  return (
    <div className={Styles.detail_cards} data-testid="topic-card">
        <h4>{title}</h4>
        <p><GiTimeBomb />: {time}</p>
        <p><GiBookmark />: {resources}</p>
    </div>
  )
}

export default TopicCard