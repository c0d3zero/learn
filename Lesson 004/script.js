'use strict';


//________________ Типы данных

var number = 5; // - числа могут быть целыми и дробными. 
var string = "Test Message"; // строка. ТЕКСТ обязательно в кавычках
var sym = Symbol(); // Символ
var boolean = true; // логический тип данных (да/нет)
null; // обозначение того чего не существует console.log(something) - пример
undefined; // обьект существует но у него нет значения пример  (let something;)
var obj = {};  // ОБЪЕКТ



// ------------- Пример объекта со значениями

let persone = { // название обьекта
    name: "John", // свойства объекта на строках (20,21,22)
    age: 25,
    isMarried: false
};

console.log(persone.name)  // отобразится в консоли (John) т.е. имя объекта.
// если название большое - console.log(persone["name"]);

// -------------- Массив

let arr = ['photo.jpg','orange.bmp','gradient.png']; // массив служит для ЛЮБЫХ ТИПОВ ДАННЫХ

console.log(arr[2])  //- вывод в консоль определённого обьекта из массива.
// все обьекты в МАССИВЕ начинаются с цифры 0. - т.е. 0,1,2,3,4.. и т.д.

