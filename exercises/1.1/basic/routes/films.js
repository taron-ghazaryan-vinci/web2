var express = require('express');
var router = express.Router();

const MENU = [
  {
    id: 1,
    title: 'Roi Lion',
    duration : 120 ,
    budget : 1000201,
    link : 'blabla'
  },
  {
    id: 2,
    title: 'Spiderman',
    duration : 150,
    budget : 1000000,
    link : 'blabla'
  },
  {
    id: 3,
    title: 'NiqueZebi',
    duration : 200,
    budget : 41452,
    link : 'blabla'
  },
  {
    id: 4,
    title: 'GadonBlyat',
    duration : 100,
    budget : 1445555,
    link : 'blabla'
  },
  {
    id: 5,
    title: 'Naxuy',
    duration : 150,
    budget : 5000000,
    link : 'blabla'
  },
];

// Read all the films from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  return res.json(MENU);
});

module.exports = router;
