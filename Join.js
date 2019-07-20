// Configuracion para conectar con MongoDB Atlas en Red.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";


/*  // Configuracion para mongoDB localmente
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('pedidos').aggregate([
    { $lookup:
       {
         from:'productos',
         localField:'product_id',
         foreignField:'_id',
         as:'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
*/