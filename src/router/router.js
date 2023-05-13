const express = require("express");
const sequelize = require("../database/db");
const login = require("../controller/login");
const register = require("../controller/register");


const router = express.Router();

router.post("/login", login);
router.post("/registerGuru", register.guru);
router.post("/registerStudent", register.student);

module.exports = router;
