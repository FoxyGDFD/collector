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
            controls: ['zoomControl']
        });

        //Отображение чувака на карте ебать

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }


        var prevPlacemark = new ymaps.GeoObject({});

        function showPosition(position) {
            var manA = position.coords.latitude;
            var manB = position.coords.longitude;
            var myPlacemark = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [manA, manB],
                    iconImageSize: [30, 42],
                }
            });
            if (prevPlacemark) {
                myMap.geoObjects.remove(prevPlacemark);
            }

            myMap.geoObjects.add(myPlacemark);
            prevPlacemark = myPlacemark;

        }


        setInterval(getLocation, 2000);


        //Конец отображения чувака ебать

        // Вычисление кратчайшего пути до должника и простройка маршрута
        var multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                [a, b],
                ['Метро Павелецкая']
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
            console.log(activeRoute.properties.get("distance").value.toFixed() / 1000);

            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
            // Для автомобильных маршрутов можно вывести
            // информацию о перекрытых участках.


        // Добавление маршрута на карту.
        myMap.geoObjects.add(multiRoute);


    })
}}