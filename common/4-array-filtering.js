/*
    #4 Фильтрация массива

    Создайте функцию которая в качестве аргумента принимает целое число,
    и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел.
    И используя функцию проверки числа на четность, создайте из готового массива новый,
    который будет содержать только четные числа. Результат выведите в консоль.

    const mixedArray = [3,13,74,14,66,15,22,4];
    const isEven = num => {
        // ... code ...
    };
    console.log(filterArray(mixedArray, isEven));
    Вывод: 74,14,66,22,4
*/

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => num % 2 == 0;

const filterArray = (array, funct) => {
    let result = [];

    array.forEach(element => {
        if (funct(element) == true) {
            result.push(element);
        }
    });

    return result;
}

console.log(filterArray(mixedArray, isEven));