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

        // function updateTimer(endtime) {
        //     let newTime = difDates(endtime);            
        //     seconds.textContent = newTime.second <= 9 ? '0' + newTime.second : newTime.second;
        //     minutes.textContent = newTime.minute <= 9 ? '0' + newTime.minute : newTime.minute;
        //     hours.textContent = newTime.hour <= 9 ? '0' + newTime.hour : newTime.hour;
        //     days.textContent = newTime.day <= 9 ? '0' + newTime.day : newTime.day;

        //     if (newTime.total <= 0) {
        //         clearInterval(timeInterval);
        //         days.textContent = '00';
        //         hours.textContent = '00';
        //         minutes.textContent = '00';
        //         seconds.textContent = '00';
        //     }
        // }
    }

    dinamicLayout('timer', deadline);

    // modal

    const more = document.querySelector('.more'),
        moreTab = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        
    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    moreTab.forEach((item) => {
        item.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        moreTab.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

});