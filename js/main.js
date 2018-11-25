  $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
	      pagination: {
	      	el: '.swiper-pagination',
	      	type: 'bullets'
	      },
          autoplay: {
            delay: 5000,
          },
  	    breakpoints: {
	    // when window width is <= 320px
	    320: {
    	  navigation: {
    		nextEl: '.slide_next',
    		prevEl: '.slide_prev',
  	  	},
          autoplay: false,
	      pagination: {
	      	el: null
	      }
    	},
	    // when window width is <= 480px
	    480: {

    	},
	    // when window width is <= 640px
	    640: {
	      
    	}
  	}
    })
  });


$(".toggle").click(function() {
	$(".hidden_menu").slideToggle("medium");
	$(".toggle_inner").toggleClass("toggled")
})

$(".search").click(function() {
	$(".hidden_search").slideToggle("medium");
	$(".search").toggleClass("toggled")
})

$(".go_up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, {duration:750, easing: "easeInExpo"});
  return false;
});