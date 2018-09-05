const express =require('express')
const router=express.Router();
const userController =require('../controllers/userController')

router.get('/',function(req,res){
    res.json({
        message: 'Prueba de usuarios'
    })
 })


//create user
 router.post('/user',userController.createUser)


module.exports =router;