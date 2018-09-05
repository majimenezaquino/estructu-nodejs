const UserSchema =require('./schemas/users')

async function getAlluser(){
  const users= await  UserSchema.find({});
  return users;
 }

 async function getUserById(id){
  const user= await  UserSchema.find(id);
  return user;
 }

   async function createUser(user){
    const users= await  UserSchema.create(user)
     return users;
   }

   async function updateUser(id,user){
    const users= await  UserSchema.findByIdAndUpdate(id,user,{new: true});
     return users;
   }

   async function deleteUser(id){
    const users= await  UserSchema.findByIdAndRemove(id)
     return true;
   }

   module.exports={
    getAlluser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
   }