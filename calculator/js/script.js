let a = 6;
let b = 'Hello';

console.log(a);

//Как получить информацию со страницы

//Элемент input
let inputIn1 = document.querySelector('.input-in-1');
let inputIn2 = document.querySelector('.input-in-2');
//Элемент button
// let button = document.querySelector('button');
let answer = document.querySelector('.answer');
let bt1 = document.querySelector('.bt1');
let bt2 = document.querySelector('.bt2');
let bt3 = document.querySelector('.bt3');
let bt4 = document.querySelector('.bt4');
let bt5 = document.querySelector('.bt5');
let btClear = document.querySelector('.btClear');

//Програмируем событие/функцию
//Берем кнопку бутон, и хотим на неё нажимать
//Мы получили возможность читать данные из инпута
bt1.onclick = function () {
    //То что мы здесь напишем, будет выполнено только тогда когда кнопка нажмется.
    //console.log('Ответ запроса:');
    // value - это то что введено в input-in
    // console.log(inputIn.value);
    // let b = +inputIn.value; //ставим + перед элементом что бы избежать конкатенирования и сделать числом. + :позволяет перевести в число!
    //console.log(b + 10);
    let a = +inputIn1.value;
    let b = +inputIn2.value;
    //Выводим уведомление о результате
    // alert('Ваш ответ:' + "\n" + a * b);

    //Вывод в блок ответа
    answer.value = a * b;
};

//Сложение
bt2.onclick = function () {
    let a = +inputIn1.value;
    let b = +inputIn2.value;
    answer.value = a + b;
}

//Вычитание
bt3.onclick = function () {
    let a = +inputIn1.value;
    let b = +inputIn2.value;
    answer.value = a - b;
}

//Деление
bt4.onclick = function () {
    let a = +inputIn1.value;
    let b = +inputIn2.value;
    answer.value = a / b;
}

//Возведение в степень
bt5.onclick = function () {
    let a = +inputIn1.value;
    let b = +inputIn2.value;
    answer.value = a ** b;
}


// Кнопка для очищения всех данных.
btClear.onclick = function () {

    //очищаем поле инпута после нажатия кнопки
    inputIn1.value = '';
    inputIn2.value = '';
    answer.value = '';

}