


document.getElementById("marker-svg").addEventListener("click", marked);

img_array = new Array("static/img/pin.svg", "static/img/pin-fill.svg");
var i = 0;

function marked() {
  i++;
  document.getElementById("marker-svg").src = img_array[i];
  if (i == img_array.length - 1) {
    i = -1;
  }
}