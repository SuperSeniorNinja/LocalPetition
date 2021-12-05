function addAmount() {
	var supporter = 0;

	var amount = parseInt(document.getElementById("input").value | 0)
	;
	if (amount > 0) {

	  var addsupporter = supporter + 1;

	  document.getElementById("supporter").innerHTML = addsupporter;

      
	  var alreadyamount = parseInt(document.getElementById("Donated").innerHTML);

      
	  var donated = amount + alreadyamount;

      
	  document.getElementById("Donated").innerHTML = donated;

      
	  var percent = donated / 100;
	  
      
	  document.getElementById("progressbar").style.width = percent + "%";
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