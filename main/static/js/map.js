//получение геолокации
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    alert("Geolocation is not supported by this browser.");
}

//
function showPosition(position) {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
            zoom: 17,
            center: [a, b],
            controls: ['geolocationControl', 'zoomControl']
        });

        // Вычисление кратчайшего пути до должника и простройка маршрута
        var multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                [a, b],
                [55.761184, 37.57850]
            ]
        }, {
            boundsAutoApply: true
        });


        // Подписка на событие обновления данных маршрута.
        multiRoute.model.events.add('requestsuccess', function () {
            // Получение ссылки на активный маршрут.
            // В примере используется автомобильный маршрут,
            // поэтому метод getActiveRoute() вернет объект multiRouter.driving.Route.
            var activeRoute = multiRoute.getActiveRoute();
            // Вывод информации о маршруте.
            console.log(activeRoute.properties.get("distance").value.toFixed()/1000);
            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
            // Для автомобильных маршрутов можно вывести
            // информацию о перекрытых участках.
            if (activeRoute.properties.get("blocked")) {
                console.log("На маршруте имеются участки с перекрытыми дорогами.");
            }
        });
        // Добавление маршрута на карту.
        myMap.geoObjects.add(multiRoute);
        

    }
}