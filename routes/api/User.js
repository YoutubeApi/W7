const express = require('express');
const router = express.Router();
// const grvatar =require('gravatar');
// const bcrypt = require('bcryptjs');
// const {check ,validationResult} = require('express-validator/check');
const User = require('../../models/User')
//@route  GET pref/users
//@desc    Register user
//@ access Public

router.post('/createUsers',async(req,res) =>{ 
    
    const {name , email,password   } = req.body;
    const userDoc = new User({name , email,password})
    await userDoc.save().then((response)=>{
        res.send("Datasaved")
    })
    .catch((err)=>{
        res.send(err)
    })
    // res.send("create User")
});



module.exports = router;