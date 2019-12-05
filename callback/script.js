// Callback ф-ия
function learnJS(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

learnJS('JavaScript', function () { // 1-ый вариант
    console.log('Я изучаю callback-функцию');
});

function done() {
    console.log('Этот текст должен появиться 2-ым, т.к. так работает callback ф-ия');
}

learnJS('JS', done); // 2-ой вариант