const userLogic =require('../../Domain/userLogic')

 async function getAlluser(req,res){
        const body=res.body;

  const users=await userLogic.createUser(user)
  return users;
 }

  function getUserById(id){
  const user= userLogic.getUserById(id)
  return user;
 }

async function createUser(req,res){
        const body=res.body;
     try{
         //setting a new user witd data of require
        user:{
            name: body.name;
            email: body.email;
            age: body.age;
            status: 'A'
        }
        const userCreated=  await userLogic.createUser(user)
       return res.json({
            error: false,
            message: 'User created',
            user: userCreated
        })
     }catch(ex){
        return res.json({
            error: true,
            message: ex
        })
     }
    
     
   }

    function updateUser(id,user){
    const users=   userLogic.updateUser(id,user)
     return users;
   }

    function deleteUser(id){
    const users=   userLogic.deleteUser(id)
     return true;
   }

   module.exports={
    getAlluser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
   }