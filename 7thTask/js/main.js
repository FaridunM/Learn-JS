let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    incomeItem = document.querySelector('.choose-income'),
    checker = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent');

let time, money;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Введите пожалуйста ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    expensesBtn.removeAttribute('disabled');
    expensesBtn.className = 'expenses-item-btn';
    expensesBtn.textContent = 'Утвердить';
    optionalExpensesBtn.removeAttribute('disabled');
    optionalExpensesBtn.className = 'optionalexpenses-btn';
    optionalExpensesBtn.textContent = 'Утвердить';
    console.log('Дизактивировано');
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let answer = expensesItem[i].value,
            cost = +expensesItem[++i].value;

        if (typeof(answer) != null && typeof(cost) != null && answer != '' && cost != '' && answer.length < 50) {
            appData.expenses[answer] = cost;
            sum += cost;
        } else {
            i--;
        }
        expenses.textContent = sum;
        countBtn.removeAttribute('disabled');
        countBtn.className = 'count-budget-btn';
        countBtn.textContent = 'Рассчитать';
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;

        optionalExpenses.textContent += opt + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = +((appData.budget - expenses.textContent) / 30).toFixed(2);
        dayBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 50) {
            level.textContent = 'Достаток пользователя низкий';
        } else if (appData.moneyPerDay >= 50 && appData.moneyPerDay <= 180) {
            level.textContent = 'Достаток пользователя средний';
        } else if (appData.moneyPerDay > 180) {
            level.textContent = 'Достаток пользователя высокий';
        } else {
            level.textContent = 'Что-то не так, проверьте введённые данные';
        }
    } else {
        alert('Прежде чем "Расчитать", сначала жмякните по "Начать расчёт"');
    }
});

incomeItem.addEventListener('input', function () {
    let answer = incomeItem.value;
    appData.income = answer.split(', ');
    income.textContent = answer;
});

checker.addEventListener('click', function () {
    appData.savings = !appData.savings;
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let Sum = +sum.value,
        Percent = +percent.value;

        appData.monthIncome = Sum/12/100*Percent;
        appData.yearIncome = Sum/100*Percent;

        monthSavings.textContent = appData.monthIncome.toFixed(2);
        yearSavings.textContent = appData.yearIncome.toFixed(2);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let Sum = +sum.value,
        Percent = +percent.value;

        appData.monthIncome = Sum/12/100*Percent;
        appData.yearIncome = Sum/100*Percent;

        monthSavings.textContent = appData.monthIncome.toFixed(2);
        yearSavings.textContent = appData.yearIncome.toFixed(2);
    }
});

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

if (appData.budget == undefined) {
    expensesBtn.setAttribute('disabled', 'disabled');
    expensesBtn.className = 'expenses-item-disabled-btn';
    expensesBtn.textContent = 'Не активировано';

    optionalExpensesBtn.setAttribute('disabled', 'disabled');
    optionalExpensesBtn.className = 'optionalexpenses-disabled-btn';
    optionalExpensesBtn.textContent = 'Не активировано';

    countBtn.setAttribute('disabled', 'disabled');
    countBtn.className = 'count-budget-disabled-btn';
    countBtn.textContent = 'Не активировано';
}