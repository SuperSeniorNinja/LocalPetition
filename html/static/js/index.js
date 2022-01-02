/* 
const upvoteempty = '<img style="height: 35px; width: auto;" src="static/img/arrow-up.svg" />';
const upvotefull = '<img style="height: 35px; width: auto;" src="static/img/arrow-up-fill.svg" />';
const downvoteempty = '<img style="height: 35px; width: auto;" src="static/img/arrow-down.svg" />';
const downvotefull = '<img style="height: 35px; width: auto;" src="static/img/arrow-down-fill.svg" />';

const pinempty = '<img style="height: 32px; width: auto;" src="static/img/pin.svg" />';
const pinfill = '<img style="height: 32px; width: auto;" src="static/img/pin-fill.svg" />';

var upvotes = 0;
var votes = 0;
var downvotes = 0;
var donated = 0;


function Up() {
    if (upvotes === 0) {
        upvotes = upvotes + 1;
        document.getElementById("upvotes").innerHTML = upvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
        document.getElementById("Upbutton").innerHTML = upvotefull;
        document.getElementById("Downbutton").innerHTML = downvoteempty;
  } else if (upvotes === 1) {
        upvotes = upvotes - 1;

        document.getElementById("upvotes").innerHTML = upvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
        document.getElementById("Upbutton").innerHTML = upvoteempty;
  }


    if (downvotes === -1) {
        downvotes = downvotes + 1;
        document.getElementById("downvotes").innerHTML = downvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
    }
}


function Down() {
    if (downvotes === 0) {
        downvotes = downvotes - 1;
   
        document.getElementById("downvotes").innerHTML = downvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
        document.getElementById("Downbutton").innerHTML = downvotefull;
        document.getElementById("Upbutton").innerHTML = upvoteempty;
    } else if (downvotes === -1) {
        downvotes = downvotes + 1;

        document.getElementById("downvotes").innerHTML = downvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
        document.getElementById("Downbutton").innerHTML = downvoteempty;
    }
    if (upvotes === 1) {
        upvotes = upvotes - 1;

        document.getElementById("upvotes").innerHTML = upvotes;
        document.getElementById("votes").innerHTML = downvotes + upvotes;
    }
}

*/
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
      parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);
  } else if (upvotecounter.innerHTML == 1) {
    upvotecounter.innerHTML = 0;
    upvotebutton.src = upvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);
  }

  if (downvotecounter.innerHTML == 1) {
    downvotecounter.innerHTML = 0;
    downvotebutton.src = downvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);
  }
}

function Down() {
  if (downvotecounter.innerHTML == 0) {
    downvotecounter.innerHTML = 1;
    downvotebutton.src = downvotefull;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);
  } else if (downvotecounter.innerHTML == 1) {
    downvotecounter.innerHTML = 0;
    downvotebutton.src = downvoteempty;
    upanddownvotecounter.innerHTML =
      parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);
  }

  if (upvotecounter.innerHTML == 1) {
    upvotecounter.innerHTML = 0;
    upvotebutton.src = upvoteempty;
    upanddownvotecounter.innerHTML =
    parseInt(upvotecounter.innerHTML) + parseInt(downvotecounter.innerHTML);

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

img_array = new Array("static/img/pin.svg", "static/img/pin-fill.svg");
var i = 0;

function marked() {
  i++;
  document.getElementById("svg").src = img_array[i];
  if (i == img_array.length - 1) {
    i = -1;
  }
}
