//jshint esversion: 6


window.onload = function() {
  // document.getElementsByTagName("BODY")[0].style.pointerEvents = "all";
  let links = document.getElementsByTagName("a");
  let inputs = document.getElementsByTagName("input");
  console.log(inputs);
  for(let i = 0; i < links.length; i++){
    links[i].setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
  console.log("loaded");
};







