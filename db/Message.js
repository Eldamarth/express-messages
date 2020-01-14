//Message Model
const mongoose = require('mongoose');
const db = require('./config');
const database = db.connection;

const messageSchema = mongoose.Schema({
    name: String,
    message: String
})


const Message = mongoose.model("Message", messageSchema, "messages");

const newMessage = (msg) => {
    console.log(msg);
    const newMessage = new Message(msg);
    return newMessage.save()
    .then(results => results);
}

const findAllMessages = () => {
    return Message.find()
    .then(results => results)
}
const findMessage = (id) => {
    return Message.findById(id)
    .then(results => results)
    .catch(err => {throw err})
}
const deleteMessage = (id) => {
    return Message.findByIdAndDelete(id)
}
const updateMessage = (id) => {
    return Message.replaceOne(id)
}


module.exports = {Message,newMessage,findMessage,findAllMessages,deleteMessage,updateMessage};
