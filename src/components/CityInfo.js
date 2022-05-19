import React  , {useContext} from 'react'
import '../styleComponents/cityinfo.css'
import GlobalContext from './GlobalContext'
import { WiDaySnow  , WiStrongWind , WiHumidity , WiThermometer} from "react-icons/wi";

const  CityInfo = () => {
    const {data } = useContext(GlobalContext)
  return (
    <section>
<div className='icon_situation'>
    <WiDaySnow className='icon'/>
    </div>
    <div className="city_info"> 
     <h4>{data.name}</h4>
     <h3>{(data.main) ?`${data.main.temp}° F` : null}</h3>
     <div>
     <p>
     {
       (data.main) ? <> <span className='bold'> {data.main.feels_like}
       </span> <WiThermometer className='icon_info'/>  </> : null
     }
     </p>
     <p>
     {
       (data.main) ? <> <span className='bold'> {data.main.humidity}
       </span> <WiHumidity className='icon_info'/>  </> : null
     }
     </p>
     <p>
     {
       (data.wind) ? <> <span className='bold'> {data.wind.speed}
       </span> <WiStrongWind className='icon_info'/>  </> : null
     }
     </p>
     </div>
    </div>
    <div></div>
    
    </section>
  )
}

export default CityInfo