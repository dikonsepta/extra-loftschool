/*
    #3 Анализ строки

    Написать функцию которая будет принимать в качестве аргумента
    строку имитирующую адрес до файла. Функция должна возвращать true или false
    в зависимости от того есть у этого файла расширение html или нет.

    const path = "/users/download/index.html";
    console.log(isHtml(path));
    Вывод: true
*/

const path = "/users/download/index.html";

const isHtml = address => address.slice(-5) == ".html";

// const isHtml = address => {
//     let result = false;

//     if (address.slice(-5) == ".html") {
//         result = true;
//     }

//     return result;
// }

console.log(isHtml(path));