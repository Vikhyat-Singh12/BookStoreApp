import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";                                                     // this is used to hide the data in database 

export const signup = async (req,res) => {
    try {
        const {fullname,email,password} = req.body;
        const  user = await User.findOne({email});

        if(user){
            return res.status (400).json({message:"User already exists"})
        }
        
        const hashPassword = await bcryptjs.hash(password,10);

        const createdUser = new User({
            fullname,
            email,
            password : hashPassword
        })

        await createdUser.save();                  // saving the user data in database

        res.status(200).json({message:"User created Succefully",
            user:{ _id: createdUser._id,
            email: createdUser.email,
            fullname: createdUser.fullname
        }})
    } catch (error) {
        console.log("Error"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password,user.password)

        if(!user || !ismatch){
            return res.status(400).json({message:"Invalid username or password"})
        }
        res.status(200).json({message:"Login Successful",
           user:{ _id: user._id,
            email: user.email,
            fullname: user.fullname
        }})
    } catch (error) {
        console.log("Error: "+error.message)
    }
}