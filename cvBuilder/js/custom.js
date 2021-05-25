
//this is owl carousel slider
$(document).ready(function(){
  $(".owl-carousel-03").owlCarousel({
    items : 2,
    loop :true,
    autoplay :true,
    autoplayTimeout :4000,
    autoplayHoverPause :true,
    nav:false,
    dots:false,
    navText :false, 
    responsive:{
      206:{
        items:1,
       
      },
      576:{
          items:1,
      },
      768:{
          items:1,
      },
      992:{
          items:2,
          loop:true
      }
    }
  });
});
$(document).ready(function(){
  $(".owl-carousel-02").owlCarousel({
    items : 4,
    loop :true,
    autoplay :true,
    autoplayTimeout :4000,
    autoplayHoverPause :true,
    nav:false,
    dots:false,
    navText :false, 
    responsive:{
      206:{
        items:1,
       
      },
      576:{
          items:1,
         
      },
      768:{
          items:2,
         
      },
      992:{
          items:4,
          loop:true
      }
    }
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items : 1,
      loop :true,
      autoplay :true,
      autoplayTimeout :4000,
      autoplayHoverPause :true,
      nav:true,
      navText :false, 
      responsive:{
        206:{
          items:1,
          nav:true
        },
        576:{
            items:1,
            nav:true
        },
        768:{
            items:1,
            nav:true,
        },
        992:{
            items:1,
            nav:true,
            loop:true  
        }
      }
    });
  });

//This is responsive menu
$(document).ready(function(){
  $(".bar").click(function(){
		$(".menubar").toggle();
		return false;
  });

  jQuery(window).resize(function(){
		
		var screenWidth = jQuery(window).width();
		
		if(screenWidth > 768){
			jQuery(".menu ul").removeAttr("style");
		}
	});
})
