//this is owl carousel slider

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items : 5,
      loop :true,
      autoplay :true,
      autoplayTimeout :1500,
      autoplayHoverPause :true,
      nav:true,
      navText :['<i class="fas fa-angle-left "></i>','<i class="fas fa-angle-right "></i>'], 
      responsive:{
        206:{
          items:2,
          nav:true
        },
        576:{
            items:3,
            nav:true
        },
        768:{
            items:4,
            nav:true,
        },
        992:{
            items:5,
            nav:true,
            loop:false
        }
      }
    });
  });

//this is slick carousel slider
  $(document).ready(function(){
    $('.main-carousel').slick({
      infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
  });


  //this is scroll function
  $(document).ready(function(){
    $('.scrolltosmoth').click(function(){
      $('html,body').animate({'scrollTop':0},'slow')
    });

    $(window).scroll(function(){
      var nazrul = $(window).scrollTop();
      if(nazrul > 250){
        $('.scrolltosmoth').show();
      }
      else{$('.scrolltosmoth').hide();}
    });
  })

//This is responsive menu
$(document).ready(function(){
  $(".main-menu .bar").click(function(){
		$(".main-menu ul").slideToggle();
		
		return false;
  });
  $(window).resize(function(){
		
		var screenWidth = $(window).width();
		
		if(screenWidth > 992){
			$(".menubar").show();
    }
    else{
      $(".menubar").hide();
    }
	});
  $(".menubar li").click(
		function(){
			$(this).children("ul").slideToggle(500,);
		}
	);
	

})

 
  //this is dialog box
  $('#popup1').popup();
  //accordion
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

//wow animate
new WOW().init();

 //Shipping Details
 