var cats_are_stupid = 5;

// shamelessly ripped off w3schools
function loadXMLDoc(file) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cats_are_stupid = this.responseText;
      // document.getElementById("bananas").innerHTML = cats_are_stupid;
      cats_are_stupid=cats_are_stupid.split('\n');
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function thingy() {
  document.getElementById("bananas").innerHTML = cats_are_stupid;
}

function cookie_clicker(move) {
  var homer_simpson = '';
  for (var k=0; k<cats_are_stupid.length; k++) {
    if (cats_are_stupid[k].startsWith('e2e3 '+move)) {
      homer_simpson+=cats_are_stupid[k]+'<br>';
    }
  }
  document.getElementById('bananas').innerHTML = homer_simpson;
}
