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
        <div className=" backdrop-blur-md bg-white/30 border border-white/20 shadow-md text-white absolute top-[18%] left-[35%] w-[30%] h-[65%] border rounded-md flex items-center justify-center">
            <div className= "w-[85%] h-[90%] flex-col">

                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-[35px] font-semibold">Login</h1>
                </div>

                <form onSubmit={submitHandler} className="h-[60%] w-[100%]">
                    <div className="relative  m-5">
                        <input type="email" placeholder="Email Address" className="border border-2 border-white w-[100%] p-3 mb-4 rounded-[100px]" name="username" value={username} onChange={changeHandler}/>
                        <FaUser className="absolute top-4 right-5"/>
                    </div>
                    <div className="relative  m-5">
                        <input type="password" placeholder="Password" className="border border-2 border-white w-[100%] p-3 rounded-[100px]" name="password" value={password} onChange={changeHandler}/>
                        <RiLockPasswordFill className="absolute top-4 right-5" />
                    </div>
                    <NavLink>
                        <p className="ml-[63%] text-sm  w-[33%] mt-[-10px]">Forgot Password?</p>
                    </NavLink>
                    <div className=" m-5">
                        <button type="submit" className="bg-white text-black cursor-pointer text-lg font-semibold w-[100%] p-3 mt-2 rounded-[100px]">Login</button>
                    </div>
                </form>
                <div className=" mt-5 ml-20 font-sm">
                    <p>Don't have an account? {"  "}
                        <NavLink className="font-bold" to={"/signup"}>
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;