const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

// @description: for home page
// Method: GET
route.get("/", services.home_route);
// @description: for adding new user
// Method: GET
route.get("/add-user", services.add_user);
// @description: for updating user
// Method: GET
route.get("/update-user", services.update_user);

//RESTFULL API's
//CREATE
route.post("/api/users", controller.create);
//READ
route.get("/api/users", controller.find);
//UPDATE
route.put("/api/users/:id", controller.update);
//DELETE
route.delete("/api/users/:id", controller.delete);

module.exports = route;
