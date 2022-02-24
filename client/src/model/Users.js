import mongoose, {Schema} from 'monoose';
import bcrypt from 'bcrypt-as-promised';
const {Schema, model} = require('mongoose');

const Users = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    password2: {type: String, required: true},
    TelNumber: {type: String, unique: true, required: true},
})
 
module.exports = model('Users', Users)