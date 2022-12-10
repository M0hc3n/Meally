import React, { useEffect } from 'react'

import {useGlobalContext} from "../context"

function SearchBar() {

  const { searchedFor , setSearchedFor } = useGlobalContext();


  const handleSubmit = (e) =>{
    e.preventDefault()

    setSearchedFor(prev => ({...prev, searchThrough: "name"}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Look for some Yummys ! </label>
      
      <div className="input-container">
        <input type="text" id='search' value={searchedFor.search} onChange={(e) => setSearchedFor(prev => ({...prev, search: e.target.value}))}/>

        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

    </form>
  )
}

export default SearchBar