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