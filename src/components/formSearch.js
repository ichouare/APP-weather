import React  , {useContext  , useEffect}from 'react'
import '../styleComponents/formSearch.css'
import Search from "./GlobalContext"

const  FormSearch = ()  => {
    

    const {city , SetCity , setShow ,setData } = useContext(Search) 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba9411c5d8f521391b00ab274c799014`
  useEffect(()=> {

  },[city])

    const handeler = (event) => {
       event.preventDefault()
           async function getInfo(){
      const response = await fetch(url)
      const data = await response.json()
      if(data){
        setData(data)
       setShow(true)
       SetCity('')
      
      }
      else{
        setData(null)
        setShow(false)
      }
    }
getInfo()
    
    }
  return (
    <form onSubmit={(event)=>handeler(event)}>
    <input type="text" placeholder="Enter Your City" value={city} onChange={(event)=> SetCity(event.target.value)} />
    </form>
  )
}

export default FormSearch