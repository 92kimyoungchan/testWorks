
$(document).ready(function() {

	 $("#mini-owl").owlCarousel({

     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     margin:20,
     loop:true,
     dots:false,
     dotsEach:true,
     responsiveClass:true,
     singleItem : true,
      items : 5,
			nav : true, // Show next and prev buttons
			navText: [
			 "<i class='fa fa-angle-left license_chevron'></i>",
			 "<i class='fa fa-angle-right license_chevron'></i>"
				]
	  });

});
