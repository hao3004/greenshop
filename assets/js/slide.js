$(document).ready(function(){
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
});