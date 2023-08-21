const express = require('express');
const conectarDB =require('./config/db');

// creamos el servidor
const app = express();

// conectamos a la DB
conectarDB();
// definimos ruta principal
app.get('/',(req, res)=>{
    res.send('hola mundo');
})
app.listen(4000,() => {
    console.log('El servidor esta corriendo!!')
} )
