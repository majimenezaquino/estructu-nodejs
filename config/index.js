//port server
const SERVER_PORT= process.env.PORT || 3001;
const MONGO_URI= ' mongodb://localhost/db_chat_full'
module.exports={
    SERVER_PORT,
    MONGO_URI
}
