require('dotenv').config();// Con esta linea logramos cargar en nuestro programa las variables del archivo .env

// Configuracion para conectar con MongoDB Atlas en Red.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url =process.env.MONGODB_URI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: 'Juan'};
  //dbo.collection("customers").deleteMany(myquery, function(err, obj) {
  dbo.collection("students").deleteMany(myquery, function(err, obj) {  
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
