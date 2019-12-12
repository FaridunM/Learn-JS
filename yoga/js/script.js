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

    header.addEventListener('mouseover', function(e) {
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


});