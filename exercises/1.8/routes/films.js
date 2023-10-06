/* eslint-disable eqeqeq */
const express = require('express');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

// eslint-disable-next-line prefer-template, no-path-concat
const jsonDbPath = __dirname + '/../data/films.json';

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
   GET /films?minimum-duration=150:filtering
*/
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  const minimumFilmDuration = req?.query
    ? Number(req.query['minimum-duration'])
    : undefined;

  const films = parse(jsonDbPath, MENU); 
    
  if (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
    return res.sendStatus(400);

  if (!minimumFilmDuration) return res.json(films);

  const filmsReachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumFilmDuration
  );
  return res.json(filmsReachingMinimumDuration);
});

// eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const films = parse(jsonDbPath, MENU);

  const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(films[indexOfFilmFound]);
});

// Create a film to be added to the menu.
// eslint-disable-next-line consistent-return
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  const films = parse(jsonDbPath, MENU);

  const existingFilm = films.find(
    (film) => film.title.toLowerCase() === title.toLowerCase()
  );
  if (existingFilm) return res.sendStatus(409);

  console.log('POST /films');

  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title,
    duration,
    budget,
    link
  };

  films.push(newFilm);
  serialize(jsonDbPath, films);
  res.json(newFilm);
});


// Delete a pizza from the menu based on its id
// eslint-disable-next-line consistent-return
router.delete('/:id', (req, res) => {
  console.log(`DELETE /films/${req.params.id}`);

  const films = parse(jsonDbPath, MENU);

  // eslint-disable-next-line eqeqeq
  const foundIndex = films.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromMenu = films.splice(foundIndex, 1);
  const itemRemoved = itemsRemovedFromMenu[0];

  serialize(jsonDbPath, films);

  res.json(itemRemoved);
});


// Update a film based on its id and new values for its parameters
// eslint-disable-next-line consistent-return
router.patch('/:id', (req, res) => {
  console.log(`PATCH /films/${req.params.id}`);

  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;


  console.log('POST /films');

  if ((!title && !duration && !budget) || title?.length === 0 || link?.length === 0 || duration< 0  || budget<0 ) return res.sendStatus(400);

  const films = parse(jsonDbPath, MENU);

  const foundIndex = films.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm = {...films[foundIndex], ...req.body};

  films[foundIndex] = updatedFilm;

  res.json(updatedFilm);
});


// eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
  const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if ((!title && !duration && !budget) || title?.length === 0 || link?.length === 0 || duration< 0  || budget<0 ) return res.sendStatus(400);

  const {id} = req.params;
  // eslint-disable-next-line eqeqeq
  const indexOfFilmFound = MENU.findIndex((film) => film.id == id);

  if (indexOfFilmFound < 0) {
    const newFilm = { id, title, link, duration, budget };
    MENU.push(newFilm);
    return res.json(newFilm);
  }

  // eslint-disable-next-line eqeqeq
  const foundIndex = MENU.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm = {...MENU[foundIndex], ...req.body};

  MENU[foundIndex] = updatedFilm;

  res.json(updatedFilm);
});

module.exports = router;
