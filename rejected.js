var pinempty = '<img style="height: 32px; width: auto;" src="pin.svg" />';

var pinfill = '<img style="height: 32px; width: auto;" src="pin-fill.svg" />';



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