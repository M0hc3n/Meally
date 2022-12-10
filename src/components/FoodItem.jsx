import React from 'react'
import {Link} from "react-router-dom"

const { useState } = React 

function FoodItem(props) {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <Link to={`/receipes/${props.id}`}>
        <div className="food-item-wrapper"
             onMouseEnter={() => setShowDetails(true)} 
             onMouseLeave={() => setShowDetails(false)}>
          <div className="food-item-image">
            <img src={props.image} alt="dish picture" />
            
          </div>
          <div className={`food-item-details ${showDetails ? "show": ""}`}
               >
            <h3>{props.title}</h3>
            <p>can be made in <span>{props.readyInMinutes}</span> minutes</p>
          </div>
        </div>
    </Link>
  )
}

export default FoodItem