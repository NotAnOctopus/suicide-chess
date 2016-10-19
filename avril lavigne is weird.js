var cats_are_stupid;
var rainbow_unicorns = ['e2e3'];

// shamelessly ripped off w3schools
function loadXMLDoc(file, move) {
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
      inflatablethingsarefun(cats_are_stupid,move);
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function inflatablethingsarefun(stupidcats, move) {
  document.getElementById("emmawatson").innerHTML="";
  rainbow_unicorns.push(move);
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
    document.getElementById("something").innerHTML = (rainbow_unicorns.length%2==1 ? "Available moves for black: " : "White plays: ") + blobfish;
    magic(blobfish);
  }
  cats_are_stupid=homersimpson;
}

function getthispartystarted(zebras_are_stripey, move) { // easy, c6 (andryushkov), Nc6 (balkan), Nh6 (hippopotamus)
  loadXMLDoc(zebras_are_stripey, move); // this function is needed when other moves come in as you can't do them all in one file
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

function badger(thing, thingy, thingything) { // this and the function below it restarts the search
  var butter=document.createElement("BUTTON");
  var margarine=document.createTextNode(thingything);
  butter.onclick = function (yourface) {
    getthispartystarted(thing,thingy);
  };
  butter.appendChild(margarine);
  lasers_are_really_cool = document.getElementById("emmawatson");
  lasers_are_really_cool.appendChild(butter);
}

function badgerbadgerbadger() { // mushroom mushroom
  cats_are_stupid=[];
  rainbow_unicorns=['e2e3'];
  document.getElementById("spinning_around_on_office_chairs_is_cool").innerHTML = "Move list: e2e3";
  document.getElementById("something").innerHTML = "available moves go here";
  document.getElementById("emmawatson").innerHTML = "";
  badger('easy.txt', 'a7a5', 'a5');
  badger('easy.txt', 'a7a6', 'a6');
  badger('andryushkov.txt', 'c7c6', 'c6');
  badger('easy.txt', 'e7e5', 'e5');
  badger('easy.txt', 'f7f5', 'f5');
  badger('easy.txt', 'f7f6', 'f6');
  badger('easy.txt', 'g7g6', 'g6');
  badger('easy.txt', 'h7h5', 'h5');
  badger('easy.txt', 'h7h6', 'h6');
  badger('easy.txt', 'b8a6', 'Na6');
  badger('balkan.txt', 'b8c6', 'Nc6');
  badger('easy.txt', 'g8f6', 'Nf6');
}
