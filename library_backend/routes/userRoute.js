let express = require("express")
let route = express.Router()
let {userController} = require("../controller")
const { isLogin } = require("../middleware/auth")

route.post("/register", userController.userRegister)
route.get("/get", isLogin, userController.getAllUser)
route.delete("/deleteUser/:id", userController.deleteUser)
route.put("/updateUser/:id", userController.updateUser)

module.exports = route