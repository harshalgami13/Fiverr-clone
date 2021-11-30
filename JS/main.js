// Swiper
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      }
    },
  });


$(document).ready(function () {

    $('.main1 .cancle img').click(function () {
        $('.main1').addClass("cancle");
    })
    $('.head-btn').click(function () {
        $('.side-menu').addClass("offcanvas-menu");
        // $('.head-btn').addClass("show");
    })
    $('.close-btn').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })
    $('.side-menu-content ul li a').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })
    

    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize > 800) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
    $(window).resize(checkwidth);




    //scroll
    $(window).scroll(function () {

        //header color change transparent to white
        if (this.scrollY > 00) {
            $('.header1').addClass("color-header");
        } else {
            $('.header1').removeClass("color-header");
        }
        //header stage 2 hidden or show
        if (this.scrollY > 100) {
            $('.stage-2').addClass("show");
        } else {
            $('.stage-2').removeClass("show");
        }
    });




})