const UserRepository =require('../Repositories/userRepository')

 function getAlluser(user){
  const users= UserRepository.createUser(user)
  return users;
 }

  function getUserById(id){
  const user= UserRepository.getUserById(id)
  return user;
 }

   async function createUser(user){
    const users=  await UserRepository.createUser(user)
     return users;
   }

    function updateUser(id,user){
    const users=   UserRepository.updateUser(id,user)
     return users;
   }

    function deleteUser(id){
    const users=   UserRepository.deleteUser(id)
     return true;
   }

   module.exports={
    getAlluser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
   }