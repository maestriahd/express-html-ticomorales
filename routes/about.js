var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('about',
    { titulo: 'La FotoGAYfia de Velandia',
    subtitulo: 'un intento de memoria digital desde las fotos de Manuel Velandia Mora.',
    foto: 'https://fotogayfia.files.wordpress.com/2017/02/fotogayfia-velandia_page_1.jpg',
    parrafo: '¡Hola, qué tal! Este proyecto está en construcción. Ya hablaremos del asunto.',
  }
  );
});

module.exports = router;
