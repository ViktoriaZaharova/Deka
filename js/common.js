$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});