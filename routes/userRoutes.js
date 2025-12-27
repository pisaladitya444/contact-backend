const {getUser,postUser,putUser,deleteuser} = require("../Controller/userController")

const route = require("express").Router()

route.get("/",getUser)
route.post("/",postUser)
route.put("/:id",putUser)
route.delete("/:id",deleteuser)

module.exports = route



