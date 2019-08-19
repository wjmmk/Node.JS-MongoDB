require('dotenv').config();// Con esta linea logramos cargar en nuestro programa las variables del archivo .env

// Conexion a MongoDB Atlas.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Lowstreet 4" };
  var newvalues = { $set: {name: "Mickey", year: 25, address: "Lupita Ferrozo 753" } };
  dbo.collection("students").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
