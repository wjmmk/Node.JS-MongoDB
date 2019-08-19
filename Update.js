// Conexion a MongoDB Atlas.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";

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
