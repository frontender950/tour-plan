$(document).ready(function () {
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log('Клик по кнопке меню');
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  // modalWindow
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});