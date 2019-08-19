require('dotenv').config();// Con esta linea logramos cargar en nuestro programa las variables del archivo .env

// Configuracion para conectar con MongoDB Atlas en Red.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

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
