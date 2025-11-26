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
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
      }
    },
  ]
});

$('.popular-category-slider').slick({
    slidesToShow: 5,
    arrows: true,
    dots: true,
    infinite: false,
    // autoplay: true,
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
        arrows: false,
        variableWidth: true,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
      }
    }
  ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
      }
    }
  ]
});

$('.hits-slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: true,
    autoplay: true,
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
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
      }
    }
  ]
});


$('.sales-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    variableWidth: true,
    // autoplay: true,
    prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
      }
    }
  ]
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

  let lastIsDesktop = window.innerWidth >= 992;

  function applyState(isDesktop) {
    $("[data-collapse]").each(function () {
      const collapse = $(this);
      const target = collapse.data("collapse");
      const btn = $("[data-bs-target=\"[data-collapse='" + target + "']\"]");

      if (isDesktop) {
        collapse.addClass("show");
        btn.removeClass("collapsed");
      } else {
        collapse.removeClass("show");
        btn.addClass("collapsed");
      }
    });
  }

  // Инициализация при загрузке
  applyState(lastIsDesktop);

  // Отслеживаем resize
  $(window).on("resize", function () {
    const isDesktop = window.innerWidth >= 992;

    // меняем состояние только при переходе мобильная/десктоп
    if (isDesktop !== lastIsDesktop) {
      applyState(isDesktop);
      lastIsDesktop = isDesktop;
    }
  });

  // Bootstrap-collpase события для поворота стрелки
  $("[data-collapse]").on("show.bs.collapse", function () {
    const target = $(this).data("collapse");
    const btn = $("[data-bs-target=\"[data-collapse='" + target + "']\"]");
    btn.removeClass("collapsed");
  });

  $("[data-collapse]").on("hide.bs.collapse", function () {
    const target = $(this).data("collapse");
    const btn = $("[data-bs-target=\"[data-collapse='" + target + "']\"]");
    btn.addClass("collapsed");
  });

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


// header fixed
$(function () {

  const $header = $('header');
  const $headerTop = $('.header-top');
  const $headerBottom = $('.header-bottom');

  let headerFullHeight = 0;
  let collapsePoint = 0;
  let isCollapsed = false;

  // Пересчитываем высоту шапки
  function recalc() {
    headerFullHeight = $header.outerHeight(true);
    collapsePoint = headerFullHeight;
    $('body').css('padding-top', headerFullHeight + 'px');
  }

  $(window).on('load', function () {
    recalc();
  });

  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      recalc();
    }, 150);
  });

  // Скролл
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop >= collapsePoint) {
      if (!isCollapsed) {
        // скрываем верх и низ
        $headerTop.fadeOut();
        $headerBottom.fadeOut();

        // добавляем класс на весь header
        $header.addClass('header-fixed');

        isCollapsed = true;
      }
    } else {
      if (isCollapsed) {
        // возвращаем верх и низ
        $headerTop.fadeIn();
        $headerBottom.fadeIn();

        // убираем класс
        $header.removeClass('header-fixed');

        isCollapsed = false;
      }
    }
  });

});
