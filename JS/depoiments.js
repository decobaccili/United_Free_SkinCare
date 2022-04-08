const images = [  
  { 'id' : '1', 'name' : 'Antonella Mari', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural.", 'url' : './img/antonella.jpg'},

  { 'id' : '2', 'name' : 'Andreia Star', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural." ,'url' : "./img/andreia.jpg"},

  { 'id' : '3', 'name' : 'Marcela Ribas', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural.", 'url' : './img/marcela.jpg'},

  { 'id' : '4', 'name' : 'Mariana Rios', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural.", 'url' : './img/mariana.jpg'},

  { 'id' : '5', 'name' : 'Roberta Avellar', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural.", 'url' : './img/roberta.jpg'},

  { 'id' : '6', 'name' : 'Scarlett Black', 'depoiment' : "I don’t wear makeup very often, but when I do I go for a natural, no-makeup look. This skin tint and concealer gives exactly that. It helps even out my skin tone and looks very natural.", 'url' : './img/scarlett.jpg'},
]


const containerItems = document.querySelector('.container__items');

const loadImages = (images, container) => {
  images.forEach( image => {
  container.innerHTML += `
  <div class="item">
    <img class="item__img" src='${image.url}'>
    <div class="item__depoiment">
      <p class="item__text">${image.depoiment}</p>
      <p class="item__name">${image.name}</p>
    </div>
  </div>
  `
  })
}


loadImages(images, containerItems);



let items = document.querySelectorAll('.item');

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}


const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#next').addEventListener('click', next);


