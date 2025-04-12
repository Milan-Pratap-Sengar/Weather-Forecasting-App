import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";



function LoginForm(){

    const [formData,setFormData]=useState({username:"",password:""});
    const {username,password}=formData;
    const navigate=useNavigate();

    function submitHandler(event){
        event.preventDefault();
        if(formData.username=="" || formData.password==""){
            toast.error("Please Fill All The Details")
            return;
        }
        navigate("/weather")
    }

    function changeHandler(event){
        const {name,value}=event.target;
        setFormData((prev)=>(
            {
            ...prev, [name]:value
            }
        ))
    }

    return (
        <div className="flex items-center justify-center backdrop-blur-md bg-white/30 border border-white/20 shadow-md border rounded-md text-white absolute top-[15%] left-[10%] w-[80%] h-[70%]  sm:w-[70%] sm:h-[70%] sm:top-[12%] sm:left-[15%] md:top-[18%] md:left-[26%] md:w-[50%] md:h-[65%] lg:w-[30%] lg:left-[35%]">
            <div className= "flex-col w-[95%] h-[90%] ">

                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-[35px] font-semibold">Login</h1>
                </div>

                <form onSubmit={submitHandler} className="h-[60%] w-[100%]">
                    <div className="relative  m-5">
                        <input type="email" placeholder="Email Address" className="border  text-sm md:text-[15px] border-2 border-white w-[100%] text-overflow text-[12px] p-3 mb-4 rounded-[100px]" name="username" value={username} onChange={changeHandler}/>
                        <FaUser className="absolute top-[25%] right-3"/>
                    </div>
                    <div className="relative  m-5">
                        <input type="password" placeholder="Password" className="border border-2 text-sm md:text-[15px] border-white w-[100%] p-3 rounded-[100px]" name="password" value={password} onChange={changeHandler}/>
                        <RiLockPasswordFill className="absolute top-4 right-3" />
                    </div>
                    <NavLink>
                        <p className="ml-[40%] text-[12px] text-right w-[50%] mt-[-10px]">Forgot Password?</p>
                    </NavLink>
                    <div className=" m-5">
                        <button type="submit" className="bg-white text-black cursor-pointer active:scale-90  transition-transform duration-200 text-lg font-semibold w-[100%] p-3 mt-2 rounded-[100px]">Login</button>
                    </div>
                </form>
                <div className=" text-[15px] text-center w-[85%] mt-5 md:mt-8 lg:mt-7  ml-7 font-sm">
                    <p>Don't have an account? {"  "} <br />
                        <NavLink className="font-bold underline text-[#0000CD] hover:text-[#005A9C]" to={"/signup"}>
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;