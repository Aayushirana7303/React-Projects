import React from 'react'
import OIP from '../assets/OIP.jpeg'
import "./Card.css"
const card = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} />
      <p id='user-description'>About {props.desc}</p>
    </div>
  )
}
export default card