import React from 'react'

export default function Comment(props) {
  const deleteComment = (e) => {
    e.preventDefault();
    props.deleteComment(props.id)
  }
 
  return (
    <form onSubmit={deleteComment}>
        <div>
          {props.name}
        </div>
        <div>
          {props.body}
        </div>
        <input type="submit" value="&times;" />
    </form>
  )
}