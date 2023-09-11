const notFound = (req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next)=>{
    res.json({
        message:error?.message,
        details:error.stack
    })
}

module.exports = {notFound, errorHandler}