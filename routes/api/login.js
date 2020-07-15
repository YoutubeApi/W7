const express = require('express');
const router = express.Router();

//@route  GET api/login
//@desc    Test route
//@ access Public


///auth >>> login
router.get('/', (req,res) =>{
     res.send('Login')
});

module.exports = router;