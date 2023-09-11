const asyncHandler = require("express-async-handler")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const createToken = require("../config/createToken")


const registerUser = asyncHandler(async(req,res)=>{

    console.log("called register user")

    const {name,email,password,pic} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("All fields are required")
    }
    const usesrExists = await User.findOne({email})
    if(usesrExists){
        res.status(400)
            throw new Error("User Already Exists")       
        }

    try{
        const user = await User.create({name,email,password,pic})
        res.status(201)
        res.send("User created Successfully !!")

    }catch(error){
        res.status(400)
        throw new Error("Something went wrong")
    }
})

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    if( !email || !password){
        res.status(400)
        throw new Error("All fields are required")
    }

    const user = await User.findOne({email})
    if(user && user.matchPassword(password)){
        let token = createToken(user._id)
        let updatedUser = await User.updateOne({_id:user._id},{$set:{token:token}})
        delete updateUser.password
        res.status(200)
        res.json({_id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:token})
    }else{
        res.status(401)
        throw new Error("Crediential does not match")
    }

    

})

const logOut = asyncHandler(async(req,res)=>{
    let user =req.user
    const updatedResult = await User.updateOne({_id:user._id},{
        $set:{token:null}
    })

    res.status(200)
    res.send("User Logged out successfully !!!")
})

const updateUser = asyncHandler(async(req,res)=>{
    const {_id,name,pic} = req.body
    const user = await User.updateOne({_id},{
        $set:{name:name, pic:pic}
    })
    res.status(201)
    res.json(user)
})


module.exports ={registerUser,authUser,logOut}