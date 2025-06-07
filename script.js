
$(document).ready(function(){
  $(window).scroll(function(){

    if(this.scrollY > 30){
      $('.navbar').addClass("sticky");
    }

    else {
      $('.navbar').removeClass("sticky");
    }

    if(this.scrollY > 500)
    $('.scroll-btn').addClass("show");
   else {
    $('.scroll-btn').removeClass("show");
   }
  });



  /* Slide-up Script */
  $('.scroll-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });



  /* toggle navbar script */
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });



  /* owl-carousel Script */
  $('.carousel').owlCarousel({
    margin: 20, 
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });


  /* Typing Animation Script */
  var typed = new Typed(".typing", {
    strings: [" Web Developer", "Programmer" , "Blogger", "Web Designer", "Software Developer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed(".typing-2", {
    strings: [" Web Developer", "Programmer" , "Blogger", "Web Designer", "Software Developer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })


  });