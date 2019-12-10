let menu = document.querySelector('.menu'),
    item = document.querySelectorAll('.menu .menu-item');

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(item[2], item[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.getElementById('title');
title.textContent = 'Мы продаём только подлинную технику Apple';

// Удалить рекламу со страницы
let secondColumn = document.querySelectorAll('.column')[1],
    advertisment = document.querySelector('.column .adv');
secondColumn.removeChild(advertisment);

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let userAnswer = prompt('Что вы думаете о технике Apple? (может хочешь iphone9, пачку:D)',
    'Нее не нравиться мне ваша техника, и iphone9 мне не нужен'),
    yourAnswer = document.getElementsByClassName('prompt')[0];
yourAnswer.textContent = userAnswer;