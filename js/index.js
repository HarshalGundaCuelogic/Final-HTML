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
// $(document).ready(function(){
//   $('#myModal').on('shown.bs.modal', function() {
//       $('#demoVideo').play();
//   })
//   $('#myModal').on('hidden.bs.modal', function() {
//       $('#demoVideo').pause();
//   })
//   $(window).keypress(function(e) {
//       var video = document.getElementById("demoVideo");
//       if (e.which == 32) {
//           if (video.paused == true) video.play();
//           else video.pause();
//       }
//   });
// });

$(document).ready(function(){
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#cartoonVideo").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#myModal").on('hide.bs.modal', function(){
      $("#cartoonVideo").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#myModal").on('show.bs.modal', function(){
      $("#cartoonVideo").attr('src', url);
  });
});

// Carousel code
$('.slick-demo').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true
});