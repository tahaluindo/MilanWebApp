import React from "react"
import styles from "../css/Team.module.css"

function Img(props) {
    return (
      <div>
        <img src={props.src} alt={props.alt} className={styles.img}/>
        <h5 className={styles.name_color}>{props.name}</h5>
      </div>
    );
  }

export default Img;