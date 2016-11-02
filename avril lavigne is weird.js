var cats_are_stupid;
var rainbow_unicorns = ['e2e3'];
var chessboard=["RNBQKBNR".split(""), "PPPPPPPP".split(""), "xxxxxxxx".split(""), "xxxxxxxx".split(""), "xxxxxxxx".split(""), "xxxxpxxx".split(""), "ppppxppp".split(""), "rnbqkbnr".split("")];

// loadXMLDoc function shamelessly ripped off w3schools
function getthispartystarted(file, move) {
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
        cats_are_stupid[i]=cats_are_stupid[i].split(' ');
      }
      inflatablethingsarefun(cats_are_stupid,move);
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function inflatablethingsarefun(stupidcats, move) {
  document.getElementById("emmawatson").innerHTML="Loading...";
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
    document.getElementById("emmawatson").innerHTML="";
  }
  else if (homersimpson.length == 1 && homersimpson[0].length==1 && homersimpson[0][0].endsWith('t')) {
    rainbow_unicorns.pop(); // fixes parity bug
    getthispartystarted(homersimpson[0][0], move);
  }
  else {
    blobfish=[homersimpson[0][0]];
    for (butt=1; butt<homersimpson.length; butt++) {
      if (homersimpson[butt][0] != homersimpson[butt-1][0]) {
        blobfish.push(homersimpson[butt][0]);
      }
    }
    document.getElementById("something").innerHTML = (rainbow_unicorns.length%2==1 ? "Available moves for black: " : "White plays: ") + blobfish;
    document.getElementById("emmawatson").innerHTML="";
    magic(blobfish);
  }
  cats_are_stupid=homersimpson;
  someone_buy_me_a_gopro(move);
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
  // move the doc.something = move for black/white to here
}

function badger(thing, thingy, thingything) { // this helps the function below restart the search
  var butter=document.createElement("BUTTON");
  var margarine=document.createTextNode(thingything);
  butter.onclick = function (yourface) {
    getthispartystarted(thing,thingy);
  };
  butter.appendChild(margarine);
  lasers_are_really_cool = document.getElementById("emmawatson");
  lasers_are_really_cool.appendChild(butter);
}

function badgerbadgerbadger() { // restarts the search
  cats_are_stupid=[];
  rainbow_unicorns=['e2e3'];
  chessboard=["RNBQKBNR".split(""), "PPPPPPPP".split(""), "xxxxxxxx".split(""), "xxxxxxxx".split(""), "xxxxxxxx".split(""), "xxxxpxxx".split(""), "ppppxppp".split(""), "rnbqkbnr".split("")];
  document.getElementById("spinning_around_on_office_chairs_is_cool").innerHTML = "Move list: e2e3";
  document.getElementById("something").innerHTML = "available moves go here";
  document.getElementById("emmawatson").innerHTML = "";
  display();
  badger('easy.txt', 'a7a5', 'a5');
  badger('easy.txt', 'a7a6', 'a6');
  badger('i secretly want someone to duct tape me to a ceiling above a swimming pool.txt', 'b7b5', 'b5');
  // badger('i secretly want someone to duct tape me to a ceiling above a swimming pool.txt', 'b7b6', 'b6');
  // badger('i secretly want someone to duct tape me to a ceiling above a swimming pool.txt', 'c7c5', 'c5');
  badger('andryushkov.txt', 'c7c6', 'c6');
  // badger('easy.txt', 'd7d5', 'd5');
  // badger('easy.txt', 'd7d6', 'd6');
  badger('easy.txt', 'e7e5', 'e5');
  badger('i secretly want someone to duct tape me to a ceiling above a swimming pool.txt', 'e7e6', 'e6');
  // mushroom mushroom
  badger('easy.txt', 'f7f5', 'f5');
  badger('easy.txt', 'f7f6', 'f6');
  badger('easy.txt', 'g7g6', 'g6');
  badger('i secretly want someone to duct tape me to a ceiling above a swimming pool.txt', 'g7g5', 'g5');
  badger('easy.txt', 'h7h5', 'h5');
  badger('easy.txt', 'h7h6', 'h6');
  badger('easy.txt', 'b8a6', 'Na6');
  badger('balkan.txt', 'b8c6', 'Nc6');
  badger('easy.txt', 'g8f6', 'Nf6');
  badger('hippopotamus.txt', 'g8h6', 'Nh6');
  // aagh! snake! aagh! SNAKE! oh it's a snake!
}

function display() {
  stupidvariablename=document.getElementById("sixtyfour_slices_of_american_cheese").getElementsByTagName("td");
  for (z=0; z<8; z++) {
    for (y=0; y<8; y++) {
      stupidvariablename[8*z+y].className = 'blobfish' + chessboard[z][y] + ((y+z)%2==0 ? 'w' : 'd');
    }
  }
}

display(); // shows board on load

function someone_buy_me_a_gopro(move) { // changes the board
  var uno = 8-move.charAt(1);
  var dos = move.charCodeAt(0)-97;
  var tres = 8-move.charAt(3);
  var catorce = move.charCodeAt(2)-97; // u2 can't count in spanish
  // turn it up loud, captain
  var piece = chessboard[uno][dos];
  if (piece=='p' && dos!=catorce && uno==3 && tres==2 && chessboard[3][catorce]=='P' && chessboard[2][catorce]=='x') { // white en poisson
    chessboard[2][catorce] = 'p';
    chessboard[3][catorce] = 'x';
    chessboard[3][dos] = 'x';
  } else if (piece=='P' && dos!=catorce && uno==4 && tres==5 && chessboard[4][catorce]=='p' && chessboard[5][catorce]=='x') { // black en poisson
    chessboard[5][catorce] = 'P';
    chessboard[4][catorce] = 'x';
    chessboard[4][dos] = 'x';
  } else if (move.length==5 && tres==0 && chessboard[uno][dos]=='p') { // white promotion
    chessboard[tres][catorce]=move.charAt(4);
    chessboard[uno][dos]='.';
  } else if (move.length==5 && tres==7 && chessboard[uno][dos]=='P') { // black promotion
    chessboard[tres][catorce]=move.charAt(4).toUpperCase();
    chessboard[uno][dos]='x';
  } else if (piece != 'x') { // others (checks to see if move not already made)
    chessboard[tres][catorce] = piece;
    chessboard[uno][dos] = 'x';
  }
  display();
}
