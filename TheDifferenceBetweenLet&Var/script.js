function makeArr() {
    var items = [];					// один items на весь код

    for (let i = 0; i < 10; i++) {  // при каждой итерации i новая
        let item = function() {		// при каждой итерации item новый
            console.log(i);
        }
        items.push(item);
    }
    
    return items;
}

var arr = makeArr();				// один arr на весь код

arr[1]();
arr[3]();
arr[5]();