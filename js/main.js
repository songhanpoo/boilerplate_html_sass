

function isDarkTheme() {
  var element = document.body;
  element.classList.toggle("theme-dark");
  var elementIconSVG = document.querySelector('#toggleTheme')
  let currentVal = elementIconSVG.getAttribute('xlink:href')
  if ( currentVal === "assets/img/symbol-defs.svg#icon-moon"){
    elementIconSVG.setAttribute('xlink:href', 'assets/img/symbol-defs.svg#icon-sun');
  } else {
    elementIconSVG.setAttribute('xlink:href', 'assets/img/symbol-defs.svg#icon-moon');
  }
}

let element = document.getElementById("widgetsContent")
function scrollToLeft(){
  element.scrollLeft -= 150;
}

function scrollRight(){
  element.scrollLeft += 150;
}