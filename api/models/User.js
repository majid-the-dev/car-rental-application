const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;