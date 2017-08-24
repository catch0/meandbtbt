let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, 'please enter a first name']
    },
    lastName: {
      type:String,
      required: [true, 'please enter a last name']
    },
    email: {
    type: String,
    required: [true, 'please enter an email address']
    }
},{timestamps:true})

mongoose.model('User', UserSchema);
