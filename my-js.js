alert ('Vi holder øje med dig!')

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Dette felt skal udfyldes korrekt");
    return false;
  }
}


function myMove() {
  var elem = document.getElementById("myAnimation"); 
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
// JavaScript Document