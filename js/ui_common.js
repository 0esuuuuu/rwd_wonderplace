$(function () {
  $(window).on('scroll', function () {
    let st = $(window).scrollTop();

    if (st > 0) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  // AOS
  AOS.init({
    offset: 300,
    duration: 1000,
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

  // brand_slider
  const brandSlider = new Swiper('.brand_slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const activeSlide = $('.brand_slider .swiper-slide-active');
  const slideIdx = $('.brand_slider .swiper-slide-active').index();
  const slideImg = [
    'images/bg_gola.jpg',
    'images/bg_comoninoz.jpg',
    'images/bg_w.standard.jpg',
    'images/bg_deliccent.jpg',
    'images/bg_outdoor_products.jpg',
    'images/bg_ocean_pacific.jpg',
    'images/bg_ordinary_holiday.jpg',
    'images/bg_field_worker.jpg',
  ];
  console.log(activeSlide);
  activeSlide.css({ background: slideImg[slideIdx] });
});
