// jshint esversion: 6

let inputFields = document.getElementsByTagName('input');

for(let i = 0; i < inputFields.length; i++){
  // inputFields[i].value = "this onez 4 u JoN";
  inputFields[i].addEventListener('keydown', function(event){
    switch(event.key){
      case "q":
        event.preventDefault();
        inputFields[i].value+= "'";
        break;
      case "w":
        event.preventDefault();
        inputFields[i].value+= ",";
        break;
      case "e":
        event.preventDefault();
        inputFields[i].value+= ".";
        break;
      case "r":
        event.preventDefault();
        inputFields[i].value+= "p";
        break;
      case "t":
        event.preventDefault();
        inputFields[i].value+= "y";
        break;
      case "y":
        event.preventDefault();
        inputFields[i].value+= "f";
        break;
      case "u":
        event.preventDefault();
        inputFields[i].value+= "g";
        break;
      case "i":
        event.preventDefault();
        inputFields[i].value+= "c";
        break;
      case "o":
        event.preventDefault();
        inputFields[i].value+= "r";
        break;
      case "p":
        event.preventDefault();
        inputFields[i].value+= "l";
        break;
      case "a":
        event.preventDefault();
        inputFields[i].value+= "a";
        break;
      case "s":
        event.preventDefault();
        inputFields[i].value+= "o";
        break;
      case "d":
        event.preventDefault();
        inputFields[i].value+= "e";
        break;
      case "f":
        event.preventDefault();
        inputFields[i].value+= "u";
        break;
      case "g":
        event.preventDefault();
        inputFields[i].value+= "i";
        break;
      case "h":
        event.preventDefault();
        inputFields[i].value+= "d";
        break;
      case "j":
        event.preventDefault();
        inputFields[i].value+= "h";
        break;
      case "k":
        event.preventDefault();
        inputFields[i].value+= "t";
        break;
      case "l":
        event.preventDefault();
        inputFields[i].value+= "n";
        break;
      case ";":
        event.preventDefault();
        inputFields[i].value+= "s";
        break;
      case "'":
        event.preventDefault();
        inputFields[i].value+= "-";
        break;
      case "z":
        event.preventDefault();
        inputFields[i].value+= ";";
        break;
      case "x":
        event.preventDefault();
        inputFields[i].value+= "q";
        break;
      case "c":
        event.preventDefault();
        inputFields[i].value+= "j";
        break;
      case "v":
        event.preventDefault();
        inputFields[i].value+= "k";
        break;
      case "b":
        event.preventDefault();
        inputFields[i].value+= "x";
        break;
      case "n":
        event.preventDefault();
        inputFields[i].value+= "b";
        break;
      case "m":
        event.preventDefault();
        inputFields[i].value+= "m";
        break;
      case ",":
        event.preventDefault();
        inputFields[i].value+= "w";
        break;
      case ".":
        event.preventDefault();
        inputFields[i].value+= "v";
        break;
      case "/":
        event.preventDefault();
        inputFields[i].value+= "z";
        break;
      case "Q":
        event.preventDefault();
        inputFields[i].value+= '"';
        break;
      case "W":
        event.preventDefault();
        inputFields[i].value+= ",";
        break;
      case "E":
        event.preventDefault();
        inputFields[i].value+= ".";
        break;
      case "R":
        event.preventDefault();
        inputFields[i].value+= "p";
        break;
      case "T":
        event.preventDefault();
        inputFields[i].value+= "y";
        break;
      case "Y":
        event.preventDefault();
        inputFields[i].value+= "f";
        break;
      case "U":
        event.preventDefault();
        inputFields[i].value+= "g";
        break;
      case "I":
        event.preventDefault();
        inputFields[i].value+= "c";
        break;
      case "O":
        event.preventDefault();
        inputFields[i].value+= "r";
        break;
      case "P":
        event.preventDefault();
        inputFields[i].value+= "l";
        break;
      case "A":
        event.preventDefault();
        inputFields[i].value+= "A";
        break;
      case "S":
        event.preventDefault();
        inputFields[i].value+= "O";
        break;
      case "D":
        event.preventDefault();
        inputFields[i].value+= "E";
        break;
      case "F":
        event.preventDefault();
        inputFields[i].value+= "U";
        break;
      case "G":
        event.preventDefault();
        inputFields[i].value+= "I";
        break;
      case "H":
        event.preventDefault();
        inputFields[i].value+= "D";
        break;
      case "J":
        event.preventDefault();
        inputFields[i].value+= "H";
        break;
      case "K":
        event.preventDefault();
        inputFields[i].value+= "T";
        break;
      case "L":
        event.preventDefault();
        inputFields[i].value+= "N";
        break;
      case ":":
        event.preventDefault();
        inputFields[i].value+= "S";
        break;
      case '"':
        event.preventDefault();
        inputFields[i].value+= "_";
        break;
      case "Z":
        event.preventDefault();
        inputFields[i].value+= ":";
        break;
      case "X":
        event.preventDefault();
        inputFields[i].value+= "Q";
        break;
      case "C":
        event.preventDefault();
        inputFields[i].value+= "J";
        break;
      case "V":
        event.preventDefault();
        inputFields[i].value+= "K";
        break;
      case "B":
        event.preventDefault();
        inputFields[i].value+= "X";
        break;
      case "N":
        event.preventDefault();
        inputFields[i].value+= "B";
        break;
      case "M":
        event.preventDefault();
        inputFields[i].value+= "M";
        break;
      case "<":
        event.preventDefault();
        inputFields[i].value+= "W";
        break;
      case ">":
        event.preventDefault();
        inputFields[i].value+= "V";
        break;
      case "?":
        event.preventDefault();
        inputFields[i].value+= "Z";
        break;
      
      
    }

  });
}