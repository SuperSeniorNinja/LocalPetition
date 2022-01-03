function addAmount() {
	var supporter = 0;
	var amount = parseInt(document.getElementById("input").value | 0);

	if (amount > 0) {
		var addsupporter = supporter + 1;
		var alreadyamount = parseInt(document.getElementById("Donated").innerHTML);
		var donated = amount + alreadyamount;
		var percent = donated / 100;

		document.getElementById("supporter").innerHTML = addsupporter;
	  	document.getElementById("Donated").innerHTML = donated;
	  	document.getElementById("progressbar").style.width = percent + "%";
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