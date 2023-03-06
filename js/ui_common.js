$(function () {
  $(window).on('scroll', function () {
    let st = $(window).scrollTop();

    if (st > 0) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  // main_slider
  const mainSlider = new Swiper('.main_slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
