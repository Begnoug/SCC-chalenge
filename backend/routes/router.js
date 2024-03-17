import express from 'express';
import userController from '../controllers';
const router = require('express').Router();

router.get("/", (req,res,next)=>{
    res.send("Hello Hadrami")
})

router.get("/soumission", (req,res,next)=>{
    res.send("You can submit your work !")
})


export default router