const UserServices =require('../Services/userServices')

 function getAlluser(user){
  const users= UserServices.createUser(user)
  return users;
 }

  function getUserById(id){
  const user= UserServices.getUserById(id)
  return user;
 }

  async function createUser(user){
    const users=  await UserServices.createUser(user)
     return users;
   }

    function updateUser(id,user){
    const users=   UserServices.updateUser(id,user)
     return users;
   }

    function deleteUser(id){
    const users=   UserServices.deleteUser(id)
     return true;
   }

   module.exports={
    getAlluser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
   }