import React from 'react'

function Likes(props) {
  return (
    <div>
        <button onClick={props.increment}>
            &#10084;{props.likes}
        </button>
        <button onClick={props.decrement}>
            Dislike
        </button>
    </div>
  )
}

export default Likes;