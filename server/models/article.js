let mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'please submit a question'],
    minlength: [6, 'question needs to be at least 6 charachters '],
    maxlength:[140, 'question cannot be more than 140 charachters']
  },
  url:{
    type: String,
  },
  tredingWord:{
    type: String,
  },
  score:{
    type: Number,
  }
},{timestamps:true})

mongoose.model('Proof', ProofSchema);
