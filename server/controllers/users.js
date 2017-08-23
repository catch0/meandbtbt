let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:[true,'Name cannot be blank!']
  },
  lastName:{
    type:String,
    required:[true,'Last name cannot be blank!']
  },
  email:{
    type:String,
    required: [true, 'need email address']
  },
}, {timestamps:true})
mongoose.model("User", UserSchema)
