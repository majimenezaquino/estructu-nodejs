const express =require('express')
const router=express.Router();
//user all router
 router.use(require('./user'))


module.exports =router;