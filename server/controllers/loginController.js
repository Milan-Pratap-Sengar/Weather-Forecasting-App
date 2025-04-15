const userSchema=require("../model/userSchema");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')

const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details"
            })
        }

        let userDetails=await userSchema.findOne({email})
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:"User does not exist. Please signup First"
            })
        }
        else{
            try{
                const hashedPassword=userDetails.password;
                const validatePassword=await bcrypt.compare(password,hashedPassword);
                if(!validatePassword){
                    return res.status(400).json({
                        success:false,
                        message:"Please enter correct Password"
                    })
                }
                const payload={
                    email:userDetails.email,
                    id:userDetails._id
                }
                const token= jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:"2h"})
                userDetails=userDetails.toObject();
                userDetails.JWTtoken=token
                userDetails.password=undefined
                return res.status(200).json({
                    success:true,
                    data:userDetails,
                    message:"You logged in successfully"
                })

            }
            catch(err){
                console.log(err);
                return res.status(400).json({
                    success:false,
                    message:"Something went wrong.Please try again later"
                })
            }
        }

    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            success:false,
            err:err.message,
            message:"Something went wrong.Please try again later"
        })
    }
}

module.exports=loginController;