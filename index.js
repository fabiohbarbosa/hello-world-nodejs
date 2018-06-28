// Importar a biblioteca do express
const express = require('express')

// Criar uma instância do express
const app = express()

// Criar o endpoint e retornar um JSON
app.get('/api/hello-world', function (req, res) {
    res.json({message: 'Hello World!'});
});

// Inciar o servidor
app.listen(3000, function (){
    console.log('Example app listening on port 3000!');
});
