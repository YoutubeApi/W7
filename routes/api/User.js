const express = require('express');
const router = express.Router();
// const grvatar =require('gravatar');
// const bcrypt = require('bcryptjs');
// const {check ,validationResult} = require('express-validator/check');
const User = require('../../models/User')
//@route  GET pref/users
//@desc    Register user
//@ access Public

router.post('/createUsers',(req,res) =>{ 
    
    res.send('User register')
});



module.exports = router;