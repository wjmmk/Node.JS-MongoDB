/*
// Conexion a MongoDB Atlas Basica.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";
*/

// Conexion a MongoDB ~ Atlas Actualizada.
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});


//  Codigo que obtiene una consulta desde MongoDB Atlas.
MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
      console.log(result); 
    db.close();
  });
});  

// Esta linea muestra todo lo que puedo hacer con el modulo "MongoClient".
//console.log(MongoClient);

//document.getElementById('$mongo').innerHTML = $MongoDB;
//document.getElementById('mongo').innerHTML = respuesta;
module.exports.result = this.result;

/*
// Codigo que obtiene una consulta desde MongoDB Localmente.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = {address:/^S/};
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

*/