const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const protect =asyncHandler(async(req,res,next)=>{
    let token;
    let user
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        user = await User.findById(decoded.id).select("-password")
        if(user.token && user.token==token){
            req.user=user
            next()
        }else{

        
        res.status(440)
        throw new Error("Not valid token")
        }
    }
    if(!token){
        res.status(400)
        throw new Error("Not authorized, no token")
    }
})

module.exports ={protect}