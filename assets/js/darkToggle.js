if (localStorage.getItem('theme') === null) {
  theme = "dark";
  localStorage.setItem('theme', theme);
}
else {
  theme = localStorage.getItem('theme');
}

function changeColour() {
  if (theme == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("darkToggle").innerHTML = "<i class=\"bi bi-moon\"></i>";
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("darkToggle").innerHTML = "<i class=\"bi bi-brightness-high\"></i>";
  }
}
changeColour(theme);

function darkToggle() {
  if (theme == "dark") {theme = "light"}
  else {theme = "dark"};
  localStorage.setItem('theme', theme);
  changeColour();
}