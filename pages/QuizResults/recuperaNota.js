let arr = window.location.href.split('?');
const nota = arr[1];

let title = document.getElementById("title");

title.innerHTML += nota

