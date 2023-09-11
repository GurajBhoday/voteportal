const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        const DBURL = process.env.MONGO_URI //|| "mongodb://localhost:27017/userlog"
        const conn = await mongoose.connect(DBURL,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected successfully : ${ conn.connection.host}`)


    }catch(error){
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB

