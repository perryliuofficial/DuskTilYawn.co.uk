if (localStorage.getItem("darkTheme") === null) {
  darkTheme = true;
  localStorage.setItem('darkTheme', true);
}
else {
  darkTheme = localStorage.getItem('darkTheme');
}

function changeColour() {
  if (darkTheme == true) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

changeColour();
console.log(darkTheme)

function darkToggle() {
  console.log("Button Pressed");
  darkTheme = !darkTheme;
  console.log(darkTheme);
  localStorage.setItem('darkTheme', darkTheme);
  changeColour();
}