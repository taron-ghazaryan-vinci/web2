/* eslint-disable no-console */

import { clearPage } from '../../utils/render';
import {addMoviesList} from '../../models/movies'
import Navigate from '../Router/Navigate';

const AddMovie = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML=`
  <form class = "p-5">
    <input type = "text" id="title" placeholder ="Entrez le titre du film" require ="true" class="form-control mb-3">
    <input type = "text" id="duration" placeholder ="Entrez la durée du film" require ="true" class="form-control mb-3">
    <input type = "text" id="budget" placeholder ="Entrez le budget du film" require ="true" class="form-control mb-3">
    <input type = "text" id="link" placeholder ="Entrez le lien du film" require ="true" class="form-control mb-3">
    <input type="submit" class = "btn btn-danger">
  </form>`

  const form = document.querySelector('form');
  const title = document.querySelector('#title');
  const duration = document.querySelector('#duration');
  const budget = document.querySelector('#budget');
  const link = document.querySelector('#link');


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const movieToBeCreated = {
      title: title.value,
      duration: duration.value,
      budget: budget.value,
      link: link.value,
    };
    
    addMoviesList(movieToBeCreated);
    Navigate('/');
  });
}  
export default AddMovie;
