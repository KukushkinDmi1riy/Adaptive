
$(document).scroll(function() {
  if($(document).width() < 1024)
  return false;

  if($(document).scrollTop() > $('.full-page').height() / 2)
    $('header').addClass("fixed");
  else
    $('header').removeClass("fixed")
});


$(".up-btn").on("click", function(){
  $("html,body").animate({
    scrollTop:0
  },1000);
});

$("#show-menu").on("click", function(){
  $("#hidden-menu").animate({
    "right":0
  },500);
});

$(".close").on("click", function(){
  $("#hidden-menu").animate({
    "right":-300
  },300);
});

 $(document).ready(function(){

  $("#slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: '<button type="button" class="slick-prev">  </i> </button>',
  nextArrow: '<button type="button" class="slick-next"></i></button>',   //<i class="fas fa-arrow-right">    добавлял стреки
  slidesToShow:3
  })


})
