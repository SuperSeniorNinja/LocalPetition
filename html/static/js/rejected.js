var pinempty = '<img style="height: 32px; width: auto;" src="static/img/pin.svg" />';
var pinfill = '<img style="height: 32px; width: auto;" src="static/img/pin-fill.svg" />';



img_array = new Array('static/img/pin.svg','static/img/pin-fill.svg');
var i = 0;

function marked() {
    i++;
    document.getElementById("svg").src=img_array[i];
    if(i==img_array.length-1) {
        i=-1;
    }
}