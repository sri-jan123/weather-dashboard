require('dotenv').config();
const express=require('express')
const app=express()
const CORS=require('cors');


const port=process.env.PORT || 3000;


const weatherRoute = require('./routes/weather');
app.use('/', weatherRoute);
app.use(CORS())

app.get('/',function(req,res){
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
