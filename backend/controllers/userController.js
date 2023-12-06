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

const updateTemplate = asyncHandler(async (req, res) => {
    const { template } = req.body;
    const user = req.user;

    if(!user) {
        res.status(403);
        throw new Error("User not authorized");

    }

    try {
        user.selectedTemplate = template;
        await user.save();

        res.status(202).json({ message: "Update successful"});
    }catch(error) {
        res.status(501);
        throw new Error("template shit didnt work");
    }
})
 
//Update user's profile data
const updateProfileData = asyncHandler(async (req, res)=>{
    const { firstName, lastName, company, pic } = req.body;
    const user = req.user;

    if(!user) {
        res.status(403);
        throw new Error("User not authorized");
    }
     try{
        user.firstName = firstName;
        user.lastName = lastName;
        user.company = company;
        user.pic = pic;
        await user.save()

        res.status(203).json({ message: "Profile data updated successfully"});
     }catch(error) {
        res.status(502);
        throw new Error("Failed to update profile data")
     }
})
module.exports ={registerUser,authUser,logOut, updateTemplate, updateProfileData}