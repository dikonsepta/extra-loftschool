/*
    #1 Фильтрация строки

    Создать переменную со строковым значением. Сформировать переменную, 
    которая будет состоять только из ГЛАСНЫХ букв этой строки.
    Результат вывести в консоль. Ниже пример работы.

    const string = "Привет! Как дела?";
    console.log(getVowels(string));
    Вывод: иеаеа
*/

const string = "ПРИВЕТ! КАК ДЕЛА?";

const getVowels = lower => {
    const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    let result = "";

    for (let i = 0; i < lower.length; i++) {
        let letter = lower[i].toLowerCase();
        // if (vowels.indexOf(letter) != -1) {
        if (vowels.includes(letter) == true) {
            result += letter;
        }
    }

    return result;
}

// const getVowels = (lower) => {
//     lower = string.toLowerCase();
//     lowerLen = lower.length;
//     const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
//     vowelsLen = vowels.length;
//     var result = "";

//     for (let i = 0; i < lowerLen; i++) {
//         for (let j = 0; j < vowelsLen; j++) {
//             if (lower[i] == vowels[j]) {
//                 result = result + string[i];
//             }
//         }
//     }

//     return result.toLowerCase();
// }

console.log(getVowels(string));