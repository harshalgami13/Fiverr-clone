// Swiper
var swiper = new Swiper(".mySwiper", {
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


$(document).ready(function () {

    $('.main1 .cancle img').click(function () {
        $('.main1').addClass("cancle");
    })
    
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