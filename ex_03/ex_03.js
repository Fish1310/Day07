function map(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(map([5, 8, 10], isEven));