import React from 'react'
import Styles from "./Comps.module.css";



const SingleSubjectHeader = ({image}) => {
    const style = {
        backgroundImage: "url(" + image + ")",
      };
    


  return (
        <header style={style} id={image} className={Styles.card_header} data-testid="subj-header">
      </header>
  )
}

export default SingleSubjectHeader