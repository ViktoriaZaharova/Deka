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


// search 
$(function () {

  const $form = $('.form-search');
  const $input = $form.find('input[name="search"]');
  const $btnSearch = $form.find('.form-search__btn');
  const $btnClose = $form.find('.form-search__btn-close');
  const $resultBox = $('.search-result-box');

  function updateButtons() {
    const hasText = $input.val().trim().length > 0;

    if (hasText) {
      $btnSearch.hide();
      $btnClose.addClass('visible');
    } else {
      $btnSearch.show();
      $btnClose.removeClass('visible');
    }
  }

  function openSearch() {
    $form.addClass('active');
    $resultBox.fadeIn(150);
    updateButtons();
  }

  function closeSearch() {
    $form.removeClass('active');
    $resultBox.fadeOut(150);

    $input.val('');
    updateButtons();
  }

  // Фокус или ввод текста
  $input.on('focus input', function () {
    openSearch();       // всегда открываем
    updateButtons();    // показываем нужные иконки
  });

  // Клик на крестик
  $btnClose.on('click', function (e) {
    e.preventDefault();
    closeSearch();
  });

  // Клик вне блока поиска
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.search-wrapper').length) {
      closeSearch();
    }
  });

  // Не закрывать при движении мыши (твоё условие оставил, но поправил)
  $resultBox.on('mouseleave', function () {
    if ($input.val().trim() === '') {
      closeSearch();
    }
  });

});
