import user from '../models/user.js'
import bcrypt from 'bcryptjs'
import asyncHandler from '../middlewares/asyncHandler.js'
import createToken from '../utils/createToken.js'
import User from '../models/user.js';


const createUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        throw new Error("please fill all the fields")
    }
    const userExits = await User.findOne({email});
    if(userExits) res.status(400).send("user already exits");

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const newUser = new User({username,email,password: hashedPassword})


    try{
        await newUser.save()
        createToken(res,newUser._id)
        res.status(201).json({
            _id : newUser._id,
            username:newUser.username,
            email:newUser.email,
            isAdmin:newUser.isAdmin,
        })

    }
    catch(errror){
        res.status(400);
        throw new Error("invalid user data")
    }


});


const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    const existingUser = await User.findOne({email})
    console.log(existingUser)

})
export {createUser,loginUser};