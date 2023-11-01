const mongoose = require('mongoose')
require('../db/config')

const student = mongoose.Schema({
    firstName : String,
    lastName : String,
    fatherName : String,
    phone : Number,
    password : String,
    confirmPass: String,
    adress : String,
    email : String,
    city : String,
    country : String,
    university : String,
    campus : String,
    fieldStudy : String,
    degree : String,
    gpa : Number,
    cgpa : Number,
    age : Number,
    martailStatus : String,
    bloodGroup : String,
    height : String,
    weight : String,
    hairColor : String,
    
})

module.exports = mongoose.model('students', student, 'students')