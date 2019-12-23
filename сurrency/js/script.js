let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function getUSD() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.onreadystatechange = function() {                    
                    if (request.readyState === 4) {
                        if (request.status == 200) {
                            resolve(request);
                        }
                        else {
                            reject();
                        }
                    }
                }

            request.send();
        });
    }

    getUSD()
    .then(request => {        
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd;
        console.info('Таков курс рубля к доллару на 20.12.20:', data.usd);
    })
    .catch(() => inputUsd.value = "Что-то пошло не так!");
});