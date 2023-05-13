const axios = require('axios');
const url = require('../config/env.json').ai_endpoint;
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
// Testing

async function gpt(req, res) {
    const token = req.headers["x-auth-token"]
    if(!token){
        return res.status(400).send("Token not found")
    }
    console.log(token);
    
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
        if (err) {
            console.log('Invalid token');
        } else {
            console.log('Decoded token:', decoded);
        }
    });
    let prompt = req.body.prompt;
    console.log(prompt)
    // prompt = "hello";
    let resp;
    await axios.post(url, { prompt })
        .then(response => {
            console.log(response.data);
            resp = response.data;
        })
        .catch(error => {
            console.error(error);
        });
        return res.json(resp);
}

module.exports = gpt;

