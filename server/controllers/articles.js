let mongoose = require('mongoose');
// let user = mongoose.model('User');

class ArticlesController {
    index(req,res){
      Articles.find({}).sort({natural: -1}).limit(2).pretty()
        // if(err){
        //   return res.json(err);
        //   console.log("articles controller error")
        // }
        // else{
        //   console.log("articles controller working")
        //   return res.json(article);
        // }
    }
}

module.exports = new ArticlesController();
