let mongoose = require('mongoose');
// let user = mongoose.model('User');

class ArticlesController {
    index(req,res){
      Article.find({})
    }


}

module.exports = new ArticlesController();
