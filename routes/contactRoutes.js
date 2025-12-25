const {getContact,postContact,putContact,deleteContact} = require("../Controller/contactController")

const route = require("express").Router()

route.get("/",getContact)
route.post("/",postContact)
route.put("/:id",putContact)
route.delete("/:id",deleteContact)

module.exports = route