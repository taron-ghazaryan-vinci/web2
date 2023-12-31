/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

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
      title: 'Avengers',  
      duration : 200,
      budget : 41452,
      link : 'blabla'
    },
    {
      id: 4,
      title: 'skch',
      duration : 100,
      budget : 1445555,
      link : 'blabla'
    },
    {
      id: 5,
      title: 'Hayastan',
      duration : 150,
      budget : 5000000,
      link : 'blabla'
    },
  ];


  const body = document.querySelector('body');
  body.addEventListener('click', controlMusic);

  renderTable(MENU);

  changingColorTable();

  function renderTable(menu){
    const menuTableAsString = getMenuTableAsString(menu);
    const main = document.querySelector('main');
    main.innerHTML += menuTableAsString;
  }

  function getMenuTableAsString(menu) {
    const menuTableLines = getAllTableLinesAsString(menu);
    const menuTable = addLinesToTableHeadersAndGet(menuTableLines);
    return menuTable;
  }
  
  function addLinesToTableHeadersAndGet(tableLines) {
    const menuTable = `
    <div class="table-responsive pt-5">
      <table class="table table-danger">
        <tr>
          <th>Titre</th>
          <th>Duration</th>
          <th>Budget</th>
          <th>Link</th>
        </tr>
        ${tableLines}    
      </table>
    </div>
    `;
    return menuTable;
  }
  
  function getAllTableLinesAsString(menu) {
    let filmTableLines = '';
  
    menu?.forEach((film) => {
      filmTableLines += `<tr>
        <td>${film.title}</td>
        <td>${film.duration}</td>
        <td>${film.budget}</td>
        <td>${film.link}</td>
      </tr>`;
    });
  
    return filmTableLines;
  }  

  function controlMusic(){
    const music = document.querySelector('audio');
    if(music.paused) music.play();
    else music.pause();
  }

  function changingColorTable(){
  const table = document.querySelector('table');
  table.addEventListener('mouseover', () => {
    table.className = 'table table-success';
  });

  table.addEventListener('mouseout', () => {
    table.className = 'table table-danger';
  });
  }