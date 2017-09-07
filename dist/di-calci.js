document.getElementById("addButton").addEventListener("click", function() {
  add();
});

document.getElementById("subButton").addEventListener("click", function() {
  sub();
});

function add(x,y) {
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var sum = x + y;

  document.getElementById('result').innerHTML = sum;
}

function sub(x,y) {
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var diff = x - y;

  document.getElementById('result').innerHTML = diff;
}