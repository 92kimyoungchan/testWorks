
$(document).ready(function() {

	 $("#owl-demo").owlCarousel({

     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     margin:20,
     loop:true,
     dots:true,
     dotsEach:true,
     responsiveClass:true,
     singleItem : true,
      items : 1,
         nav : true, // Show next and prev buttons
         navText: [
          "<i class='fa fa-angle-left license_chevron'></i>",
          "<i class='fa fa-angle-right license_chevron'></i>"
           ]
	  });

});
