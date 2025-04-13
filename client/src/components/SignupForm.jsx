import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(){

    const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",contact:"", password:"", confirmPassword:""});
    const {firstName,lastName,email,contact,password,confirmPassword}=formData;
    const navigate=useNavigate();

    function submitHandler(event){
        event.preventDefault();
        if(formData.firstName=="" || formData.lastName=="" || formData.email=="" || formData.contact=="" || formData.password=="" || formData.confirmPassword==""  ){
            toast.error("Please Fill All The Details")
            return;
        }
        if(formData.password != formData.confirmPassword){
            toast.error("Password Mismatched.")
            return;
        }
        console.log(formData);
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
        <div className=" backdrop-blur-md bg-white/30 border border-white/20 shadow-md text-white absolute top-[10%] left-[10%] w-[80%] h-[80%] sm:w-[70%] sm:h-[80%] sm:top-[12%] sm:left-[17%] md:top-[13%] md:left-[28%] md:w-[50%] md:h-[75%] lg:left-[10%] lg:w-[40%] lg:h-[75%] lg:left-[30%] border rounded-md flex items-center justify-center">
            <div className="w-[85%] h-[90%] md:w-[90%] md:h-[95%] flex-col">

                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-[35px] font-semibold">Signup</h1>
                </div>

                <form onSubmit={submitHandler} className="h-[60%] w-[100%] lg:h-[70%] ">
                    <div className="flex justify-between m-5">
                        <input type="text"  placeholder="FirstName" className="border h-[5%] lg:p-4 text-sm md:text-[15px]  border-2 border-white w-[45%] p-3 rounded-[100px]" name="firstName" value={firstName} onChange={changeHandler}/>
                        <input type="text"  placeholder="LastName" className="border h-[5%] lg:p-4  text-sm md:text-[15px] border-2 border-white w-[45%] p-3 rounded-[100px]" name="lastName" value={lastName} onChange={changeHandler}/>
                    </div>
                    <div className="m-5">
                        <input type="email"  placeholder="Email" className="border h-[5%] lg:p-4  text-sm md:text-[15px] border-2 border-white w-[100%] p-3 rounded-[100px]" name="email" value={email} onChange={changeHandler}/>
                    </div>
                    <div className="m-5">
                        <input type="number"  placeholder="Contact No" className="border text-sm md:text-[15px] lg:p-4  h-[5%] border-2 border-white w-[100%] p-3 rounded-[100px]" name="contact" value={contact} onChange={changeHandler}/>
                    </div>
                    <div className="flex justify-between m-5">
                        <input type="password"  placeholder="Password" className="border h-[5%] text-sm md:text-[15px] lg:p-4  border-2 border-white w-[45%] p-3 rounded-[100px]" name="password" value={password} onChange={changeHandler}/>
                        <input type="password"  placeholder="Confirm Password" className="border h-[5%] text-sm md:text-[15px] lg:p-4  border-2 border-white w-[45%] p-3 rounded-[100px]" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
                    </div>
                    <div className=" m-5">
                        <button type="submit" className="bg-white text-black cursor-pointer active:scale-90  lg:p-3 transition-transform duration-200 h-[5%] text-md font-semibold w-[100%] p-2 mt-5 rounded-[100px]">Create Account</button>
                    </div>
                </form>
                <div className="mt-[15%] text-sm md:text-[15px] lg:mt-[2%]  text-center ml-[5%] font-sm">
                    <p>Already have a account? {"  "} <br />
                        <NavLink className="font-bold underline text-[#0000CD]  hover:text-[#005A9C] " to={"/"}>
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Signup;