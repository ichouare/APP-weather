import React  , {useContext }from 'react'
import '../styleComponents/formSearch.css'
import Search from "./GlobalContext"

const  FormSearch = ()  => {
    

    const {city , SetCity} = useContext(Search) 

    const handler = (e) => {
      SetCity(e.target.value)
    }
  return (
    <form>
    <input type="text" placeholder="Enter Your City" value={city} onChange={(e) => handler(e)} />
    </form>
  )
}

export default FormSearch