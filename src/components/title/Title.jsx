import React from 'react'

export default function Title(props) {

  const handleChange = (e) => {
    props.handleInput(e.target.value);
  }
 
  return (
    <div>
        <input type="text" value={props.inputText} onChange={handleChange} />
        <p>{props.inputText}</p>
    </div>
  )
}
