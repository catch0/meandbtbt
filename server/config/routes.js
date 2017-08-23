let path = require('path');
let Questions = require ('../controllers/proofs');
let Articles = require('../controllers/articles');


module.exports = function(app){
    app.get('/articles', Articles.index);
    // app.post('/article', Article.create);
    //
    // app.get('/proof', Proofs.show);

    app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
