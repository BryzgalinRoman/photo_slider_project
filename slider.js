// СЛАЙДЕР ФОТО

//МАССИВЫ С ДАННЫМИ

images = ["images/png/slider_photo_1.png", "images/png/slider_photo_2.png", "images/png/slider_photo_3.png"];
city = ["Rostov-on-Don", "Sochi", "Rostov-on-Don"];
dept = ["LCD admiral", "Theives", "Patriotic"];
area = ["81 m2", "105 m2", "93 m2"];
time = ["3.5 months", "4 months", "3 months"];

//ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ setActive 
function setActive(parameter) {   //Задаем функцию с параметр parameter
    console.log(parameter);

    for (let k = 1; k <= 3; k++) {  // начало, условие, шаг цикла
        console.log(k);

        if (k === parameter) { // если k строго равно parameter то делай
            document.querySelector(`.n${k}`).classList.add("gold_text"); //для навигации добавляй gold_text
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 1); //для точки установи значение fill-opacity', 1
        } else { //или
            document.querySelector(`.n${k}`).classList.remove("gold_text");//для навигации убирай gold_text
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 0.3);//для точки установи значение fill-opacity', 0.3
        }
    }

    //находим и присваиваем
    document.querySelector(".slider_photo_block__picture").src = images[parameter - 1]; //меняем на новую картинку с индексом минус 1
    //отнимаем от параметра 1 так как массив начинается с 0
    document.querySelector(".slider_photo_block__picture").setAttribute("data-parameter", `${parameter}`); //меняем значение атрибута data-parameter на значение индекс полученное ранее
    document.querySelector(".city").innerHTML = city[parameter - 1]; //в сити вставляем новое значение из массива минус 1 по счету
    document.querySelector(".dept").innerHTML = dept[parameter - 1];// аналогично для других текстов
    document.querySelector(".area").innerHTML = area[parameter - 1];// аналогично для других текстов
    document.querySelector(".time").innerHTML = time[parameter - 1];// аналогично для других текстов
}

//ОБРАБОТКА КЛИКОВ НА СТРЕЛКИ
left_arrow.addEventListener("click", function () { //слышит клик на left_arrow
    const elem = document.querySelector(".slider_photo_block__picture"); //находит картинку и присваивает в elem
    const parameter = elem.getAttribute("data-parameter");
    if (parameter === "1") { //если parameter равно 1
        elem.setAttribute("data-parameter", `${images.length}`); //выставляй картинку с data-parameter равной номеру из массива
        setActive(images.length); //запускай ФУНКЦИЮ ПЕРЕКЛЮЧЕНИЯ с аргументом images.length
    } else {
        elem.setAttribute("data-parameter", `${parameter - 1}`);
        setActive(+parameter - 1); //parameter делай числом и отнимай 1 
    };
});

right_arrow.addEventListener("click", function () { //слышит клик на right_arrow
    const elem = document.querySelector(".slider_photo_block__picture")
    const parameter = elem.getAttribute("data-parameter");
    if (parameter === `${images.length}`) {
        elem.setAttribute("data-parameter", "1");
        setActive(1);
    } else {
        elem.setAttribute("data-parameter", `${parameter + 1}`);
        setActive(+parameter + 1);
    };
});

//ОБРАБОТКА КЛИКОВ НА НАВИГАЦИОННЫЕ ССЫЛКИ
let item = document.getElementsByClassName("slider_photo_block__link");  //находит все элементы с классом slider_photo_block__link
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () { //слышит клик на item[i]
        setActive(i + 1); // запускаем нашу функцию с аргументом i + 1 
        //прибавляем к порядковому номера массива 1, т.к. массив начинается с 0
    })
}

//ОБРАБОТКА КЛИКОВ НА НАВИГАЦИОННЫЕ ТОЧКИ
let itemdot = document.getElementsByClassName("navi__dot"); //находит все элементы с классом navi__dot
for (let i = 0; i < item.length; i++) {
    itemdot[i].addEventListener("click", function () {

        setActive(i + 1); //прибавляем к порядковому номера массива 1, т.к. массив начинается с 0

    })
}

