"use strict";

AOS.init();

$(".navbar-toggler").click(function () {
    if ($(".navbar").hasClass("navbar-bg")) {
        $(".navbar").removeClass("navbar-bg");
    } else {
        $(".navbar").addClass("navbar-bg");
    }
});

$(window).scroll(function () {
    let hero = $(window).scrollTop();
    if (hero > 1) {
        $(".hero-area").addClass("hero-scroll");
    } else {
        $(".hero-area").removeClass("hero-scroll");
    }
});

let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    keyboard: true,
    pause: 'hover'
});

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;