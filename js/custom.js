$('.cover-main').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
  });


  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  $('.slidermain').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
  });

  new VenoBox({
    selector: '.my-video-links',
});

$('.sponsor-main').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  speed: 1000,
  autoplay: true,
});

AOS.init();

$('.testimain').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  speed: 1000,
  autoplay: true,
});
      