import React from 'react'
import styles from "./../../App.module.css"

function Likes(props) {
  return (
    <div className={styles.buttons}>
      <div>
      <button className={styles.like} onClick={props.increment}>
            &#10084;{` ${props.likes}`}
        </button>
        <button className={styles.dislike} onClick={props.decrement}>
            Dislike
        </button>
      </div>
    </div>
  )
}

export default Likes;