const express = require('express');
const router = express.Router();

//@route  GET api/add
//@desc    Test route
//@ access Public


////posts >>>add

router.get('/', (req,res) =>{ 
    res.send('Add')
});

module.exports = router;