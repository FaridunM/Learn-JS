'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''), 
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

let firstAnswer, 
    secondAnswer,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

chooseExpenses();
detectDayBudget(appData.budget);
detectLevel(appData.moneyPerDay);
chooseOptExpenses();
chechSaving();

function chooseExpenses() {
    do {
        firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
        secondAnswer = +prompt('Во сколько обойдется?', '');
    }
    while (typeof(firstAnswer) === 'string' && firstAnswer == '' && secondAnswer !== null);
    appData.expenses[firstAnswer] = secondAnswer;
    console.log('well done');
}

function detectDayBudget(budget) {
    appData.moneyPerDay = +(budget / 30).toFixed(2);
    alert('Бюджет пользователя за день составляет: ' + appData.moneyPerDay);
}

function detectLevel(moneyPerDay) {
    if(moneyPerDay <= 30) {
        console.log('Достаток пользователя низкий');
    } else if(moneyPerDay >= 30 && moneyPerDay <= 150) {
        console.log('Достаток пользователя средний');
    } else {
        console.log('Пользователя живёт в достатке');
    }
}

function chooseOptExpenses() {
    let answer;
    for (let i = 1; i <= 3; i++) {
        answer = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = answer;
    }
}

function chechSaving() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма депозита?'), 
        percent = +prompt('Под какой процент?');

        appData.monthIncome = (((save / 100) / 12) * percent).toFixed(2);
        alert('Ваш ежемесячный доход от депозита составляет ' + appData.monthIncome);
    }
}

console.log(appData);