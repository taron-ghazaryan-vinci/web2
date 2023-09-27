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

/* Read all the films from the menu
   GET /films?minimum-duration=150 : filtering
*/
router.get('/', (req, res, next) => {
  const filterDuration =
    req?.query['minimum-duration']
      ? req.query['minimum-duration']
      : undefined;
  let filteredMenu;
  console.log(`order by ${filterDuration ?? 'not requested'}`);
  if (filterDuration){
    filteredMenu = [...MENU].filter((MENU) => MENU.duration >= filterDuration);
  }
  console.log('GET /films');
  res.json(filteredMenu ?? MENU);
});

router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const indexOfPizzaFound = MENU.findIndex((films) => films.id == req.params.id);

  if (indexOfPizzaFound < 0) return res.sendStatus(404);

  res.json(MENU[indexOfPizzaFound]);
});

// Create a film to be added to the menu.
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration >= 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget >= 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;


  console.log('POST /films');

  const lastItemIndex = MENU?.length !== 0 ? MENU.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? MENU[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title : title,
    duration : duration,
    budget : budget,
    link : link
  };

  MENU.push(newFilm);

  res.json(newFilm);
});


module.exports = router;
