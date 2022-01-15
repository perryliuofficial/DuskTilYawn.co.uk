if (localStorage.getItem("darkTheme") === null) {
  darkTheme = true;
  localStorage.setItem('darkTheme', true);
}
else {
  darkTheme = localStorage.getItem('darkTheme');
}

function changeColour() {
  if (darkTheme) {
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log("set to dark");
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    console.log("set to light");
  }
}
changeColour();

function darkToggle() {
  darkTheme = !darkTheme;
  localStorage.setItem('darkTheme', darkTheme);
  changeColour();
}