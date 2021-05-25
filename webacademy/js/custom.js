$(document).ready(function(){
  $('#block').vide({
      'mp4': 'video/ocean',
      'webm': 'video/ocean',
      'ogv': 'video/ocean',
      'poster': 'video/ocean',
   });


  //awl carousel
  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    'items':1,
    'loop' :true,
    'autoplay':true,
    'autoplayTimeout' :4000,
    'autoplayHoverPause' :true
  });
  });

  //wow js
  new WOW().init();

})
