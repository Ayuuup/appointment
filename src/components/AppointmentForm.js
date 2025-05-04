import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'

const AppointmentForm = () => {

  const [cities,setCities] = useState([])
  const [displayedCityId , setDisplayedCityId] = useState('')
  const [selectedServiceId,setSelectedServiceId] = useState('')
  const [servicesPerCity , setServicesPerCiy] = useState([])
  const[date,setDate] = useState('')
  const [duration,setDuration] = useState('')
   // const [selectedLocationId , setSelectedLocationId] = useState('')
  const [slotsPerCityPerService,setSlotsPerCityPerService ] = useState([])

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
   const fetchServicesPerCity = async()=>{
    await axios.get(`http://localhost:3001/api/services/${displayedCityId}`)
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

// fetch corresponding slots for a particular city and particular service
// useEffect(()=>{
//   const fetchSlotsPerCityPerService = async()=> {
//     await axios.get("http://localhost:3001/api/slots",{
//       params:{slotCityId:displayedCityId,slotServiceId:selectedServiceId,date,duration}
//     }).then(()=>console.log("fetching slots")).catch((error)=>console.log(error))
//   }
//   fetchSlotsPerCityPerService()
// },[selectedServiceId])

const submitAppointmentForm = async (e)=>{
  e.preventDefault()
  await axios.get("http://localhost:3001/api/slots",{
          params:{slotCityId:displayedCityId,slotServiceId:selectedServiceId,date,duration}
        }).then(()=>console.log("fetching slots")).catch((error)=>console.log(error))
      }



  return (
    <div>
        <div>
            <select value={displayedCityId} onChange={(e)=>setDisplayedCityId(e.target.value)}>
                <option value="" >select city</option>
                {cities.map((city)=>(<option key={city.id} value={city.id} >{city.cityName}</option>))}
            </select>
        </div>
        {servicesPerCity.length >0 && <form onSubmit={(e)=>submitAppointmentForm(e)}>
            <select value={selectedServiceId} onChange={(e)=>setSelectedServiceId(e.target.value)}>
                <option>select a service</option>
                {servicesPerCity.map((service)=>(<option key={service.id} value={service.id}>{service.serviceName}</option>))}
            </select>
            <label>enter your date of appointment</label>
            <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
            <label>Enter the number of hours you need in the appintment</label>
            <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)}></input>
            <button type="submit">submit</button>
            </form>}
        {}
    </div>
  )
}

export default AppointmentForm
