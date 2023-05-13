const express = require('express')
const cors = require('cors')
const Joi = require('joi');
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));

const router = require('./src/router/router')

app.use("/",router)

app.listen(3000, () => console.log('Listening on port 3000'));