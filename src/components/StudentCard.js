import React, { useState, useEffect } from "react";
import Styles from "./Comps.module.css";
import { BsCloudSunFill } from "react-icons/bs";
import useWindowSize from '../hooks/useWindowSize';

const StudentCard = ({firstname, lastname, level, tutor, subjects}) => {
  const [mainGreet, setMainGreet] = useState("");
  const [secGreet, setSecGreet] = useState("");
  const { width } = useWindowSize();
  
  const mobile = width <= 768;

  useEffect(() => {
    const timeData = [
        [22, "Working late?", "Well done"],
        [17, "Good evening", "How's your day going?"],
        [12, "Good afternoon", "How's your day going?"],
        [5, "Good morning", "Have a splendid day"],
        [0, "Having an early morning?", "Have a splendid day"],
      ],
      hr = new Date().getHours();
    for (var i = 0; i < timeData.length; i++) {
      if (hr >= timeData[i][0]) {
        setMainGreet(timeData[i][1]);
        setSecGreet(timeData[i][2]);
        break;
      }
    }
  }, [mainGreet, secGreet]);

  return (
    <div className={Styles.detail_cards} data-testid="stud-card">
      <div className={!mobile && Styles.details_cont}>
        <div className={Styles.greeting_text_box}>
          <div style={{display: 'flex', gap: '5px'}}>
            <h3><BsCloudSunFill /></h3>
            <h3>{mainGreet}</h3>
          </div>
          <h4>{secGreet}</h4>
        </div>
        <div className={Styles.student_info}>
        <div>
                <h5>Student:</h5>
                <p>{`${firstname} ${lastname}`}</p>
            </div>
            <div>
                <h5>Class:</h5>
                <p>{level}</p>
            </div>
            <div>
                <h5>Class Teacher:</h5>
                <p>{tutor}</p>
            </div>
            <div>
                <h5>Subjects:</h5>
                <p>{subjects}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
