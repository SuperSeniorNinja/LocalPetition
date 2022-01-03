
const upvoteempty = "static/img/arrow-up.svg";
const upvotefull = "static/img/arrow-up-fill.svg";
const downvoteempty = "static/img/arrow-down.svg";
const downvotefull = "static/img/arrow-down-fill.svg";

upvotebutton = document.getElementById("upvotebutton");

downvotebutton = document.getElementById("downvotebutton");

upvotecounter = document.getElementById("upvotes");

downvotecounter = document.getElementById("downvotes");

upanddownvotecounter = document.getElementById("votes");

upvotebutton.addEventListener("click", Up);

downvotebutton.addEventListener("click", Down);

function Up() {
  if (upvotecounter.innerHTML == 0) {
    upvotecounter.innerHTML = 1;
    upvotebutton.src = upvotefull;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);
  } else if (upvotecounter.innerHTML == 1) {
    upvotecounter.innerHTML = 0;
    upvotebutton.src = upvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);
  }

  if (downvotecounter.innerHTML == 1) {
    downvotecounter.innerHTML = 0;
    downvotebutton.src = downvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);
  }
}

function Down() {
  if (downvotecounter.innerHTML == 0) {
    downvotecounter.innerHTML = 1;
    downvotebutton.src = downvotefull;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);
  } else if (downvotecounter.innerHTML == 1) {
    downvotecounter.innerHTML = 0;
    downvotebutton.src = downvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);
  }

  if (upvotecounter.innerHTML == 1) {
    upvotecounter.innerHTML = 0;
    upvotebutton.src = upvoteempty;
    upanddownvotecounter.innerHTML =
    parseInt(upvotecounter.innerHTML) - parseInt(downvotecounter.innerHTML);

  }
}



var donated = 0;

function donate() {
  if (document.getElementById("inputAmount").value !== "") {
    if (donated === 0) {
      donated = donated + 1;
      document.getElementById("Supporters").innerHTML = donated;
    }
  }
}


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
