var cats_are_stupid;
var rainbow_unicorns = ['e2e3'];
var chessboard=["RNBQKBNR".split(""), "PPPPPPPP".split(""), "........".split(""), "........".split(""), "........".split(""), "....p...".split(""), "pppp.ppp".split(""), "rnbqkbnr".split("")];

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
        cats_are_stupid[i]=cats_are_stupid[i].split(' ');
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
  else if (homersimpson.length == 1 && homersimpson[0].length==1 && homersimpson[0][0].endsWith('t')) {
    rainbow_unicorns.pop(); // fixes parity bug
    loadXMLDoc(homersimpson[0][0], move);
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
  someone_buy_me_a_gopro(move);
}

function getthispartystarted(zebras_are_stripey, move) {
  if (move == 'g7g5' || move == 'b7b5') { // wild boar, classical, modern, polish, liardet
    // put this in a file later
    cats_are_stupid = ['g7g5 f1a6 b8a6 d1h5 f8g7 h5h7 g7b2 h7h8 b2a1 wildboar/Bxa1.txt',
'g7g5 f1a6 b8a6 d1h5 f8g7 h5h7 g7b2 h7h8 b2c1 wildboar/Bxc1.txt',
'g7g5 f1a6 b8a6 d1h5 g8h6 wildboar/qh5sideline.txt',
'g7g5 f1a6 b8a6 d1h5 f8h6 wildboar/qh5sideline.txt',
'g7g5 f1a6 b8a6 d1h5 a6b4 wildboar/qh5sideline.txt',
'g7g5 f1a6 b8a6 d1h5 g5g4 wildboar/qh5sideline.txt',
'g7g5 f1a6 b8a6 d1h5 c7c5 wildboar/qh5sideline.txt',
'g7g5 f1a6 b8a6 d1h5 a6b8 wildboar/qh5sideline.txt',
'g7g5 f1a6 b7a6 wildboar/bxa6.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 e7e5 a3f8 d7f8 classical/knighttakes.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 e7e5 a3f8 e8f8 classical/kingtakes.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 g8h6 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 d7c5 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 d7b8 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 a8a6 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 a8a7 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 e8d8 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 a8d8 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 f7f6 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 a8c8 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 c7c6 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a7a5 b2a3 e7e6 classical/oranges.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 g8h6 classical/blahblah.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 a8d8 classical/blahblah.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 d7b8 classical/blahblah.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 c7c5 classical/blahblah.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8b8 d3h7 h8h7 b1c3 h7h2 h1h2 b8b2 c1b2 f7f6 classical/blahblah.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 h7h6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 a8b8 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 g7g6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d7b6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d7b8 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 h7h5 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 d8c8 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 g8f6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 a8c8 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 c7c6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 g8h6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 f7f6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 f7f5 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 g7g5 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 b8d7 d2d3 a6d3 d1d3 a7a6 classical/whatever.txt',
'b7b5 f1b5 c8a6 b5d7 d8d7 classical/bishopqxd7.txt',
'b7b5 f1b5 e7e6 b5d7 c8d7 b1a3 f8a3 b2a3 d8h4 classical/classicalqh4.txt',
'b7b5 f1b5 e7e6 b5d7 c8d7 b1a3 f8a3 b2a3 c7c6 classical/otherthing.txt',
'b7b5 f1b5 e7e6 b5d7 c8d7 b1a3 f8a3 b2a3 d7c8 classical/otherthing.txt',
'b7b5 f1b5 e7e6 b5d7 c8d7 b1a3 f8a3 b2a3 b8c6 classical/otherthing.txt',
'b7b5 f1b5 e7e6 b5d7 c8d7 b1a3 f8a3 b2a3 d8g5 classical/otherthing.txt',
'b7b5 f1b5 e7e6 b5d7 b8d7 classical/thingy.txt',
'b7b5 f1b5 e7e6 b5d7 d8d7 classical/thingy.txt',
'b7b5 f1b5 e7e6 b5d7 e8d7 classical/thingy.txt',
'b7b5 f1b5 g8h6 classical/easy.txt',
'b7b5 f1b5 c7c6 classical/easy.txt',
'b7b5 f1b5 g7g5 classical/easy.txt',
'b7b5 f1b5 c7c5 classical/easy.txt',
'b7b5 f1b5 c8b7 classical/easy.txt',
'b7b5 f1b5 f7f5 classical/easy.txt',
'b7b5 f1b5 e7e5 classical/easy.txt',
'b7b5 f1b5 h7h5 classical/easy.txt',
'b7b5 f1b5 f7f6 classical/easy.txt',
'b7b5 f1b5 h7h6 classical/easy.txt',
'b7b5 f1b5 g8f6 classical/easy.txt',
'b7b5 f1b5 g7g6 classical/easy.txt',
'b7b5 f1b5 a7a5 classical/easy.txt',
'b7b5 f1b5 a7a6 classical/easy.txt',
'b7b5 f1b5 b8a6 classical/easy.txt'];
    for (i=0; i<cats_are_stupid.length; i++) {
      cats_are_stupid[i]=cats_are_stupid[i].split(' ');
    }
    inflatablethingsarefun(cats_are_stupid,move);
  }
  else { // easy 15
    loadXMLDoc(zebras_are_stripey, move);
  }
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
  chessboard=["RNBQKBNR".split(""), "PPPPPPPP".split(""), "........".split(""), "........".split(""), "........".split(""), "....p...".split(""), "pppp.ppp".split(""), "rnbqkbnr".split("")];
  document.getElementById("spinning_around_on_office_chairs_is_cool").innerHTML = "Move list: e2e3";
  document.getElementById("something").innerHTML = "available moves go here";
  document.getElementById("emmawatson").innerHTML = "";
  display();
  badger('easy.txt', 'a7a5', 'a5');
  badger('easy.txt', 'a7a6', 'a6');
  badger('andryushkov.txt', 'c7c6', 'c6');
  badger('easy.txt', 'e7e5', 'e5');
  badger('easy.txt', 'f7f5', 'f5');
  badger('easy.txt', 'f7f6', 'f6');
  badger('easy.txt', 'g7g6', 'g6');
  badger('', 'g7g5', 'g5');
  badger('easy.txt', 'h7h5', 'h5');
  badger('easy.txt', 'h7h6', 'h6');
  badger('easy.txt', 'b8a6', 'Na6');
  badger('balkan.txt', 'b8c6', 'Nc6');
  badger('easy.txt', 'g8f6', 'Nf6');
  badger('hippopotamus.txt', 'g8h6', 'Nh6');
  // mushroom mushroom
}

function display() {
  stupidvariablename="";
  for (z=0; z<8; z++) {
    stupidvariablename+=chessboard[z].join("");
    stupidvariablename+='<br>';
  }
  document.getElementById('chessboard').innerHTML = stupidvariablename;
}

function someone_buy_me_a_gopro(move) { // changes the board
  var uno = 8-move.charAt(1);
  var dos = move.charCodeAt(0)-97;
  var tres = 8-move.charAt(3);
  var catorce = move.charCodeAt(2)-97; // u2 can't count in spanish
  // turn it up loud, captain
  var piece = chessboard[uno][dos];
  if (piece=='p' && dos!=catorce && uno==3 && tres==2 && chessboard[3][catorce]=='P' && chessboard[2][catorce]=='.') { // white en poisson
    chessboard[2][catorce] = 'p';
    chessboard[3][catorce] = '.';
    chessboard[3][dos] = '.';
  } else if (piece=='P' && dos!=catorce && uno==4 && tres==5 && chessboard[4][catorce]=='p' && chessboard[5][catorce]=='.') { // black en poisson
    chessboard[5][catorce] = 'P';
    chessboard[4][catorce] = '.';
    chessboard[4][dos] = '.';
  } else if (move.length==5 && tres==0 && chessboard[uno][dos]=='p') { // white promotion
    chessboard[tres][catorce]=move.charAt(4);
    chessboard[uno][dos]='.';
  } else if (move.length==5 && tres==7 && chessboard[uno][dos]=='P') { // black promotion
    chessboard[tres][catorce]=move.charAt(4).toUpperCase();
    chessboard[uno][dos]='.';
  } else if (piece != '.') { // others (checks to see if move not already made)
    chessboard[tres][catorce] = piece;
    chessboard[uno][dos] = '.';
  }
  display();
}
