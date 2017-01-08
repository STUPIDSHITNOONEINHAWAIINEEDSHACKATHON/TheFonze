/*jshint esversion: 6 */

window.onload = function() {
var currentPosition = window.scrollY;

function scrollUp() {

    window.scroll(0,0);
}

function scrollUp2() {

    window.scroll(0,1);
}

      window.onscroll = function (){
        setTimeout(scrollUp, 2500);
        setTimeout(scrollUp2, 8000);

      };


};