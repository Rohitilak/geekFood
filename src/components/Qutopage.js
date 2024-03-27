import React from 'react'
import './Qutopage.css';


const Qutopage = (props) => {
  return (
    <div id="quotes">
      <p>{props.description}</p>
        <span className='author'>{props.author}</span>
    </div>
  )
}

export default Qutopage
