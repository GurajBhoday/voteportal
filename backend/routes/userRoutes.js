const express = require("express")
const { authUser, registerUser, logOut } = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/login",authUser)
router.post("/signup",registerUser)
router.get("/logout",protect,logOut)

module.exports = router