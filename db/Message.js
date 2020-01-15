//Message Model
const mongoose = require('mongoose');
const db = require('./config');
// const database = db.connection;
const autoIncrement = require('mongoose-auto-increment');
const messageSchema = mongoose.Schema({
    name: String,
    message: String
})
autoIncrement.initialize(mongoose);
messageSchema.plugin(autoIncrement.plugin, "Message");

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
    .then (results =>  results)
    .catch(err => {throw err})
}

const updateMessage = (id, msg) => {
    return Message.updateOne({_id: id}, msg)
    .then (results => results)
    .catch (err => {throw err})
}


module.exports = {Message,newMessage,findMessage,findAllMessages,deleteMessage,updateMessage};
