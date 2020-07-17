const express = require('express');
const connectDB =require('./config/db');
const app = express();
//DB connect
connectDB();
app.get('/',(req,res)=>{
    res.send("API run ")
})


//Middlewer
app.use(express.json({extended:false}));
//Definde Users
app.use('/pref/users',require('./routes/api/User'));
app.use('/pref/login',require('./routes/api/login'));
app.use('/pref/profile',require('./routes/api/profile'));
app.use('/pref/add',require('./routes/api/add'));

const POTR =  5000;
app.listen(POTR , ()=>{
    console.log(`http://localhost:${POTR}`);
})