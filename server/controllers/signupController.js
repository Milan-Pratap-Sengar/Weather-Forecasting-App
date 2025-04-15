const userSchema=require("../model/userSchema");
const bcrypt=require("bcrypt")

const signupController=async(req,res)=>{
    try{
        const {firstName,lastName,email,password,confirmPassword,contact}=req.body

        if(!firstName || !lastName || !email || !password || !confirmPassword || !contact){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details."
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm Password mismatched."
            })
        }

        const existingUser=await userSchema.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists. Please Login"
            })
        }
        
        else{
            let hashedPassword;
            try{
                hashedPassword=await bcrypt.hash(password,10)
            }
            catch(err){
                console.log(err);
                return res.status(400).json({
                    success:false,
                    message:"Something went wrong while hashing"
                })
            }

            const savedUser=await userSchema.create({firstName,lastName,email,password:hashedPassword,contact})
            return res.status(200).json({
                success:true,
                message:"Your account has created successfully",
                data:savedUser
            })
        }

    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            success:false,
            err:err.message,
            message:"Something went wrong while signup"
        })

    }
}

module.exports=signupController