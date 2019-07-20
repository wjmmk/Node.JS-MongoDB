var express = require('express'); // Importa Express al programa
var app = express(); // Se Crea una aplicacion u objeto tipo Express

// Este bloque de codigo hace una peticion con el verbo get() y devuelve la Cadena Hello World
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Este bloque Inicializa el Servidor en el puerto 3000 y envia un mesaje por consola 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
}); 
