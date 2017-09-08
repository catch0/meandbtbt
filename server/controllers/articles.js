let mongoose = require('mongoose');
// let user = mongoose.model('User');

class ArticlesController {
    index(req,res){
      Test.find({}).limit(2)
    }
}

module.exports = new ArticlesController();
