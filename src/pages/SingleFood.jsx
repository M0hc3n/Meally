import React, { useEffect } from 'react'

import {useParams } from "react-router-dom"

import {useGlobalContext} from "../context"

function SingleFood() {

  const { receipes : receipe , setSearchedFor } = useGlobalContext()
  const { id } = useParams()

  useEffect(() => {
    setSearchedFor( { search: id, searchThrough: "id"})
    
  }, [0])
  
 const {
  title,
  image,
  dishTypes,
  vegetarian,
  glutenFree,
  dairyFree,
  veryHealthy: healthy,
  cheap,
  veryPopular: popular,
  instructions,
  spoonacularSourceUrl,
  extendedIngredients } = receipe

  const ingredients = (
    <p>
      {
        extendedIngredients?.map((ingerdient, key) => {
          return (`${key != extendedIngredients.length - 1 ? ingerdient.name + ", ": ingerdient.name + ". "}`)
        })
      }
    </p>
  )

  const receipeType = (
    <p>
      {
        dishTypes?.map((type, key) => {
          return (`${key != dishTypes.length - 1 ? type + ", ": type + ". "}`)
        })
      }
    </p>
  )
  


  return (
    <div className='single-food-container'>
      <h1>{title}</h1>
      <div className="single-food-image">
        <img src={image} alt="receipe picture" />
      </div>
      
      <p> <span>Dish Type : </span> {receipeType} </p>
      

      <div className="single-food-data">

        <div className="single-food-data-row">
          <span>Vegetarian : </span>
          {
            vegetarian ? <i class="fa-solid fa-circle-check"></i> :
                         <i class="fa-solid fa-circle-xmark"></i>
          }
        </div>
        
        <div className="single-food-data-row">
          <span>Gluten Free : </span>
          {
            glutenFree ? <i class="fa-solid fa-circle-check"></i> :
                         <i class="fa-solid fa-circle-xmark"></i>
          }
        </div>

        <div className="single-food-data-row">
          <span>Dairy Free : </span>
          {
            dairyFree ? <i class="fa-solid fa-circle-check"></i> :
                        <i class="fa-solid fa-circle-xmark"></i>
          }
        </div>

        <div className="single-food-data-row">
          <span>Healthy : </span>
          {
            healthy ? <i class="fa-solid fa-circle-check"></i> :
                      <i class="fa-solid fa-circle-xmark"></i>
          }
        </div>

        <div className="single-food-data-row">
          <span>Popular : </span>
          {
            popular ? <i class="fa-solid fa-circle-check"></i> :
                      <i class="fa-solid fa-circle-xmark"></i>
          }
        </div>

        <div className="single-food-data-row">
          <span>Cheap : </span>
          {
            cheap ? <i class="fa-solid fa-circle-check"></i> :
                    <i className="fa-solid fa-circle-xmark"></i>
          }
        </div>

        
        <div className="single-food-data-row">
          <span>Ingredients : </span> { ingredients }
        </div>

        <div className="single-food-data-row">
          <span>Description :</span> { instructions }
        </div>

        <div className="single-food-data-row">
          <span>Feeling hungry ? </span> <a href={spoonacularSourceUrl}>Click for more details ! </a>
        </div>
      </div>
    </div>
  )
}

export default SingleFood