function calculateAnswer(one,two){
	     var a =one;
		  var b =two;
		  var c =0;
	
		 var answer1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a);	
		 var answer2 = (-b - Math.sqrt(b*b-4*a*c))/(2*a);
	
		var response = "Solutions: " + answer1 + " and " + answer2;
	
		document.getElementById('output1').innerHTML = respose;
}