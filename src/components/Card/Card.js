import React from 'react';
import "./card.css";

 const Card = ({pics, title, view}) => {

  return (

    <div className='card'>

       <div className='card-inner'>

       <img src={pics} alt="image" className='card-img' />

       </div>

       <h3 className='card-title'> {title} </h3>

       <span className="card-views">{view} </span>

    </div>
  )
}

export default Card
