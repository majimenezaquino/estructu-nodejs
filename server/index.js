const express =require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
 
//const of config
const {
    SERVER_PORT,
    MONGO_URI
} =require('../config')

const app =express();
//user router
app.use('/api',require('../Application/routes'))
//parser data to json 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(()=>{
    //if the connection is correct
    app.listen(SERVER_PORT,()=>{
        console.log(`Connecion establecidad por el puerto ${SERVER_PORT}`)
    })
})
.catch(ex=>{
  console.log(ex)
})
    




