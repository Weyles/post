import React from 'react'
import styles from "./../Comments.module.css"
export default function Comment(props) {
  const deleteComment = (e) => {
    e.preventDefault();
    props.deleteComment(props.id)
  }
 
  return (
    <form className={styles.form} onSubmit={deleteComment}>
        <input className={styles.delete} type="submit" value="&times;" />
        <div>
          <div className={styles.name}>
            {props.name}
          </div>
          <div>
            {props.body}
          </div>
        </div>
    </form>
  )
}