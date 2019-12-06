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
        savings: true, 
        chooseExpenses: function() {
            do {
                firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
                secondAnswer = +prompt('Во сколько обойдется?', '');
            }
            while (typeof(firstAnswer) !== 'string' && firstAnswer == '' && secondAnswer == null);
            appData.expenses[firstAnswer] = secondAnswer;
            console.log('well done');
        },
        detectDayBudget: function() {
            appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
            alert('Бюджет пользователя за день составляет: ' + appData.moneyPerDay);
        },
        detectLevel: function() {
            if(appData.moneyPerDay <= 30) {
                console.log('Достаток пользователя низкий');
            } else if(appData.moneyPerDay >= 30 && appData.moneyPerDay <= 150) {
                console.log('Достаток пользователя средний');
            } else {
                console.log('Пользователя живёт в достатке');
            }
        },
        chooseOptExpenses: function() {
            let answer;
            for (let i = 1; i <= 3; i++) {
                answer = prompt('Статья необязательных расходов?', '');
                appData.optionalExpenses[i] = answer;
            }
        },
        chechSaving: function() {
            if (appData.savings == true) {
                let save = +prompt('Какова сумма депозита?'), 
                percent = +prompt('Под какой процент?');
        
                appData.monthIncome = (((save / 100) / 12) * percent).toFixed(2);
                alert('Ваш ежемесячный доход от депозита составляет ' + appData.monthIncome);
            }
        }, 
        chooseIncome: function() {
            let answer = prompt('Что приносит вам доп. доход? (Перечислите пожалуйста через запятую)', '');
            while(typeof(answer) === 'string' && !isNaN(answer) && answer !== null) {
                answer = prompt('Что приносит вам доп. доход? (Перечислите пожалуйста через запятую)', '');
            }
            appData.income = answer.split(', ');
            appData.income.push(prompt('Если что-нибудь забыли можете дополнить'));
            appData.income.sort();

            appData.income.forEach ((item, i) => 
                alert("Способы доп. заработка: " + (++i) + " - " + item));

            console.log('Наша программа включает в себя данные: ');
            for (let key in appData) {
                console.log(appData[key]);
            }
        }
    };


let person = {
    name: 'Faridun',
    secondName: 'Marufi',
    age: 150,
    want: 'jeday in JS'
};

// 1-ый способ
for (let j in person) {
    console.log(j, '-', person[j] + ',');
}

// 2-ой
Object.keys(person).forEach(function(key) {
    console.log(key, ':', this[key]);
  }, person);