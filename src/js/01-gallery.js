

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

// $('.gallery a').simpleLightbox({
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });