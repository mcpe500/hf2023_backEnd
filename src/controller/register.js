const express = require("express");
const Joi = require("joi");
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
const env = require("../config/env.json");
const enkripsi = require("../encrypt/encrypt")

async function registerGuru(req, res) {
    try {
        const { username, email, name, password, confirm, birthdate, gelarTerakhir, kelasDiajar, jenjangDiajar } = req.body;
        const schema = Joi.object({
            username: Joi.string().required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            confirm: Joi.string().min(8).required(),
            birthdate: Joi.date().required(),
            gelarTerakhir: Joi.string().required(),
            kelasDiajar: Joi.number().required(),
            jenjangDiajar: Joi.number().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        if (password != confirm) {
            return res.status(400).send("Password and confirm password is not same")
        }
        const usernameQuery = `SELECT * FROM teachers WHERE username = ?;`;
        const [usernameResult, usernameMetadata] = await sequelize.query(usernameQuery, {
            replacements: [username],
            type: sequelize.QueryTypes.SELECT,
        });
        if (usernameResult) {
            return res.status(400).send("Username already exists");
        }
        const emailQuery = `SELECT * FROM teachers WHERE email = ?;`;
        const [emailResult, emailMetadata] = await sequelize.query(emailQuery, {
            replacements: [email],
            type: sequelize.QueryTypes.SELECT,
        });
        if (emailResult) {
            return res.status(400).send("Email already exists");
        }

        const age = new Date().getFullYear() - new Date(birthdate).getFullYear();
        let hash = await enkripsi.enkripsi(password)
        const query = `INSERT INTO teachers (username, email, name, password, age, birthdate, gelarTerakhir, kelasDiajar, jenjangDiajar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        const [results, metadata] = await sequelize.query(query, {
            replacements: [username, email, name, hash, age, birthdate, gelarTerakhir, kelasDiajar, jenjangDiajar],
            type: sequelize.QueryTypes.INSERT,
        });
        return res.send({
            message: "Register success",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

async function registerStudent(req, res) {
    try {
        const { username, name, email, birthdate, password, confirm, jenjangPendidikan } = req.body;
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().min(8).required(),
            confirm: Joi.string().min(8).required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            birthdate: Joi.date().required(),
            jenjangPendidikan: Joi.number().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        if (password != confirm) {
            return res.status(400).send("Password and confirm password is not same")
        }
        const usernameQuery = `SELECT * FROM students WHERE username = ?;`;
        const [usernameResult, usernameMetadata] = await sequelize.query(usernameQuery, {
            replacements: [username],
            type: sequelize.QueryTypes.SELECT,
        });
        if (usernameResult) {
            return res.status(400).send("Username already exists");
        }
        const emailQuery = `SELECT * FROM students WHERE email = ?;`;
        const [emailResult, emailMetadata] = await sequelize.query(emailQuery, {
            replacements: [email],
            type: sequelize.QueryTypes.SELECT,
        });
        if (emailResult) {
            return res.status(400).send("Email already exists");
        }
        const age = new Date().getFullYear() - new Date(birthdate).getFullYear();
        let hash = await enkripsi.enkripsi(password)
        const query = `INSERT INTO students (username, name, email, age, birthdate, password, jenjangPendidikan) VALUES (?, ?, ?, ?, ?, ?, ?);`;
        const [results, metadata] = await sequelize.query(query, {
            replacements: [username, name, email, age, birthdate, hash, jenjangPendidikan],
            type: sequelize.QueryTypes.INSERT,
        });
        return res.send({
            message: "Register success",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
module.exports = {
    "guru": registerGuru,
    "student": registerStudent
};