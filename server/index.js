const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrls = require('./route/route')
const cors  =require('cors');
dotenv.config();
mongoose.connect(process.env.DATA_BASE_ACCESS).then(()=>{
    console.log("db connnection successfull");
}).catch((err)=>{
    console.log('db connecton failed');
})

app.use(express.json());
app.use(cors());
app.use('/app',routeUrls)

app.listen(8000,()=>{
    console.log('listening in port 8000');
})