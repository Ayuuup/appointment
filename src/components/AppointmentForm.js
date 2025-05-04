import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'

const AppointmentForm = () => {

  const [cities,setCities] = useState([])
  const [displayedCityId , setDisplayedCityId] = useState('')
  const [servicesPerCity , setServicesPerCiy] = useState([])

  useEffect(()=>{
    const fetchcities = async()=>{
        await axios.get("http://localhost:3001/api/cities").
        then((res)=>{setCities(res.data.cities)
        })
        .catch((error)=>console.log(error))
    }

    fetchcities()
     
  },[])

  useEffect(()=>{
   const fetchServicesPerCity = async(cityId)=>{
    await axios.get(`http://localhost:3001/api/services/${cityId}`)
    .then((res)=>{setServicesPerCiy(res.data.services)
         console.log(res.data.services)}
)
 
   }
   if(displayedCityId){
    fetchServicesPerCity(displayedCityId)
   }
   else{
    setServicesPerCiy([])
   }
   
},[displayedCityId])


  return (
    <div>
        <div>
            <select value={displayedCityId} onChange={(e)=>setDisplayedCityId(e.target.value)}>
                <option value="" >select city</option>
                {cities.map((city)=>(<option key={city.id} value={city.id} >{city.cityName}</option>))}
            </select>
        </div>
        {servicesPerCity.length >0 && <div>
            <select>
                <option>select a service</option>
                {servicesPerCity.map((service)=>(<option key={service.id} value={service.id}>{service.serviceName}</option>))}
            </select>
            </div>}
    </div>
  )
}

export default AppointmentForm
