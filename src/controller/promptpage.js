const express = require("express");
const Joi = require("joi");
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
const env = require("../config/env.json");
const JWT_SECRET = env.JWT_SECRET;

// Testing
async function promptpage(req, res) {
    const token = req.headers["x-auth-token"]
    if(!token){
        return res.status(400).send("Token not found")
    }
    console.log(token)
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
        if (err) {
            console.log('Invalid token');
        } else {
            console.log('Decoded token:', decoded);
        }
    });
}

module.exports = promptpage;