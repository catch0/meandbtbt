let mongoose = require('mongoose');
// let user = mongoose.model('User');

class ArticlesController {
    index(req,res){
      Articles.find({})
        if(err){
          return res.json(err);
          console.log("articles controller error")
        }
        console.log("articles controller working")
        return res.json(article);

    }


}

module.exports = new ArticlesController();
