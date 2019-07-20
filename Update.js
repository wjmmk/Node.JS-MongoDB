// Conexion a MongoDB Atlas.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";



/*
// Codigo que obtiene una consulta desde MongoDB Localmente.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Lupita Ferrozo 753" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
*/