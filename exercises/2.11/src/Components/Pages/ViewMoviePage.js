/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render';
import {readAllMovies } from '../../models/movies';

const ViewMovie = () => {
  clearPage();
  const main = document.querySelector('main')
  main.innerHTML = `<table class="table table-bordered">
  <thead>
    <tr>
      <th>Titre</th>
      <th>Durée</th>
      <th>Budget</th>
      <th>Lien<th>
    </tr>
  </thead>
  <tbody>
  </tbody>  
</table>`

const arrayMovie = readAllMovies();

const mainMovie = all(arrayMovie);
const tbody = document.querySelector('tbody');
tbody.innerHTML += mainMovie;
};

function all(movies){
  let tbody = ''
  movies.forEach(movie => {
    tbody += `
    <tr>
    <td> ${movie.title}</td>
    <td> ${movie.duration}</td>
    <td> ${movie.budget}</td>
    <td> ${movie.link}</td>
    </tr>`;
  });
  return tbody
}

export default ViewMovie;
