jQuery(function ($) {

  // SVG маркер как в макете
  const customIcon = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#5A3FC3"/>
<circle cx="20" cy="20" r="5" fill="#F7F4FF"/>
</svg>
  `;

  const mapData = {
    moscow: {
      center: [55.760160, 37.559797],
      placemark: [55.760160, 37.559797],
      element: '.ymap-moscow'
    },
    spb: {
      center: [59.931140, 30.360910],
      placemark: [59.931140, 30.360910],
      element: '.ymap-spb'
    }
  };

  let mapInit = {
    moscow: false,
    spb: false
  };

  function initMap(name) {
    const data = mapData[name];

    ymaps.ready(function () {

      const map = new ymaps.Map($(data.element)[0], {
        center: data.center,
        zoom: 16,
        controls: ['zoomControl']
      });

      const placemark = new ymaps.Placemark(
        data.placemark,
        {},
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(customIcon),
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        }
      );

      map.geoObjects.add(placemark);
    });
  }

  // Первая карта (Москва)
  initMap('moscow');
  mapInit.moscow = true;

  // Карта при переключении табов
  $('.contacts-tabs .nav-link').on('shown.bs.tab', function () {
    const target = $(this).data('bs-target');

    if (target.includes('spb') && !mapInit.spb) {
      initMap('spb');
      mapInit.spb = true;
    }
  });

});
