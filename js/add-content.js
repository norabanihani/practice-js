var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
  getTime();
  console.log(txt);
} else {
  txt = "You pressed Cancel!";
  console.log(txt);

}
function getTime(){var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
greeting= 'Good evening!';
}else if (hourNow > 12) {
greeting = ' Good afternoon!';
}else if (hourNow > 0) {
greeting = 'Good morni ng!';
}else{greeting = 'Welcome! ' ;
}

document .write( ' <h3>' +greeting + ' </ h3>');
}
