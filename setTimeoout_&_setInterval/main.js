// let timeout = setTimeout(sayHello, 3500);
// let timeInter = setInterval(sayHello, 2500);
// clearTimeout(timeID);

// function sayHello() {
//     console.log("Привет мир, обожаю турчанок, француженок, японок и рыжыньких и не важно какой нации?");
// }

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation() {
    let positionX = 0;
        // positionY = 0;

    let repeat = setInterval(frame, 10);
    function frame() {
        if (positionX == 300) {
            clearInterval(repeat);
        }
        // else if (positionX == 300) {
        //     positionY++;
        //     box.style.top = positionY + 'px';
        // } 
        else {
            positionX++;
            box.style.left = positionX + 'px';
            box.style.top = positionX + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


let block = document.querySelector('.block'),
    buttons = document.querySelectorAll('.block button');

    block.addEventListener('click', function() {
        if (event.target && event.target.tagName == 'BUTTON') {
            myAnimation();
        }
    });
    