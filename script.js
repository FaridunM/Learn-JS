'use strict';

let money, 
    time;

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let firstAnswer, 
    secondAnswer,
    appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
secondAnswer = prompt('Во сколько обойдется?', '');

appData.expenses.firstAnswer = firstAnswer;
appData.expenses.secondAnswer = secondAnswer;

alert('Бюджет пользователя на день составляет: ' + money/30);
// console.log(appData);