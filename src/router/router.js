const express = require("express");
const sequelize = require("../database/db");
const login = require("../controller/login");
const register = require("../controller/register");
const dashboard = require("../controller/dashboard");


const router = express.Router();

router.post("/login", login);
router.post("/registerGuru", register.guru);
router.post("/registerStudent", register.student);
router.get("/dashboard", dashboard)

module.exports = router;
