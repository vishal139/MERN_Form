const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs')
const validator = require('validator');


const signupTempCopy = require('../model/userSchema');


router.post('/signup',async(req,res)=>{
    try
    {
        const{name,email,password} = req.body;

        if(!validator.isEmail(email))
        {
            res.send({
                message:"Please enter a valid email Id",
                val:"1"
            })
        }
        else
        {
            const userFound =  await signupTempCopy.findOne({email});
            if(userFound)
            {   
                res.send({
                    message:"Email is registered already",
                    val:"2",
                })
            }   
            else
            {
                const securePassword = await bcryptjs.hash(password,10);
                const newUser = new signupTempCopy({
                    name,
                    email,
                    password:securePassword,
                });
                const data = await newUser.save()
                if(data)
                {
                    res.send({
                        message:"User registration successfull",
                        val:"3",
                    })
                }
            }
        }
        
    }
    catch(err)
    {
        console.log(err);
    }
})

router.post('/signin',async(req,res)=>{
    try
    {
        const{email,password} = req.body;
        const userEmail = await signupTempCopy.findOne({email});
        const hashPassword = await bcryptjs.compare(password,userEmail.password);
        if(userEmail&&hashPassword)
        {
            res.send({
               message:"User login successfull",
               user:userEmail
            })
        }
        else
        {
            res.send({
                message:"invalid input credentials"
            })
        }
    }
    catch
    {

    }
})

module.exports = router;