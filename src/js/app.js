if (module.hot) {
  module.hot.accept();
}

import 'slick-carousel';
// import 'jquery-mousewheel';
// import 'malihu-custom-scrollbar-plugin';

$(document).ready(function () {
  // $(".make-business__description").mCustomScrollbar({
  //   theme: "dark",
  // });
  $('.banner-slider').slick({
    prevArrow: "<button type='button' class='slick-prev slick-arrow'></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'></button>",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  })
});





// import 'jquery-mask-plugin';
// import 'webpack-jquery-ui/css';
// import 'webpack-jquery-ui/selectmenu';





