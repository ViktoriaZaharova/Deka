$('[name="phone"]').mask('+7 (999) 999-99-99');

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.popular-category-slider').slick({
    slidesToShow: 5,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev btn-accent"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-accent"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});

$('.hits-slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});


$('.sales-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

// reviews loader text
$(document).ready(function () {
  $('.reviews-read-more').on('click', function (e) {
    e.preventDefault();

    const $btn = $(this);
    const $text = $btn.closest('.reviews-card__body').find('.box-text');

    $text.toggleClass('box-text-open');

    if ($text.hasClass('box-text-open')) {
      $btn.find('span').text('Скрыть');
    } else {
      $btn.find('span').text('Читать полностью');
    }
  });
});



// footer collapse
$(function () {
  function initFooterCollapse() {
    var isDesktop = window.innerWidth >= 992;

    $("[data-collapse]").each(function () {
      var collapse = $(this);

      if (isDesktop) {
        // при загрузке на ПК — открыть
        collapse.addClass("show");
      } else {
        // при загрузке на мобилке — закрыть
        collapse.removeClass("show");
      }
    });
  }

  // Выполняем только один раз при загрузке
  initFooterCollapse();
});
