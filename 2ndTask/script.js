'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''), 
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let firstAnswer, 
    secondAnswer,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

do {
    firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
    secondAnswer = +prompt('Во сколько обойдется?', '');
}
while (typeof(firstAnswer) === 'string' && firstAnswer == '' && secondAnswer !== null);
console.log('well done');

appData.expenses[firstAnswer] = secondAnswer;

appData.moneyPerDay = appData.budget / 30;
alert('Бюджет пользователя на день составляет: ' + appData.moneyPerDay);

if(appData.moneyPerDay <= 30) {
    console.log('Достаток пользователя низкий')
} else if(appData.moneyPerDay >= 30 && appData.moneyPerDay <= 150) {
    console.log('Достаток пользователя средний')
} else {
    console.log('Пользователя живёт в достатке')
}
console.log(appData)