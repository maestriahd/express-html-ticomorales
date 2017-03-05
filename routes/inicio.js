// Importa las librerias necesarias para tener acceso al ruteador
var express = require('express');
var router = express.Router();

// Función que se ejecuta cuando la petición es recibida por el servidor
// reacciona UNICAMENTE al método GET de HMTL
// más información al respecto de los diferentes métodos implementados en el
// protocolo HTML:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// Cuando recibe la petición GET, ejecuta la función() con los parámetros:
// req (request/petición)
// res (response/respuesta)
router.get('/', function(req, res) {
  // ejecuta el render de la vista `index` (archivo en `views/index.hbs`)
  // entrega información a la vista para ser inyectada en el HTML
  res.render('inicio',
    { titulo: 'La FotoGAYfía de Velandia',
      objetivo: 'Este proyecto pretende recopilar, digitalizar y exhibir el material fotográfico existente (pero desconocido) que Manuel Antonio Velandia Mora documentó sobre las manifestaciones sexual-políticas realizadas por los grupos de minorías sexuales, a finales del siglo XX en Bogotá.',
      foto: 'https://www.mundogato.net/wp-content/uploads/normas-de-higiene-en-los-gatos-1-485x300.jpg',
      frase: 'Siempre que buscamos explicarnos, nos convertimos en historias: Omar Rincon (2006)',
    }
  );
});
// exprta la ruta para ser consumida por la aplicación
module.exports = router;
