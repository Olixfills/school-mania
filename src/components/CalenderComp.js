import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "./Comps.module.css";

const CalenderComp = () => {
    const [value, onChange] = useState(new Date());

  return (
    <div className={Styles.calender_card}><Calendar onChange={onChange} value={value} defaultView="month" /></div>
  )
}

export default CalenderComp