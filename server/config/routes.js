let path = require('path');
let Articles = require('../controllers/articles');
let Users = require('../controllers/users');


module.exports = function(app){

    app.post('/users', Users.create);
    app.get('/articles', Articles.index);
    // app.post('/article', Article.create);
    //
    // app.get('/proof', Proofs.show);

    app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
