// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
// створення галереї з масиву
galleryItems.map(el => {
  const { description, original, preview } = el;

  gallery.innerHTML += `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
});

// налаштування SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});




// >>> TEST

// const abc = {
//   one: 123,
//   two: "234",
//   three: true
// }

// const abcJson = JSON.stringify(abc)
// console.log(abcJson);

// >>>

// // Іменований імпорт:
// import {square, diag} from './math';
// console.log(square(5));
// console.log(diag(5, 6));rer

// // Імпорт як обьект з методами - іменами імпортів:
// import * as myImport from './math'
// console.log(myImport.square(5));
// console.log(myImport.diag(5, 6));

// // Дефолтний імпорт 1 функція, змінна diagNew може мати будь-яке ім'я:
// import diagNew from "./math";
// console.log(diagNew(5, 6));

// // Дефолтний імпорт декілька функцій, змінна diagNew може мати будь-яке ім'я:
// import diagNew from "./math";
// console.log(diagNew.square(5));
// console.log(diagNew.diag(5, 6));
