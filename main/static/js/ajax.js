// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://10.70.4.246:8000/test/',false);



// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  console.log(JSON.parse(xhr.responseText));
  var a = JSON.parse(xhr.responseText);
  console.log(a);
  console.log(a.test_LIST.length);
  for (i = 0;i < (a.test_LIST.length);i++){
      console.log(a.test_LIST[i])
  }
  // responseText -- текст ответа.
}
