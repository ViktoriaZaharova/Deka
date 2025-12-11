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

$('.video-reviews-slider').slick({
  slidesToShow: 3,
  dots: false,
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


$('.gallery-news-slider').slick({
  slidesToShow: 2,
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

$('.devices-slider').slick({
  slidesToShow: 1,
  dots: false,
  arrows: false,
  infinite: false,
  variableWidth: true,
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
        autoplay: true,
        infinite: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
        dots: true,
        autoplay: true,
        infinite: true,
      }
    }
  ]
});

$('.our-specialists-slider').slick({
  slidesToShow: 4,
  dots: false,

  prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
        dots: true,
        autoplay: true,
        infinite: true,
      }
    }
  ]
});

$('.article-product-slider').slick({
  slidesToShow: 1,
  fade: true,
  dots: false,
  arrows: false,
  prevArrow: '<button type="button" class="slick-prev btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next btn-pink slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        infinite: true,
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
      $btn.addClass('click').find('span').text('Скрыть');
    } else {
      $btn.removeClass('click').find('span').text('Читать полностью');
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
  const breakpoint = 1200;

  // корректный пересчёт: показываем всё, снимаем фиксации, мерим, затем восстанавливаем нужное состояние
  function recalc() {
    // остановим анимации и временно покажем всё, чтобы измерение было корректным
    $headerTop.stop(true, true).show();
    $headerBottom.stop(true, true).show();
    $header.removeClass('header-fixed');

    // даём браузеру одну итерацию, но это синхронное измерение
    headerFullHeight = $header.outerHeight(true) || 0;
    collapsePoint = headerFullHeight;

    // ставим padding-top для body — всегда, чтобы не было скачков
    $('body').css('padding-top', headerFullHeight + 'px');
  }

  // Мобильный режим — всё фиксировано
  function applyMobileMode() {
    isCollapsed = false;
    $headerTop.stop(true, true).show();
    $headerBottom.stop(true, true).show();
    $header.addClass('header-fixed');
    // padding уже выставлен в recalc
  }

  // Десктоп — сброс перед скроллом
  function resetDesktopMode() {
    isCollapsed = false;
    $headerTop.stop(true, true).show();
    $headerBottom.stop(true, true).show();
    $header.removeClass('header-fixed');
    // padding уже выставлен в recalc
  }

  // Скролл для десктопа
  function handleDesktopScroll() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= collapsePoint) {
      if (!isCollapsed) {
        $headerTop.stop(true, true).fadeOut(200);
        $headerBottom.stop(true, true).fadeOut(200);
        $header.addClass('header-fixed');
        isCollapsed = true;
      }
    } else {
      if (isCollapsed) {
        $headerTop.stop(true, true).fadeIn(200);
        $headerBottom.stop(true, true).fadeIn(200);
        $header.removeClass('header-fixed');
        isCollapsed = false;
      }
    }
  }

  // Переключение мобильный/десктоп
  function updateMode() {
    if (window.innerWidth <= breakpoint) {
      // отключаем десктоп-скролл
      $(window).off('scroll', handleDesktopScroll);
      applyMobileMode();
    } else {
      // включаем десктоп-логику и приводим состояние в соответствие
      resetDesktopMode();
      $(window).on('scroll', handleDesktopScroll);
      // сразу применим стейт на случай, если страница загрузилась не на верхней позиции
      handleDesktopScroll();
    }
  }

  // Инициализация: вызываем recalc в нескольких ситуациях, чтобы поймать окончательную высоту
  function init() {
    // первый быстрый пересчёт (DOM готов)
    recalc();
    updateMode();

    // повторный пересчёт после полной загрузки ресурсов (картинок)
    $(window).one('load', function () {
      recalc();
      updateMode();
    });

    // если поддерживается API шрифтов — дождёмся их
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        // через микротик, чтобы браузер успел применить
        setTimeout(function () {
          recalc();
          updateMode();
        }, 30);
      }).catch(function () {
        // игнорируем ошибки
      });
    }

    // ещё один защитный пересчёт через небольшой таймаут (на всякий случай)
    setTimeout(function () {
      recalc();
      updateMode();
    }, 120);
  }

  // Вешаем всё
  $(window).on('load', function () {
    // уже обрабатывается в init, но оставим для надёжности
    recalc();
    updateMode();
  });

  // Resize
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // при ресайзе сначала пересчитаем, затем обновим режим
      recalc();
      updateMode();
    }, 150);
  });

  // Запуск
  init();

});

// dropdown-menu mobile height
$(function () {
  const $header = $('header');
  const $dropdown = $('.dropdown-menu-toggle');

  function updateDropdownHeight() {
    if (window.innerWidth <= 576) {
      const headerHeight = $header.outerHeight();
      const viewportHeight = window.innerHeight;

      const maxHeight = viewportHeight - headerHeight;

      $dropdown.css({
        'max-height': maxHeight + 'px',
        'overflow-y': 'auto'
      });
    } else {
      // на больших экранах прокрутка не нужна
      $dropdown.css({
        'max-height': '',
        'overflow-y': ''
      });
    }
  }

  // запускаем при загрузке
  updateDropdownHeight();

  // на ресайзе пересчитываем
  $(window).on('resize', function () {
    updateDropdownHeight();
  });
});


// reviews load more
$(function () {

  const $items = $('.reviews-col');
  const $btn = $('.btn-toggle-reviews');

  const initialCount = 6;
  const loadCount = 3;

  // 1. Если элементов меньше 6 — скрыть кнопку
  if ($items.length <= initialCount) {
    $btn.hide();
  }

  // 2. Скрываем все, кроме первых 6
  $items.hide().slice(0, initialCount).show();

  // 3. Клик по кнопке "Показать ещё"
  $btn.on('click', function (e) {
    e.preventDefault();

    // Находим количество уже показанных
    const visibleCount = $items.filter(':visible').length;

    // Показываем следующие 3
    $items.slice(visibleCount, visibleCount + loadCount).fadeIn(200);

    // Если больше нет скрытых — прячем кнопку
    if (visibleCount + loadCount >= $items.length) {
      $btn.hide();
    }
  });

});


// tabs mobile
$(function () {
  $('.tabs-select-btn').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });
});

// select
$('.js-example-basic-single[name="city"]').select2({
  placeholder: "Выберите город*",
  allowClear: true,
  width: '100%'
});

$('.js-example-basic-single[name="procedure"]').select2({
  placeholder: "Выберите процедуру*",
  allowClear: true,
  width: '100%'
});

$('.js-example-basic-single[name="select-sorting"]').select2({
  placeholder: "",
  allowClear: true,
  width: '100%'
});

// collapse desktop catalog
(function ($) {
  const DESKTOP_BREAKPOINT = 992;

  // Утилита debounce
  function debounce(fn, ms) {
    let t;
    return function () {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  // Возвращает селектор из данных кнопки (поддержка нескольких вариантов)
  function getSelector($btn) {
    return $btn.data('collapse') || $btn.attr('data-bs-target') || $btn.attr('href') || null;
  }

  // Инициализация состояний (open on desktop, closed on mobile)
  function applyState() {
    const isDesktop = $(window).width() >= DESKTOP_BREAKPOINT;
    $('.catalog-accordion .catalog-item').each(function () {
      const $item = $(this);
      const $btn = $item.find('.catalog-item__btn').first();
      const selector = getSelector($btn);
      if (!selector) return;
      // Ищем целевой блок внутри контейнера, чтобы не нарваться на одинаковые классы в других местах
      const $target = $item.closest('.catalog-accordion').find(selector).first();
      if (!$target || !$target.length) return;

      // Если есть bootstrap Collapse — используем его, иначе fallback
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        let inst = bootstrap.Collapse.getInstance($target[0]);
        if (!inst) inst = new bootstrap.Collapse($target[0], { toggle: false });

        if (isDesktop) {
          inst.show();
          $btn.attr('aria-expanded', 'true');
        } else {
          inst.hide();
          $btn.attr('aria-expanded', 'false');
        }
      } else {
        if (isDesktop) {
          $target.addClass('show');
          $btn.attr('aria-expanded', 'true');
        } else {
          $target.removeClass('show');
          $btn.attr('aria-expanded', 'false');
        }
      }
    });
  }

  // Делегированный клик — надёжнее, не создаёт множества обработчиков
  $(document).off('click.catalogCollapse').on('click.catalogCollapse', '.catalog-accordion .catalog-item__btn', function (e) {
    e.preventDefault();
    const $btn = $(this);
    const selector = getSelector($btn);
    if (!selector) return;
    const $container = $btn.closest('.catalog-accordion');
    const $target = $container.find(selector).first();
    if (!$target.length) return;

    // Toggle через bootstrap Collapse если есть
    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
      let inst = bootstrap.Collapse.getInstance($target[0]);
      if (!inst) inst = new bootstrap.Collapse($target[0], { toggle: false });

      const expanded = $btn.attr('aria-expanded') === 'true';
      if (expanded) {
        inst.hide();
        $btn.attr('aria-expanded', 'false');
      } else {
        inst.show();
        $btn.attr('aria-expanded', 'true');
      }
    } else {
      // Фоллбек — просто toggle .show
      const opened = $target.hasClass('show');
      if (opened) {
        $target.removeClass('show');
        $btn.attr('aria-expanded', 'false');
      } else {
        $target.addClass('show');
        $btn.attr('aria-expanded', 'true');
      }
    }
  });

  // Инициализация при загрузке и ресайзе (дебаунс)
  $(document).ready(function () {
    applyState();
    $(window).on('resize.catalogCollapse', debounce(applyState, 150));
  });

})(jQuery);


// catalog mobile
$(function () {

  const $sidebar = $('.sidebar-catalog');
  const $overlay = $('.overlay');

  // открыть
  $('.btn-catalog-mobile').on('click', function () {
    $sidebar.addClass('active');
    $overlay.fadeIn(200);
  });

  // закрыть
  function closeSidebar() {
    $sidebar.removeClass('active');
    $overlay.fadeOut(200);
  }

  // клик по оверлею
  $overlay.on('click', closeSidebar);

  // кнопка закрытия
  $(document).on('click', '.sidebar-catalog__close', closeSidebar);

  // клик вне sidebar
  $(document).on('click', function (e) {
    if (
      $sidebar.hasClass('active') &&
      !$(e.target).closest('.sidebar-catalog').length &&
      !$(e.target).closest('.btn-catalog-mobile').length
    ) {
      closeSidebar();
    }
  });

});


// doctors card
$(function () {

  const $cards = $('.doctors-col');
  const $btn = $('.btn-toggle-doctors');

  let initialCount;  // сколько показывать изначально
  const loadCount = 4; // по 4 карточки догружаем

  function updateView() {
    const windowWidth = window.innerWidth;

    // Определяем сколько показываем изначально
    initialCount = windowWidth < 576 ? 4 : 8;

    // Скрываем все карточки
    $cards.hide();

    // Показываем первые initialCount
    $cards.slice(0, initialCount).show();

    // Проверка нужно ли показывать кнопку
    if ($cards.length > initialCount) {
      $btn.show();
    } else {
      $btn.hide();
    }
  }

  // вызов при загрузке
  updateView();

  // пересчёт при ресайзе
  $(window).on('resize', function () {
    updateView();
  });

  // обработчик "Показать ещё"
  $btn.on('click', function (e) {
    e.preventDefault();

    const visibleCount = $cards.filter(':visible').length;

    // Показываем следующие 4
    $cards.slice(visibleCount, visibleCount + loadCount).fadeIn(200);

    // если карточки закончились → скрыть кнопку
    if (visibleCount + loadCount >= $cards.length) {
      $btn.fadeOut(200);
    }
  });

});


// certificates card
$(function () {

  const $cards = $('.certificates-col');
  const $btn = $('.btn-toggle-certificates');

  let initialCount;
  const loadCount = 4;

  function updateView() {
    const w = window.innerWidth;

    // breakpoint logic
    if (w < 576) {
      initialCount = 2;  // mobile
    } else if (w < 768) {
      initialCount = 4;  // small tablet
    } else {
      initialCount = 8;  // desktop
    }

    // hide all
    $cards.hide();

    // show initial
    $cards.slice(0, initialCount).show();

    // show/hide button
    if ($cards.length > initialCount) {
      $btn.show();
    } else {
      $btn.hide();
    }
  }

  // run on load
  updateView();

  // run on resize
  $(window).on('resize', function () {
    updateView();
  });

  // Load more
  $btn.on('click', function (e) {
    e.preventDefault();

    const visibleCount = $cards.filter(':visible').length;

    // show next N cards
    $cards.slice(visibleCount, visibleCount + loadCount).fadeIn(200);

    // hide button if nothing left
    if (visibleCount + loadCount >= $cards.length) {
      $btn.fadeOut(200);
    }
  });

});


// accordion faq
$(function () {
  $('.faq-item').each(function () {
    const $item = $(this);
    const $collapse = $item.find('.collapse');
    // const $icon = $item.find('.faq-icon');

    // Открыли
    $collapse.on('show.bs.collapse', function () {
      $item.addClass('open');
      // $icon.text('×'); // или оставить '+' если делаешь rotate
    });

    // Закрыли
    $collapse.on('hide.bs.collapse', function () {
      $item.removeClass('open');
      // $icon.text('+');
    });
  });
});



jQuery(function ($) {

  // обработка клика по элементу dropdown
  $('.contacts-tabs .dropdown-item').on('click', function () {
    const target = $(this).data('tab-target'); // цель таба
    const text = $(this).text();               // текст в "селекте"

    // меняем название в кнопке селекта
    $('.contacts-tabs .current-tab-text').text(text);

    // включаем таб через Bootstrap API
    const tabTrigger = new bootstrap.Tab($(`button[data-bs-target="${target}"]`)[0]);
    tabTrigger.show();
  });

});


// Выбор файла
$(document).on('change', '.label-file input[type="file"]', function () {
  const wrapper = $(this).closest('.label-file-wrapper');
  const resultBlock = wrapper.find('.label-file-result');
  const resultName = wrapper.find('.label-file-result__name');
  const fileInput = this;

  if (fileInput.files && fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;

    resultName.text(fileName);

    wrapper.addClass('file-loaded');          // ← Добавляем класс wrapper
    wrapper.find('.label-file').hide();
    resultBlock.css('display', 'flex');
  }
});

// Удаление файла
$(document).on('click', '.label-file-result__delete', function (e) {
  e.preventDefault();
  const wrapper = $(this).closest('.label-file-wrapper');
  const fileInput = wrapper.find('input[type="file"]');

  fileInput.val('');                          // очищаем input
  wrapper.removeClass('file-loaded');         // ← Убираем класс wrapper
  wrapper.find('.label-file-result').hide();
  wrapper.find('.label-file').show();
});

// modal text hidden in mobile
$(document).ready(function () {
  $('.agreement-item .agreement-toggle').on('click', function () {
    var item = $(this).closest('.agreement-item');

    // для наглядности
    item.toggleClass('open');

    // контент
    item.find('.agreement-content').slideToggle(250);
  });
});


$(window).on('load', function () {
  $('.js-before-after').each(function () {
    new Cocoen(this);
  });
});


// amount
$(document).on("click", ".amount-plus", function () {
  const amount = $(this).closest(".amount");
  let val = parseInt(amount.find(".amount-value").text());
  val++;
  amount.find(".amount-value").text(val);
});

$(document).on("click", ".amount-minus", function () {
  const amount = $(this).closest(".amount");
  let val = parseInt(amount.find(".amount-value").text());
  if (val > 1) val--;
  amount.find(".amount-value").text(val);
});
