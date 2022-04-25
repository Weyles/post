import React from 'react'
import Comment from './comment/Comment'
import uniqid from 'uniqid';
import { getApiResource } from '../../utils/Network';
import { SWAPI_COMMENTS } from '../../constants/api';

export default function Comments(props) {
    const getComments = async () => {
        const body = await getApiResource(SWAPI_COMMENTS);
        props.loadComments(body.data);
    }

    const load = (e) => {
        e.preventDefault();
        getComments();
    }
    const handleInput = (e) => {
        props.handleInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        props.addComment(props.value, id);
    }

  return (
    <div>
    <button onClick={load}>Load comments</button>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" value={props.value}/>
            <input type="submit" hidden/>
        </form>
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
  )
}
