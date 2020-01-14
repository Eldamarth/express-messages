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
}
const deleteMessage = (id) => {
    return Message.findByIdAndDelete(id)
}


module.exports = Message;
