// Слайдер с Фото

const entities = [  //сущности
    {
      text: 'Rostov-on-Don, Admiral',
      img: 'C:\Users\rbryz\projects\photo_slider_project\images\png\slider_photo_1.png'
    },
    {
      text: 'Sochi Thieves',
      img: 'C:\Users\rbryz\projects\photo_slider_project\images\png\slider_photo_2.png'
    },
    {
      text: 'Rostov-on-Don Patriotic',
      img: 'C:\Users\rbryz\projects\photo_slider_project\images\png\slider_photo_3.png'
    }
  ]
  
  const text = document.querySelector('.gold_text')
  const img = document.querySelector('.image')
  
  const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url(${entities[index].img})`
  }
  
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
  })