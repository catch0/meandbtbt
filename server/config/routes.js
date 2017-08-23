let path = require('path');
let Questions = require ('../controllers/proofs');
let Answers = require('../controllers/articles');


module.exports = function(app){
    // app.get('/article', Article.index);
    // app.post('/article', Article.create);
    //
    // app.get('/proof', Proof.show);

    app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
