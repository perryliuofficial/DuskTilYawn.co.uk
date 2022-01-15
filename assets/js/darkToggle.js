if (localStorage.getItem('darkTheme') === null) {
  darkTheme = true;
  localStorage.setItem('darkTheme', true);
}
else {
  darkTheme = localStorage.getItem('darkTheme');
}

function changeColour() {
  
  if (darkTheme == true) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
changeColour();

function darkToggle() {
  darkTheme = !darkTheme;
  localStorage.setItem('darkTheme', darkTheme);
  changeColour();
}