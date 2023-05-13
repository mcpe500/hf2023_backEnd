const axios = require('axios');
const url = require('../config/env.json').ai_endpoint;
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
// Testing

async function gpt(req, res) {
    let prompt = req.body.prompt;
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

