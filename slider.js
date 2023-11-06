// СЛАЙДЕР ФОТО

//МАССИВЫ С ДАННЫМИ

images = ["images/png/slider_photo_1.png", "images/png/slider_photo_2.png", "images/png/slider_photo_3.png"];
city = ["Rostov-on-Don", "Sochi", "Rostov-on-Don"];
dept = ["LCD admiral", "Theives", "Patriotic"];
area = ["81 m2", "105 m2", "93 m2"];
time = ["3.5 months", "4 months", "3 months"];

//ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ setActive (при переключении меняет всё)
function setActive(index) {   //Задаем функцию с параметр index
    for (let k = 1; k <= 3; k++) {  // начало, условие, шаг цикла
        if (k === index) { // если k строго равно index то делай
            document.querySelector(`.n${k}`).classList.add("gold_text"); //для навигации
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 1); //для точки
        } else {
            document.querySelector(`.n${k}`).classList.remove("gold_text");//для навигации
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 0.3);//для точки
        }
    }

//находим и меняем на новое внутри функции
    document.querySelector(".slider_photo_block__picture").src = images[index - 1]; //меняем на новую картинку с индексом минус 1
    document.querySelector(".slider_photo_block__picture").setAttribute("data-index", `${index}`); //меняем значение атрибута data-index на значение индекс полученное ранее
    document.querySelector(".city").innerHTML = city[index - 1]; //в сити вставляем новое значение из массива минус 1 по счету
    document.querySelector(".dept").innerHTML = dept[index - 1];// аналогично для других текстов
    document.querySelector(".area").innerHTML = area[index - 1];// аналогично для других текстов
    document.querySelector(".time").innerHTML = time[index - 1];// аналогично для других текстов
}

//ОБРАБОТКА КЛИКОВ НА СТРЕЛКИ
left_arrow.addEventListener("click", function () { //слышит клик на left_arrow
    const elem = document.querySelector(".slider_photo_block__picture"); //находит картинку и присваивает в elem
    const index = elem.getAttribute("data-index"); //получает значение data-index у elem и присваивает index
    if (index === "1") { //если index равно 1
        elem.setAttribute("data-index", `${images.length}`); //выставляй картинку с data-index равной длине массива
        setActive(images.length); //запускай ФУНКЦИЮ ПЕРЕКЛЮЧЕНИЯ с аргументом images.length
    } else {
        elem.setAttribute("data-index", `${index - 1}`);
        setActive(+index - 1); //index делай числом и отнимай 1 чтобы заново?????
    };
});

right_arrow.addEventListener("click", function () { //слышит клик на right_arrow
    const elem = document.querySelector(".slider_photo_block__picture")
    const index = elem.getAttribute("data-index");
    if (index === `${images.length}`) {
        elem.setAttribute("data-index", "1");
        setActive(1);
    } else {
        elem.setAttribute("data-index", `${index + 1}`);
        setActive(+index + 1);
    };
});

//обработка кликов на элементы 
let item = document.getElementsByClassName("slider_photo_block__link");  //находит все элементы с классом slider_photo_block__link
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () { //слышит клик на item[i]
        setActive(i + 1); // запускаем нашу функцию с аргументом i + 1 (увеличивает на 1 item)
    })
}

//обработка кликов на навигационные точки
let itemdot = document.getElementsByClassName("navi__dot"); //находит все элементы с классом navi__dot
for (let i = 0; i < item.length; i++) {
    itemdot[i].addEventListener("click", function () {
        setActive(i + 1);
    })
}

