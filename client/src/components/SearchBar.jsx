import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
 import axios from 'axios';
import toast from "react-hot-toast";

function Searchbar({setData}){
    const [city, setCity]=useState("");
    var lat=0;
    var long=0;   
    const locationUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=ae8f77918a61d4f19aaac1307932d4ff`

    async function submitHandler(e){
        e.preventDefault();
        // console.log(city);
        if(city==""){
            toast.error("Please Enter City Name")
            return;
        }

        const response1=await axios.get(locationUrl);
        lat=response1.data[0].lat
        long=response1.data[0].lon
        // console.log(lat)
        // console.log(long)

        const dataUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ae8f77918a61d4f19aaac1307932d4ff` 
        const response2=await axios.get(dataUrl);
        console.log(response2.data);
        
        setData(response2.data);
    }

    return (
        <div> 
            <form onSubmit={submitHandler} className="w-[100%]  p-3  mb-6 flex">
                <input className="bg-white w-[90%] text-sm p-2 rounded-md" type="text" placeholder="Search for city..." value={city} onChange={(event)=> setCity(event.target.value)} /> 
                <button type="submit" className=" bg-white text-black cursor-pointer ml-3 relative w-[8%] mt-[1%] h-[35px] sm:h-[38px]   rounded-full">
                    <IoSearchSharp className="absolute top-[30%] left-[27%]" />
                </button>
            </form>
            
        </div>
    )
}

export default Searchbar;