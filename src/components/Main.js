import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div id="main">
        <div id="main-content">
            <div className='main-left'>
            <h1 className='h1'>Lets us Find your<br/><p id="h1-mid">Forever Food</p></h1>
            <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className='btn-container'>
                <button ><a href="#" className='btn-1'>Search More</a ></button>
                <button ><a href='#' className='btn-2'>Know More</a></button>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Main