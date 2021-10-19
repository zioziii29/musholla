/*
Author       : Theme-Family
Template Name: Ar-Raqib - Busniess & Consulting Agency Template
Version      : 1.0
*/
(function($) {
    "use strict";
	
	

		// Navbar menu-top
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#menu-top').hasClass('navbar-collaps')) {
				$('#menu-top').addClass('navbar-collaps');
			}
		});		

		// Navbar Menu Reduce 
	
		$(window).trigger('scroll');
		$(window).on('scroll', function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.navbar-expand-md').removeClass('navbar-expend');
			} else {
				$('.navbar-expand-md').addClass('navbar-expend');
				$('.navbar-expand-md').removeClass('navbar-collaps');
			}
			if ($(window).scrollTop() > top) {
				$('.scrolltop-atf').fadeIn(1000, "easeInOutExpo");
			} else {
				$('.scrolltop-atf').fadeOut(1000, "easeInOutExpo");
			}
		});


		//  Star Scrolling nav
		$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.page-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#menu-top',
			offset: navHeight
		});
        

		  //**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('navbar-collaps');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
		  
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			})
			/*END PARTNER LOGO*/
			
			//mouse hover tile effect js//

			$(".card-s").tilt({
			  maxTilt: -20,
			  perspective: 2400,
			  speed: 2200,
			  easing: "cubic-bezier(.03,.98,.52,.99)",
			  scale: 1,
			  
			  });
			
		

			
		
			/*START Testimonials LOGO*/
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav:false,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		/*END Testimonials LOGO*/
		
			
		
		
		/*Animation js*/
			AOS.init({

			  offset:     120,

			  delay:      0,

			  easing:     'ease',

			  duration:   5000,

			  disable:    false, // Condition when AOS should be disabled. e.g. 'mobile'

			  once:       false,

			  mirror:     false, // whether elements should animate out while scrolling past them

			  startEvent: 'DOMContentLoaded'

			});

     
    
})(jQuery);

$(window).on ('load', function (){ // makes sure the whole site is loaded

		/*PRELOADER JS*/
			
		// -------------------- Site Preloader
			$('#atf-ctn-preloader').fadeOut(); // will first fade out the loading animation
			$('#atf-preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
      
		 
		/*END PRELOADER JS*/	
		
	
				
	});
