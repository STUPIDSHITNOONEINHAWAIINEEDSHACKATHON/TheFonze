/*jshint esversion: 6 */

window.onload = function() {
var currentPosition = window.scrollY;

function scrollUp() {

    window.scroll(0,0);
}

function scrollUp2() {

    window.scroll(0,1500);
}

      window.onscroll = function (){
        setTimeout(scrollUp, 7500);
        setTimeout(scrollUp2, 5000);
        
      };
  

};