var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('about',
    { titulo: 'La FotoGAYfia de Velandia',
    foto: 'https://fotogayfia.files.wordpress.com/2017/02/fotogayfia-velandia_page_1.jpg',
    intro: 'FotoGAYfía pretende visibilizar el material fotográfico realizado por Manuel Antonio Velandia Mora para narrar visualmente el desarrollo histórico de las marchas realizadas por los movimientos de minorías sexuales en Bogotá a finales del siglo XX.',
    cita: 'Es a partir de estos registros fotográficos que se propone un ejercicio ‘crossmedia’ para dar visibilidad a unos hechos que, hasta el momento, están contados en primera persona de forma textual y cuyos relatos visuales son parte del archivo personal del artista y militante, Manuel Velandia.',
    cierre: 'De otra parte, aprovechar el entorno digital como plataforma de visibilización de esta información, denota la gran importancia que las generaciones de millenials y post-milenio, le están dando a la imagen para la construcción de referentes identitarios y de consumo de contenidos relacionados con la historia y las humanidades.',
  }
  );
});

module.exports = router;
