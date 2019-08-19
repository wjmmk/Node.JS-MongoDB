
require('dotenv').config();// Con esta linea logramos cargar en nuestro programa las variables del archivo .env

// Configuracion para conectar con MongoDB Atlas en Red.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});