$(function () {

    ymaps.ready(init);

    function init() {

        // Координаты меток (пример как на скриншоте)
        const points = [
            [55.7558, 37.6176], // Москва
            [56.8389, 60.6057], // Екатеринбург
            [55.7963, 49.1088], // Казань
            [56.3269, 44.0059], // Нижний Новгород
            [54.7351, 55.9587], // Уфа
            [56.8519, 53.2045], // Ижевск
            [58.0105, 56.2502], // Пермь
            [52.2870, 104.2810], // Иркутск (пример)
            [53.1959, 45.0183], // Пенза
            [54.3142, 48.4031], // Ульяновск
            [55.1599, 61.4026], // Челябинск
        ];

        // Создание карты
        const map = new ymaps.Map("map", {
            center: [55.7558, 37.6176],
            zoom: 5,
            controls: ['zoomControl']
        });

        // Кастомный стиль метки
        const circleLayout = ymaps.templateLayoutFactory.createClass(
            `<div style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: #5A2EEA;
                border: 6px solid #ffffff;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
            "></div>`
        );

        // Добавляем все метки
        points.forEach(function (coords) {
            let placemark = new ymaps.Placemark(coords, {}, {
                iconLayout: circleLayout,
                iconShape: {
                    type: 'Circle',
                    coordinates: [16, 16],
                    radius: 16
                }
            });
            map.geoObjects.add(placemark);
        });

        // Масштаб под все точки
        map.setBounds(map.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 50
        });
    }

});