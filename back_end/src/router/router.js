const express = require("express");
const sequelize = require("../database/db");
const login = require("../controller/login");


const router = express.Router();

router.post("/login", login);

module.exports = router;
