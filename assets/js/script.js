// banner slick slider
$(".banner-slider").slick({
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
})

// counter up
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// testimonial slick slider
$(".testi-slider").slick({
    slidesToShow: 3,
    prevArrow: '<i class="fa-solid fa-arrow-left-long prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right-long next"></i>',
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
})
