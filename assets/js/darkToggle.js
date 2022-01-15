if (localStorage.getItem('theme') === null) {
  theme = "dark";
  localStorage.setItem('theme', theme);
  console.log("no")
  console.log(theme)
}
else {
  theme = localStorage.getItem('theme');
  console.log("yes")
  console.log(theme)
}

function changeColour() {
  if (theme == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log("adsdasasdasd")
  }
  if (theme == "light"){
    document.documentElement.setAttribute('data-theme', 'light');
    console.log("adssadasdassadas")
  }
}
changeColour(theme);


function darkToggle() {
  if (theme == "dark") {theme = "light"}
  else {theme = "dark"};
  localStorage.setItem('theme', theme);
  changeColour();
}