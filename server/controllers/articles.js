let mongoose = require('mongoose');
// let user = mongoose.model('User');
// let Proof = mongoose.model('Proof');

class ArticlesController {
    index(req,res){
      Article.find({})
    }


}

module.exports = new ArticlesController();
