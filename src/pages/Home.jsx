import React from 'react'

import {useGlobalContext} from "../context"

// importing components
import Loading from "../components/Loading"
import SearchBar from "../components/SearchBar"
import FoodItem from "../components/FoodItem"

// importing notfound page
import Error from "../components/Error"


function Home() {

  const { loading , error, receipes } = useGlobalContext()

  if (loading){
    return (
    <div className='home-container'>
      <SearchBar />
      <Loading />
    </div>
    )  
  }

  if(error.show ||! receipes){
    return <Error/>
  }

  console.log(receipes);

  const foodItems = receipes?.map( receipe => {
    return (
      <FoodItem key={receipe.id} {...receipe}/>
    )
  })

  console.log(foodItems);

  return (
    <main className='home-container'>
      <SearchBar />
      <div className="food-list">
        {foodItems}
      </div>
    </main>
  )
}

export default Home