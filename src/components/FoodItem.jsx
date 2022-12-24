import React from 'react'
import {Link} from "react-router-dom"

import {useGlobalContext} from "../context"

import { REQUEST_BY_NAME_KEY } from "../hooks/utils/keyWords" 


const { useState } = React 

function FoodItem(props) {

  const [showDetails, setShowDetails] = useState(false)
  const {searchedFor} = useGlobalContext()
  
  // there is a change in the api schema when the query is a look by name query
  let sourceImage = searchedFor.searchThrough === REQUEST_BY_NAME_KEY ? 
                    `https://spoonacular.com/recipeImages/${props.image}` : 
                    props.image

  return (
    <Link to={`/receipes/${props.id}`}>
        <div className="food-item-wrapper"
             onMouseEnter={() => setShowDetails(true)} 
             onMouseLeave={() => setShowDetails(false)}>
          <div className="food-item-image">
            <img src={sourceImage} alt="dish picture" />
            
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