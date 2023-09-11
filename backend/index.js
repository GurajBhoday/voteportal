const express = require("express")
require("dotenv").config()
const connectDB =require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
connectDB()
const app = express()


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("This is User Log App")
})


app.use("/api/user",userRoutes)

// for error handling
app.use(notFound)
app.use(errorHandler)


PORT = process.env.PORT || 8181



app.listen(PORT,()=>{console.log(`listening at port ${PORT}`)})

