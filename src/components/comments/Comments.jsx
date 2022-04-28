import React from 'react'
import { useEffect } from 'react';
import Comment from './comment/Comment'
import uniqid from 'uniqid';
import { getApiResource } from '../../utils/Network';
import { SWAPI_COMMENTS } from '../../constants/api';
import styles from "./Comments.module.css"

export default function Comments(props) {
    const getComments = () => {
        getApiResource(SWAPI_COMMENTS)
        .then( res => props.loadComments(res.data));
    }

    // const load = (e) => {
    //     e.preventDefault();
        
    // }
    useEffect(() => {
        getComments()
    }, [])
    
    const handleInput = (e) => {
        props.handleInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        props.addComment("Daniel-Lyamin", props.value, id);
    }

  return (
    <div className={styles.comments}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={handleInput} type="text" value={props.value}/>
            <button className={styles.button} type="submit">&#10003;</button>
        </form>
        <div className={styles.container}>
            {!!props.comments.length && props.comments.map(
                (comment) => <Comment 
                    deleteComment={(id) => {props.deleteComment(id)}} 
                    key={comment.id} 
                    id={comment.id} 
                    name={comment.name} 
                    body={comment.body}
                />
            )}
        </div>
    </div>
  )
}
