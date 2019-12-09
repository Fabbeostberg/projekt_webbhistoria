function mode() {
  console.log("hejsan");
  var element = document.body;
  element.classList.toggle("dark-mode");

  var navbar = document.getElementById("navbar");
  var content = document.getElementsByClassName("container-text")[0];

  content.classList.toggle("dark-mode");
}
