const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use = bodyParser.json();
require('dotenv').config();

app.use('/api',require('./routes/api/hotels'));

app.get('/',(req,res)=>{
    res.json({Message:"Welcome to the app of hotels info manager"});
})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})