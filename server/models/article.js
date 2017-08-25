let mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'please submit a question'],
    minlength: [6, 'question needs to be at least 6 charachters '],
  },
  url:{
    type: String,
  },
  trendingWord:{
    type: String,
  },
  score:{
    type: Number,
  }
},{timestamps:true})

mongoose.model('Article', ArticleSchema);
