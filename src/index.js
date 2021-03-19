const express = require('express');
const app = express();

// Configuracion del servidor
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Rutas(routes)
app.use(require('./routes/employees'));

// Iniciar servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en Puerto 3000', app.get('port'));
});