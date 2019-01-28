
$(document).ready(function() {

	 $("#owl-demo").owlCarousel({

     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     margin:0,
     loop:true,
     dots:true,
     dotsEach:true,
     responsiveClass:true,
     singleItem : true,
      items : 1,
         nav : true, // Show next and prev buttons
				 navText: [
 				 "<img src='images/arrow_wR@2x.png'>",
 				 "<img src='images/arrow_wL@2x.png'>"
 					]
	  });

});
