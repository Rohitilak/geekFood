import React from 'react'
import './Main2.css';
import myimg from '../components/assets/girl-card.jpg'

const Main2 = () => {
  return (
    <div id="main2" >
            <img src={myimg} id="img-3"></img>

       <div className='img-content'>
                <div className='img-cont-list'>
                <h1 className='heading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                <p id="para2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolor.
                es provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                </p>
                <button id="btn2">Get in Touch</button>
                </div>
            </div>
    </div>
  )
}

export default Main2;