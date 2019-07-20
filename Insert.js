/*  // Configuracion para mongoDB localmente
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
*/

  // Configuracion para conectar con MongoDB Atlas en Red.
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wjmmk:Willis_85@locallibrary-syvnh.mongodb.net/test?retryWrites=true&w=majority";



// Con este codigo se Inserta la Coleccion Clientes ó Customers
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});  



////////////////////////////////////////


/*
// Codigo para Insertar la Coleccion Productos
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 154, name: 'Chocolate Heaven' },
    { _id: 155, name: 'Tasty Lemons' },
    { _id: 156, name: 'Vanilla Dreams' },
    { _id: 152, name: 'Vanilla Coco' },
    { _id: 157, name: 'Tasty Fresa' },
    { _id: 158, name: 'Verde Esperanza' },
    { _id: 153, name: 'Caova Amor' },
    { _id: 159, name: 'Persiana Americana' },
    { _id: 151, name: 'Basilalo Brother' },
    { _id: 160, name: 'Amo Guitarra' },
    { _id: 165, name: 'Yamile Zenaidona' },
    { _id: 162, name: 'Maracuya Leche' },
    { _id: 164, name: 'Manzana Verde' },
  ];
  dbo.collection("productos").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});   

*/

///////////////////////////////


/*
// Codigo que Inserta la Coleccion Pedidos
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 1, product_id: 154, status: 1 },
    { _id: 2, product_id: 152, status: 0 },
    { _id: 3, product_id: 160, status: 1 },
    { _id: 4, product_id: 155, status: 0 },
    { _id: 5, product_id: 167, status: 1 },
    { _id: 6, product_id: 151, status: 0 }
  ];
  dbo.collection("pedidos").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 
*/