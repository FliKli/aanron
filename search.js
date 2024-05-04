const f = document.getElementById('c_form');
const q = document.getElementById('c_query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'http://127.0.0.1:5500/index.html?q=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81';








const inputField = document.querySelector('input');
const displayAreaField = document.getElementById('nameList');

inputField.addEventListener('input', addNames);

function addNames(inputevent) {
  displayAreaField.textContent = inputevent.target.value;
}









function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);


