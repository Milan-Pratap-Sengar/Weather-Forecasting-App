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
        <div className=" backdrop-blur-md bg-white/30 border border-white/20 shadow-md text-white absolute top-[10%] left-[32%] w-[35%] h-[80%] border rounded-md flex items-center justify-center">
            <div className="w-[85%] h-[90%] flex-col">

                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-[35px] font-semibold">Signup</h1>
                </div>

                <form onSubmit={submitHandler} className="h-[60%] w-[100%]">
                    <div className="flex justify-between m-5">
                        <input type="text"  placeholder="FirstName" className="border border-2 border-white w-[45%] p-3 rounded-[100px]" name="firstName" value={firstName} onChange={changeHandler}/>
                        <input type="text"  placeholder="LastName" className="border border-2 border-white w-[45%] p-3 rounded-[100px]" name="lastName" value={lastName} onChange={changeHandler}/>
                    </div>
                    <div className="m-5">
                        <input type="email"  placeholder="Email" className="border border-2 border-white w-[100%] p-3 rounded-[100px]" name="email" value={email} onChange={changeHandler}/>
                    </div>
                    <div className="m-5">
                        <input type="number"  placeholder="Contact No" className="border border-2 border-white w-[100%] p-3 rounded-[100px]" name="contact" value={contact} onChange={changeHandler}/>
                    </div>
                    <div className="flex justify-between m-5">
                        <input type="password"  placeholder="Password" className="border border-2 border-white w-[45%] p-3 rounded-[100px]" name="password" value={password} onChange={changeHandler}/>
                        <input type="password"  placeholder="Confirm Password" className="border border-2 border-white w-[45%] p-3 rounded-[100px]" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
                    </div>
                    <div className=" m-5">
                        <button type="submit" className="bg-white text-black cursor-pointer text-lg font-semibold w-[100%] p-3 mt-5 rounded-[100px]">Create Account</button>
                    </div>
                </form>
                <div className="mt-[15%] ml-[22%] font-sm">
                    <p>Already have a account? {"  "}
                        <NavLink className="font-bold" to={"/"}>
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Signup;