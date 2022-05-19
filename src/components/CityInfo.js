import React  , {useContext} from 'react'
import '../styleComponents/cityinfo.css'
import GlobalContext from './GlobalContext'
import { FaRegTired } from "react-icons/fa";


const  CityInfo = () => {
    const {data } = useContext(GlobalContext)
    const icon = (data.weather) ? data.weather[0].icon :"";
  return (
    (data.main) ?
    <section>
    <div className="city_info"> 
    <div>
     <h2>{data.name}</h2>
    <span className='country'>{(data.sys) ? `${data.sys.country} `: null}</span>    
    </div>
    
     <h3>{(data.main) && `${Math.round(data.main.temp)}`} <sup>°F</sup></h3>
     <img className='bold' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
     <p>
     {
       (data.weather) ? <> <span className='bold'> {data.weather[0].description}
       </span>  </> : null
     }
     </p>
    </div>

    </section> : <section>  
    <FaRegTired  className='icon'/>
    <span className='error'>is not found</span>
    <p>Pealse Entre New city Name</p>
     </section>
  )
}

export default CityInfo