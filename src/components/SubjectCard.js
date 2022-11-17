import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Styles from "./Comps.module.css";


const SubjectCard = ({ image, title, text, code }) => {
  const style = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className={Styles.detail_cards} data-testid="sub-card">
      <header style={style} id={image} className={Styles.card_header}>
      </header>
      <div className={Styles.card_body}>
        <p className={Styles.date}>{code}</p>
        <h2>{title}</h2>
        <p className={Styles.body_content}>{text?.substring(0, 60 - 3) + "..."}</p>
        <button className={`${Styles.button} ${Styles.button_primary}`}>
           <BsFillArrowRightCircleFill className={Styles.i} /> Find out more
        </button>


      </div>
    </div>
  );
};

export default SubjectCard;
