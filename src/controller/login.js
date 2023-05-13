const express = require("express");
const sequelize = require("../database/db");
const { Sequelize, QueryTypes, DatabaseError } = require('sequelize');
const jwt = require('jsonwebtoken');
const port = 3000
// const JWT_SECRET = env.JWT_SECRET

async function login(req, res) {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        // const testQuery = 'SELECT * FROM teachers';
        // const [test, teachersMetadata] = await sequelize.query(testQuery, {
        //     type: sequelize.QueryTypes.SELECT,
        // });
        // console.log(test)
        const queryTeachers = 'SELECT * FROM teachers WHERE username = ? AND password = ?';
        const [teachers, teachersMetadata] = await sequelize.query(queryTeachers, {
            replacements: [username, password],
            type: sequelize.QueryTypes.SELECT,
        });
        console.log(teachers)
        if(teachers){
            return res.send({
                teachers
            });
        }
        // const queryStudents = 'SELECT * FROM students WHERE username = ? AND password = ?';
        // const [students, studentsMetadata] = await sequelize.query(queryStudents, {
        //     replacements: [username, password],
        //     type: sequelize.QueryTypes.SELECT,
        // });
        // if(students.length > 0){
        //     return res.send("loginStudent");
        // }
        return res.status(400).send("Username or password is wrong");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

module.exports = login;
