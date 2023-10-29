// Слайдер с Фото

//массивы с данными
images = ["images/png/slider_photo_1.png", "images/png/slider_photo_2.png", "images/png/slider_photo_3.png"];
city = ["Rostov-on-Don", "Sochi", "Rostov-on-Don"];
dept = ["LCD admiral", "Theives", "Patriotic"];
area = ["81 m2", "105 m2", "93 m2"];
time = ["3.5 months", "4 months", "3 months"];

//функция переключения активного набора данных
function setActive(index) {   //Задаем функцию с параметрами index
    for (let k = 1; k <= 3; k++) {  // начало, условие, шаг
        if (k === index) { // если k строго равно index то делай
            document.querySelector(`.n${k}`).classList.add("gold_text"); //querySelector возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 1);
        } else {
            document.querySelector(`.n${k}`).classList.remove("gold_text");
            document.querySelector(`.n${k}_navi_icon`).setAttribute('fill-opacity', 0.3);
        }
    }
    document.querySelector(".slider_photo_block__picture").src = images[index - 1];
    document.querySelector(".slider_photo_block__picture").setAttribute("data-index", `${index}`);
    document.querySelector(".city").innerHTML = city[index - 1];
    document.querySelector(".dept").innerHTML = dept[index - 1];
    document.querySelector(".area").innerHTML = area[index - 1];
    document.querySelector(".time").innerHTML = time[index - 1];
}

//обработка кликов на элементы меню завершенных проектов
let item = document.getElementsByClassName("slider_photo_block__link");  //Принимает имя класса как строку. Возвращает массив элементов.
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        setActive(i + 1);
    })
}

//обработка кликов на навигационные точки
let itemdot = document.getElementsByClassName("navi__dot");
for (let i = 0; i < item.length; i++) {
    itemdot[i].addEventListener("click", function () {
        setActive(i + 1);
    })
}

//стрeлки
left_arrow.addEventListener("click", function () {
    const elem = document.querySelector(".slider_photo_block__picture");
    const index = elem.getAttribute("data-index");
    if (index === "1") {
        elem.setAttribute("data-index", `${images.length}`);
        setActive(images.length);
    } else {
        elem.setAttribute("data-index", `${index - 1}`);
        setActive(+index - 1);
    };
});

right_arrow.addEventListener("click", function () {
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