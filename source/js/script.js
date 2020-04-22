$(document).ready(function() {
  var btn = document.querySelector(".nav__button");
  var nav = document.querySelector(".nav__wrapper");

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === 27) {
      clickLinkClose();
    }
  };

  var onPopupEnterPress = function(evt) {
    if (evt.keyCode === 13) {
      clickLinkClose();
    }
  };

  var clickLinkClose = function() {
    btn.classList.remove('nav__button-active');
    nav.classList.remove('nav__wrapper-active');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  var clickLinkOpen = function() {
    btn.classList.add('nav__button-active');
    nav.classList.add('nav__wrapper-active');
    document.addEventListener('keydown', onPopupEscPress);
  }

  btn.addEventListener("click", function () {
    if (!btn.classList.contains('nav__button-active')) {
      clickLinkOpen();
    } else {
      clickLinkClose();
    }
  });  

  btn.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13 && !btn.classList.contains('nav__button-active')) {
      clickLinkOpen();
    } else if (evt.keyCode === 13) {
      clickLinkClose();
    }
  });

  $('#sliderCarousel').owlCarousel({
      nav:false,
      dots:false,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          1024:{
              items:3
          }
      }
  });
  
});