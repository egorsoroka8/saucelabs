const arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
    console.log(sum)
    console.log(current)
    return sum + current;
}, 0);

console.log(result)