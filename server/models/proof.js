let mongoose = require('mongoose');

let ProofSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'please submit a question'],
    minlength: [6, 'question needs to be at least 6 charachters '],
    maxlength:[140, 'question cannot be more than 140 charachters']
  },
{timestamps:true})

mongoose.model('Proof', ProofSchema);
