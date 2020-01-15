//User Model
const mongoose = require('mongoose');
const db = require('./config');
// const database = db.connection;
const autoIncrement = require('mongoose-auto-increment');

const userSchema = mongoose.Schema({
    name: String
})

autoIncrement.initialize(mongoose);
userSchema.plugin(autoIncrement.plugin, "User");

const User = mongoose.model("User", userSchema, "users");

const newUser = (usr) => {
    console.log(usr);
    const newUser = new User(usr);
    return newUser.save()
    .then(results => results);
}

const findAllUsers = () => {
    return User.find()
    .then(results => results)
}

const findUser = (id) => {
    return User.findById(id)
    .then(results => results)
    .catch(err => {throw err})
}

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)
    .then (results =>  results)
    .catch(err => {throw err})
}

const updateUser = (id, usr) => {
    return User.updateOne({_id: id}, usr)
    .then (results => results)
    .catch (err => {throw err})
}


module.exports = {User,newUser,findUser,findAllUsers,deleteUser,updateUser};
