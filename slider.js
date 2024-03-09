/*
 *  Embeded Slick-slider functionality (jQuery).
 */
$(function () {
    $('.center').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<div class="arrow arrow-left"><img src="assets/icons/arrow-left.png" alt="Venstre" /></div>',
        nextArrow: '<div class="arrow arrow-right"><img src="assets/icons/arrow-right.png" alt="Høyre" /></div>',
        responsive: [
          {
            // Devices up to 1440px screen-width
            breakpoint: 1441,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding: '0',
              arrows: true,
            }
          },
          {
            // Devices up to 767px screen-width
            breakpoint: 768,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '0',
              arrows: true,
            }
          }
        ]
      });
});

