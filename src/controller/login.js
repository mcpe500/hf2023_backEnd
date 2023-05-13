const express = require("express");
const Joi = require("joi");
const sequelize = require("../database/db");
const jwt = require('jsonwebtoken');
const env = require("../config/env.json");
const { check } = require("../encrypt/encrypt");
const JWT_SECRET = env.JWT_SECRET;

async function login(req, res) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const queryTeachers = 'SELECT * FROM teachers WHERE (username = ? or email = ?)';
        const [teachers, teachersMetadata] = await sequelize.query(queryTeachers, {
            replacements: [username, username],
            type: sequelize.QueryTypes.SELECT,
        });
        if (teachers) {
            let isPasswordMatch = await check(password, teachers.password);
            if (isPasswordMatch) {
                const token = jwt.sign(teachers, JWT_SECRET, {
                    expiresIn: '1h'
                })
                return res.send({
                    token
                });
            }
        }
        const queryStudents = 'SELECT * FROM students WHERE (username = ? or email = ?)';
        let [students, studentsMetadata] = await sequelize.query(queryStudents, {
            replacements: [username, username],
            type: sequelize.QueryTypes.SELECT,
        });
        if (students) {
            isPasswordMatch = await check(password, students.password);
            if (isPasswordMatch) {
                const token = jwt.sign(students, JWT_SECRET, {
                    expiresIn: '1h'
                })
                return res.send({
                    token
                });
            }
        }
        return res.status(400).send("Username or password is wrong");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

module.exports = login;
