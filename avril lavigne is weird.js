var cats_are_stupid;
var rainbow_unicorns = 'e2e3';

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
      cats_are_stupid=cats_are_stupid.split('\n');
      for (i=0; i<cats_are_stupid.length; i++) {
        cats_are_stupid[i]=cats_are_stupid[i].split(' ').slice(1);
      }
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function inflatablethingsarefun(stupidcats, move) {
  document.getElementById("emmawatson").innerHTML="";
  rainbow_unicorns += ' ' + move;
  document.getElementById("spinning_around_on_office_chairs_is_cool").innerHTML="Move list: " + rainbow_unicorns;
  homersimpson=[];
  for (apples=0; apples<stupidcats.length; apples++) {
    if (stupidcats[apples][0] == move) {
      homersimpson.push(stupidcats[apples].slice(1));
    }
  }
  if (homersimpson[0].length==0) {
    document.getElementById("something").innerHTML = "nothing to see here";
  }
  else {
    blobfish=[homersimpson[0][0]];
    for (butt=1; butt<homersimpson.length; butt++) {
      if (homersimpson[butt][0] != homersimpson[butt-1][0]) {
        blobfish.push(homersimpson[butt][0]);
      }
    }
    document.getElementById("something").innerHTML = "Available moves: " + blobfish;
    magic(blobfish);
  }
  cats_are_stupid=homersimpson;
}

function getthispartystarted(zebras_are_stripey, move) { // easy, c6 (andryushkov), Nc6 (balkan), Nh6 (hippopotamus)
  loadXMLDoc(zebras_are_stripey);
  inflatablethingsarefun(cats_are_stupid, move);
}

function magic(movelist) {
  for (n=0; n<movelist.length; n++) {
    var potato=movelist[n];
    var butter=document.createElement("BUTTON");
    var margarine=document.createTextNode(potato);
    butter.onclick = function (yourface) {
      return function () {
        inflatablethingsarefun(cats_are_stupid,yourface);
      };
    }(potato);
    butter.appendChild(margarine);
    lasers_are_cool = document.getElementById("emmawatson");
    lasers_are_cool.appendChild(butter);
  }
}
