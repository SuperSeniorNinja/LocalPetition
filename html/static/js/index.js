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




function donate() {
    if (document.getElementById("inputAmount").value !== "") {
        if (donated === 0) {
            donated = donated + 1;
            document.getElementById("Supporters").innerHTML = donated;
        }
    }
}



img_array = new Array('static/img/pin.svg','static/img/pin-fill.svg');
var i = 0;

function marked() {
    i++;
    document.getElementById("svg").src=img_array[i];
    if(i==img_array.length-1) {
        i=-1;
    }
}




