const express = require("express");
const Joi = require("joi");
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
const env = require("../config/env.json");
const { check } = require("../encrypt/encrypt");
const JWT_SECRET = env.JWT_SECRET;

// Testing
async function dashboard(req,res){
    let data = {
        username: "user1",
        nama:"namaorang1"
    }
    return res.json(data);
}

module.exports = dashboard;