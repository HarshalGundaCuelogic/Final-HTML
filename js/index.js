// header onscroll code
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) 
  {
    document.getElementById("header").style.paddingTop = "0px";
    document.getElementById("header").style.paddingBottom = "0px";
  }
  else 
  {
    document.getElementById("header").style.paddingTop = "24px";
    document.getElementById("header").style.paddingBottom = "24px";
  }
}

goToTopButton = document.getElementById("gotop");

function topFunction() 
{
    document.documentElement.scrollTop = 0;
}

// Modal code
$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function() {
      $('#demoVideo')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function() {
      $('#demoVideo')[0].pause();
  })
  $(window).keypress(function(e) {
      var video = document.getElementById("demoVideo");
      if (e.which == 32) {
          if (video.paused == true) video.play();
          else video.pause();
      }
  });
});

// Carousel code
// $('.carousel.carousel-multi-item .carousel-item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   for (var i=0;i<4;i++) {
//     next=next.next();
//     if (!next.length) {
//       next=$(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });

// $('#carousel-example-multi').carousel({
//   interval: 10000
// })


$('#theCarousel').carousel({
  interval: 2000
})

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});