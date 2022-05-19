import {useState , useEffect} from 'react'
import './App.css';
import FormSearch  from './components/formSearch';
import CityInfo  from './components/CityInfo';
import Search from './components/GlobalContext'
import Error from './components/Error'

function App() {
  const [show , setShow] = useState(false)
  const [data , setData] = useState('')
   const [city , SetCity] = useState('')
  
  return (
    <div className="App">
    <Search.Provider value={{city, SetCity ,data  ,setShow , setData}}>
     <FormSearch/>
     {
       (data) &&  <CityInfo/> 
     }
     
    
    </Search.Provider>
    </div>
  );
}

export default App;
