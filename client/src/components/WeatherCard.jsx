import Searchbar from "./searchbar";
import { BsFillCloudSunFill } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { BsCloudsFill } from "react-icons/bs";
import { useState } from "react";



function WeatherCard(){

    const [mainData,setData]=useState({
        "weather": [
          {
            "description": "clear sky",
          }
        ],
        "main": {
          "temp": 310.15,
          "humidity": 22,
        },
        "wind": {
          "speed": 0.84,
        },
        "clouds": {
          "all": 3
        },
        "name": "Delhi",
      });
    
    console.log(mainData.main);

    return (   
        <div className=" backdrop-blur-md bg-black/30 border border-white/20 rounded-md shadow-md absolute align-items top-[5%] left-[30%] h-[90%] w-[40%] bg-[red] flex-col p-5">
            <h1 className="w-[100%] font-bold text-center text-white mb-5 text-[2rem]">WEATHER APP</h1>

            <Searchbar setData={setData}/>
            
            <div className="mb-3  text-white w-[50%] h-[40%] ml-36 flex-col">
                <div className="text-[2rem]  p-1  w-full text-center">{mainData.name}</div>
                <div className="w-full text-[1.2rem] p-1 text-center">{mainData.weather[0].description}</div>
                    <BsFillCloudSunFill className="w-full  h-12 p-1 text-center"  />
                <div className="w-full  text-center p-1 text-[2.5rem]">{(mainData.main.temp - 273.15).toFixed(2) +" °C"}</div>
            </div>

            <div className=" text-white w-[100%] h-[28%] flex">
                <div className=" backdrop-blur-md bg-white/30 border border-white/20 rounded-md shadow-md flex-col p-4 justify-center m-3 items-center h-[90%] w-[30%] ">
                    <div className="w-[100%] h-[30%] mb-2 ">
                        <LuWind className="w-[100%] text-[2rem] text-center"/>
                    </div>
                    <h2 className="w-[100%] text-center text-[1.5rem] h-[30%] mb-2 ">
                        WINDSPEED
                    </h2>
                    <h2 className="w-[100%] text-center text-[1.3rem] h-[30%] mb-2 ">
                        {mainData.wind.speed+" m/s"}
                    </h2>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-md shadow-md flex-col p-4 justify-center m-3 items-center h-[90%] w-[30%] bg-[yellow] ">
                    <div className="w-[100%] h-[30%] mb-2 ">
                        <WiHumidity className="w-[100%] text-[2rem] text-center"/>
                    </div>
                    <h2 className="w-[100%] text-center text-[1.5rem] h-[30%] mb-2 ">
                        Humidity
                    </h2>
                    <h2 className="w-[100%] text-center text-[1.3rem] h-[30%] mb-2 ">
                    {mainData.main.humidity+" %"}
                    </h2>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20  rounded-md shadow-md flex-col p-4 justify-center m-3 items-center h-[90%] w-[30%] bg-[yellow] ">
                    <div className="w-[100%] h-[30%] mb-2 ">
                        <BsCloudsFill className="w-[100%] text-[2rem] text-center"/>
                    </div>
                    <h2 className="w-[100%] text-center text-[1.5rem] h-[30%] mb-2 ">
                        Clouds
                    </h2>
                    <h2 className="w-[100%] text-center text-[1.3rem] h-[30%] mb-2 ">
                        {mainData.clouds.all +" %"}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;