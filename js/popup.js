//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    let links = document.getElementsByTagName("a");
    console.log(links);
for(let i = 0; i < links.length; i++){
  links[i].style.fontFamily = "comic-sans";
  console.log(links[i]);
}

    // chrome.tabs.getSelected(null, function(tab) {
    //   d = document;

    //   var f = d.createElement('form');
    //   f.action = 'http://gtmetrix.com/analyze.html?bm';
    //   f.method = 'post';
    //   var i = d.createElement('input');
    //   i.type = 'hidden';
    //   i.name = 'url';
    //   i.value = tab.url;
    //   f.appendChild(i);
    //   d.body.appendChild(f);
    //   f.submit();
    // });
  }, false);
}, false);