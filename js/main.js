$(document).ready(function($) {

    'use strict';
	

    /* =======================================
           single Page Nav
       =======================================*/
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });

    /* =======================================
        For slider
    =======================================*/
    $(".slider_home").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 9000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });
	
    /*=======================================
             Header Section
        ========================================== */
    $(document).ready(function() {
        $(".slider_home").on("translate.owl.carousel", function() {
            $(".single_slider h2, .single_slider h4, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".slider_home").on("translated.owl.carousel", function() {
            $(".single_slider h2, .single_slider h4, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
        });

    });


	
    /*=======================================
         TESTIMONIAL CAROUSE                 
    ======================================= */
    $('#testimonial').owlCarousel({
        loop: true,
        center: true,
        stagePadding: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            767: {
                items: 3,
                dots: false,
                nav: true,
                navText: [" <i class='arrow_carrot-left'></i> ", " <i class='arrow_carrot-right'></i> "]
            }
        }
    });

 
	/*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 6 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 6,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 5
            },
            768: {
                items: 5
            },
            480: {
                items: 4
            },
            320: {
                items: 3
            },
            280: {
                items: 2
            }
        }
    });
	
    /*=======================================
         PRELOADER                     
    ======================================= */
	$(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    /*==========================================
         Skill BAR
    ============================================*/
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /* =======================================
            collapse the navbar on scroll
        =======================================*/
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /*=======================================
        Scroll Top
    =======================================*/
    $("#scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


    /* =======================================
          Gallery Section : mixItUp jQuery 
    =======================================*/
    $('.project-list').mixItUp({
        animation: {
            effects: 'fade stagger(50ms)',
            reverseOut: true,
            staggerSequence: function(i) {
                return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
            }
        }
    });


});