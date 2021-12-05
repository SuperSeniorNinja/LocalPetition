var upvoteempty =
  '<img style="height: 35px; width: auto;" src="arrow-up.svg" />';

var upvotefull =
  '<img style="height: 35px; width: auto;" src="arrow-up-fill.svg" />';

var downvoteempty =
  '<img style="height: 35px; width: auto;" src="arrow-down.svg" />';

var downvotefull =
  '<img style="height: 35px; width: auto;" src="arrow-down-fill.svg" />';

var upvotes = 0;
var votes = 0;
var downvotes = 0;

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

var donated = 0;

function donate() {
  if (document.getElementById("inputAmount").value !== "") {
    if (donated === 0) {
      donated = donated + 1;
      document.getElementById("Supporters").innerHTML = donated;
    }
  }
}


img_array= new Array('pin.svg','pin-fill.svg');
i=0;
function marked()
{
     i++;
    document.getElementById("svg").src=img_array[i];
    if(i==img_array.length-1) {
   i=-1;

    }
    
}

