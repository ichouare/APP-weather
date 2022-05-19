import {useState , useEffect} from 'react'
import './App.css';
import FormSearch  from './components/formSearch';
import CityInfo  from './components/CityInfo';
import Search from './components/GlobalContext'
import Error from './components/Error'

function App() {
  const [data , setData] = useState('')
   const [city , SetCity] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba9411c5d8f521391b00ab274c799014`
  useEffect(()=> {
    async function getInfo(){
      const response = await fetch(url)
      const data = await response.json()
      if(data){
        setData(data)
      }
      else{
        setData(null)
      }
    }
getInfo()
  },[city])
  return (
    <div className="App">
    <Search.Provider value={{city, SetCity ,data }}>
     <h1>app whater</h1>
     <h1>{city}</h1>
     <FormSearch/>
     {
       (data) ?  <CityInfo/> :  <Error />
     }
     
    
    </Search.Provider>
    </div>
  );
}

export default App;
