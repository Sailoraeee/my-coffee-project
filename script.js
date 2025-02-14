// script.js

// Данные о кофейнях (можно заменить на данные из базы данных или API)
const cafes = [
    { name: "Кофе Хаус", address: "ул. Ленина, 10", coords: [55.7558, 37.6176] },
    { name: "Старбакс", address: "ул. Тверская, 5", coords: [55.7539, 37.6208] },
    { name: "Кофемания", address: "ул. Арбат, 20", coords: [55.7515, 37.6169] }
];

// Инициализация карты
function initMap() {
    const map = new ymaps.Map("map", {
        center: [55.7558, 37.6176], // Центр Москвы
        zoom: 12
    });

    // Добавление меток на карту
    cafes.forEach(cafe => {
        const placemark = new ymaps.Placemark(cafe.coords, {
            hintContent: cafe.name,
            balloonContent: `${cafe.name}<br>${cafe.address}`
        });
        map.geoObjects.add(placemark);
    });

    // Заполнение списка кофеен
    const cafeList = document.getElementById("cafe-list");
    cafes.forEach(cafe => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${cafe.name}</strong><br>${cafe.address}`;
        cafeList.appendChild(listItem);
    });
}

// Загрузка API Яндекс.Карт и инициализация карты
ymaps.ready(initMap);