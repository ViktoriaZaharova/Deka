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
