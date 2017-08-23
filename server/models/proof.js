let mongoose = require('mongoose');

let ProofSchema = new mongoose.Schema({
  proof: {
    type: String,
    required: [true, 'please submit a question'],
    minlength: [6, 'question needs to be at least 6 charachters '],
  },{timestamps:true})

mongoose.model("Proof", ProofSchema);
