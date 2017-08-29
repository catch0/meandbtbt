let mongoose = require('mongoose');
let fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/debate', { useMongoClient: true });

let models_path = __dirname + '/../models';
// var MongoClient = require('mongodb').MongoClient;

// mongoose.connect('mongodb://dbot:Inexile!2@news-prototype-shard-00-00-pjiq3.mongodb.net:27017,news-prototype-shard-00-01-pjiq3.mongodb.net:27017,news-prototype-shard-00-02-pjiq3.mongodb.net:27017/admin?replicaSet=News-Prototype-shard-0?ssl=true', { useMongoClient: true })
// var uri = "mongodb://kay:Inexile!2@mycluster0-shard-00-00-wpeiv.mongodb.net:27017,mycluster0-shard-00-01-wpeiv.mongodb.net:27017,mycluster0-shard-00-02-wpeiv.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";
// MongoClient.connect(uri, function(err, db) {
//   db.close();
// });

fs.readdirSync(models_path).forEach(file => {
    if(file.includes('.js')){
        console.log(`loading ${file}...`);
        require(`${models_path}/${file}`);
    }
})
