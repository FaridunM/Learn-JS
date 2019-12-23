window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let header = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        

    hideTabContent(1);

    function hideTabContent(item) {
        for (let i = item; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(item) {
        if (tabContent[item].classList.contains('hide')) {
            tabContent[item].classList.add('show'); 
            tabContent[item].classList.remove('hide'); 
        }
    }

    header.addEventListener('mouseover', (e) => {
        let target = e.target,
            tabs = header.children;
            
        if (target && target.classList.contains('info-header-tab')) {            
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // timer

    let deadline = '2020-01-01';

    function difDates(endtime) {
        let dif = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor(dif/1000) % 60,
            minutes = Math.floor(dif/1000/60) % 60,
            hours = Math.floor(dif/1000/60/60) % 60,
            days = Math.floor(dif/(1000*60*60*24));

        return {
            'total' : dif,
            'day' : days,
            'hour' : hours,
            'second' : seconds,
            'minute' : minutes
        };
    }

    function dinamicLayout(id, endtime) {
        let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval((endtime) => {
            let newTime = difDates(endtime);
            seconds.textContent = newTime.second <= 9 ? '0' + newTime.second : newTime.second;
            minutes.textContent = newTime.minute <= 9 ? '0' + newTime.minute : newTime.minute;
            hours.textContent = newTime.hour <= 9 ? '0' + newTime.hour : newTime.hour;
            days.textContent = newTime.day <= 9 ? '0' + newTime.day : newTime.day;

            if (newTime.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }, 1000);
    }

    dinamicLayout('timer', deadline);

    // modal

    let more = document.querySelector('.more'),
        moreTab = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');          // Если стрелочная ф-ия это 1-ая ф-ия то у неё не будет своего this.
        document.body.style.overflow = 'hidden';
    });

    moreTab.forEach((item) => {                     // Если стрелочная ф-ия это 1-ая ф-ия то у неё не будет своего this.
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с вами свяжемся',
        fail: 'Что-то пошло не так!'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function sendData(element) {
        element.addEventListener('submit', event => {
            event.preventDefault();
            element.appendChild(statusMessage);
    
            let formData = new FormData(element),
                obj = {};
    
            formData.forEach((value, key) => {
                obj[key] = value;
            });
    
            let jsonData = JSON.stringify(obj);
    
            function passData(data) {
                return new Promise(function(resolve, reject) {
                    // --- For work with requests you need the local server (like open server / mamp) ---
                    let requst = new XMLHttpRequest();
                    requst.open('POST', 'server.php');
                    requst.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    // requst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
                    requst.onreadystatechange = function() {
                        if (requst.readyState === 4) {
                            requst.status == 200 ? resolve() : reject();
                        }
                    }
    
                    requst.send(data);
                })
            }
    
            function removeInputValue() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
    
            passData(jsonData)            
            .then(() => statusMessage.textContent = message.success)
            .catch(() => statusMessage.textContent = message.fail)
            .then(removeInputValue());
        });
    }

    sendData(form);
    sendData(contactForm);

    // slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');        

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }        

    prev.addEventListener('click', function() {
        changeSlide(-1);
    });

    next.addEventListener('click', function() {
        changeSlide(1);
    });

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 1; i <= slides.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }           
        }            
    });

    // calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDates = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        datesSum = 0,
        totalSum = 0;        

        totalValue.textContent = 0;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        totalSum = (datesSum + personsSum) * 4000;

        if (restDates.value == '' || personsSum == 0) {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = totalSum * place.options[place.selectedIndex].value;
        }
    });

    restDates.addEventListener('input', function() {
        datesSum = +this.value;        
        totalSum = (datesSum + personsSum) * 4000;

        if (persons.value == '' || datesSum == 0) {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = totalSum * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function() {
        if (restDates.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = totalSum * this.options[this.selectedIndex].value;
        }
    });
});



// ---------- How to recive and post in JSON-format -----------

// let options = {
//     width: 1000,
//     height: 500,
//     background: 'red',
//     font: {
//         size: '14px',
//         color: '#fff'
//     }
// };

// let codeToJSON = JSON.stringify(options);
// console.log(JSON.stringify(options), 'превращение в JSON-формат для передачи');

// console.log(JSON.parse(codeToJSON);, 'раскодировка из JSON-формата');