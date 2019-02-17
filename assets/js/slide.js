$(document).ready(function(){
    // HOME
    $('.gs-field__product-slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerPadding: '10',
        prevArrow: $('#gs-field__slide-btn--prev'),
        nextArrow: $('#gs-field__slide-btn--next')
    });
    $('._gs-field__product-slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding: '10',
        prevArrow: $('#_gs-field__slide-btn--prev'),
        nextArrow: $('#_gs-field__slide-btn--next')
    });
    // PRODUCT DETAILS
    $('.gs-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gs-slider-nav'
    });
    $('.gs-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gs-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
    });
});