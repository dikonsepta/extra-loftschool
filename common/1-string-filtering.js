/*
    #1 Фильтрация строки

    Создать переменную со строковым значением. Сформировать переменную, 
    которая будет состоять только из ГЛАСНЫХ букв этой строки.
    Результат вывести в консоль. Ниже пример работы.

    const string = "Привет! Как дела?";
    console.log(getVowels(string));
    Вывод: иеаеа
*/

string = "ПРИВЕТ! КАК ДЕЛА?"; // const

getVowels = lower => { // const
    let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
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

//  Решала циклом в цикле, пока не узнала о includes

window.alert(getVowels(string));