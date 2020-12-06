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

var rewiewsSlider = new Swiper('.rewiews-slider', {

  loop: true,

  navigation: {
    nextEl: '.rewiews-slider__button--next',
    prevEl: '.rewiews-slider__button--prev',
  },
})