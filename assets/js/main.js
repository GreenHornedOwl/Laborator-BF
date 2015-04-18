$(document).ready(function(){  
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		var parallaxFeatured = -170 + wScroll/10;	
		$(".featured").css("backgroundPositionY", parallaxFeatured);
	});	
	var owl = $('.testimonials-carousel');
	owl.owlCarousel({	   
	    loop:true,	    
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
        0:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
	});

});