function findMaxValue(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [1, 5, 2, 9, 3, 7];
var max = findMaxValue(numbers);
console.log("The maximum value is: ".concat(max));
