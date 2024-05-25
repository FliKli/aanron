const f = document.getElementById('c_form');
const q = document.getElementById('c_query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'http://127.0.0.1:5500/index.html';


const c_query = document.getElementById("c_query");

console.log(c_query)
c_query.addEventListener('input', doThing);


function doThing(){}
  // сюда логику поиска (сортировать, удалять, выдовать)
  function cityFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('city_search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("citySee");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
