let mongoose = require('mongoose');
let fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/debate1', { useMongoClient: true });
// mongoose.connect('mongodb://dbot:Inexile!2@news-prototype-shard-00-00-pjiq3.mongodb.net:27017,news-prototype-shard-00-01-pjiq3.mongodb.net:27017,news-prototype-shard-00-02-pjiq3.mongodb.net:27017/admin?replicaSet=News-Prototype-shard-0?ssl=true', { useMongoClient: true })

let models_path = __dirname + '/../models';


fs.readdirSync(models_path).forEach(file => {
    if(file.includes('.js')){
        console.log(`loading ${file}...`);
        require(`${models_path}/${file}`);
    }
})
