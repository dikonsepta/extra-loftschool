/*
    #2 Выборка объекта

    Сформировать произвольный массив объектов, описывающий, например,
    работников компании, в каждом объекте должны содержаться сл. свойства (поля):
        name (содержащее имя сотрудника) и salary (содержащее зарплату сотрудника от 0 до 3000).
    Сформировать функцию в которую будет передан в качестве аргумента этот массив
    и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.

    const workers = [
        {"name":"John","salary":500},
        {"name":"Mike","salary":1300},
        {"name":"Linda","salary":1500}
    ];
    console.log(getWorthyWorkers(workers))
    Вывод: Mike,Linda
*/

const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }
];

const getWorthyWorkers = objects => {
    let result = [];

    // for (let i = 0; i < objects.length; i++) {
    objects.forEach(element => {
        if (element.salary >= 1000) {
            result.push(element.name);
        }
    });

    return result;
}

console.log(getWorthyWorkers(workers))