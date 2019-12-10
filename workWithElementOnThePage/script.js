function changeSquare() {
    let box = document.getElementById('box');
    if (box.style.backgroundColor == 'lime') {
        box.style.borderRadius = '0%';
        box.style.backgroundColor = 'red';
    }
    else {
        box.style.borderRadius = '100%';
        box.style.backgroundColor = 'lime';
    }
}

// console.log(document.querySelector('.circle').style.backgroundColor == 'blue');

function traficklight() {
    let circle = document.getElementsByClassName('circle');
    console.log(circle[0].style.backgroundColor == '');
    if (circle[0].style.backgroundColor == '' || circle[0].style.backgroundColor == 'blue') {
        circle[0].style.backgroundColor = 'red';
        circle[1].style.backgroundColor = 'yellow';
        circle[2].style.backgroundColor = 'lime';
    } else {
        circle[0].style.backgroundColor = 'blue';
        circle[1].style.backgroundColor = 'blue';
        circle[2].style.backgroundColor = 'blue';
    }
}

function inline() {
    let circles = document.querySelectorAll('.wrapper .circle'),
        displaySetting = getComputedStyle(circles).display;
        console.log(displaySetting);
    if (displaySetting == 'block') {        
        displaySetting = 'inline-block';        
        // circles.forEach(circle => {
        //     getComputedStyle(circle).display = 'inline-block';
        // });
    } else {
        console.log(displaySetting);
        displaySetting = 'block';
        // circles.forEach(circle => {
        //     getComputedStyle(circle).display = 'block';
        // });
    }
    console.log(circles);
}

function textInEvery() {
    let hearts = document.querySelectorAll('.heart .text');
    for (const key in hearts) {
        if (hearts.hasOwnProperty(key)) {
            let heart = hearts[key];
            heart.textContent = 'как дела?';
        }
    }
}

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
    // console.log(oneHeart);