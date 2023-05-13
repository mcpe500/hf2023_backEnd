const express = require('express')
const Joi = require('joi');
const app = express()
const port = 3000
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKWxswYISltqdWWEIPq_jXAOt8-avZMkQ",
  authDomain: "proyekhackfest2023.firebaseapp.com",
  projectId: "proyekhackfest2023",
  storageBucket: "proyekhackfest2023.appspot.com",
  messagingSenderId: "409278838688",
  appId: "1:409278838688:web:4eb00473dae066e08256c5",
  measurementId: "G-13RGNXME41"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);


app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));

const router = require('./src/router/router')

app.use("/",router)

app.listen(3000, () => console.log('Listening on port 3000'));