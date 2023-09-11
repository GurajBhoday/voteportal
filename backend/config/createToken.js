const jwt = require("jsonwebtoken")

const createToken= (id)=>{
   const token =  jwt.sign({id},process.env.PAYLOAD,{
        expiresIn:"30d"
    })
    return token
}

module.exports = createToken