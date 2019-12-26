/*          Инкапсуляция - сокрытие кода от пользователя. 
Если бы код не был скрыт то юзер мог бы специально/не специально получить доступ к конфиденциальную инфу, а также возможность менять её 
на то что ему нужно, без таковых прав и тем самым создать пробемы, возможно большие проблемы. 
Чтобы юзер не мог манипулировать данными от него же самого скрывают код, обычно это критически важная часть программы*/


// гетеры и сетеры соответственно для получения и изменения данных которые инкапсулированы, к которым нет др. способов
function User(name, age) {
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.getUserAge = function() {                  // гетер, который получает сокрытую переменную
        return userAge;
    }

    this.setUserData = function(age) {              // сеттер который может перезаписать или дать новое значение
        // if(typeof name === 'string' && name!= '' && name !== (/1-9/g)) {
        //     let userName = name;
        // } else {
        //     console.log('Введите корректное имя');
        // }

        if(typeof age === 'number' && age > 0 && age < 150) {
            userAge = age;
        } else {
            console.log('Введите корректный возраст');
        }
    }

    this.say = function() {
        console.log(`Имя пользователя ${this.name} и ему ${userAge} лет`);
    }
}

let Faridun = new User('Faridun', 26);
console.log(Faridun.name);
console.log(Faridun.userAge);
// console.log(Faridun.getUserAge());

// Faridun.setUserData(20);
// console.log(Faridun.getUserAge());
// Faridun.say();

Faridun.name = 'Парвиз';
Faridun.userAge = 32;
console.log(Faridun.name);
console.log(Faridun.userAge);