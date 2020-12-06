var hotelSlider = new Swiper('.hotel-slider', {

  loop: true,

  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  speed: 400,
  effect: 'coverflow',
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var rewiewsSlider = new Swiper('.rewiews-slide', {

  loop: true,

  navigation: {
    nextEl: '.rewiews-slide__button--next',
    prevEl: '.rewiews-slide__button--prev',
  },
})