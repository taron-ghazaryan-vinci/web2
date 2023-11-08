
import { clearPage } from '../../utils/render';

const AddMovie = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML=`
  <form>
    <tr>
      <th> Titre </th>
      <th> Durée </th>
      <th> Budget </th>
      <th> Lien </th>
    <tr>
  </form>`
};


export default AddMovie;
