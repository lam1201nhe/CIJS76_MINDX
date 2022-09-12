import React from 'react'

const CardInfo = (props) => {
  return (
    <div className="card">
      <ul>
        <li className="name">Name: {props.name}</li>
        <li className="age">Age: {props.age}</li>
        <li>Gender: {props.gender}</li>
      </ul>

      <div className="choice">
        <input type="text" name="choice" placeholder="Enter your task here"/>
      </div>
    </div>
  )
}

export default CardInfo

ca