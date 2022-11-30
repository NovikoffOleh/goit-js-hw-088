import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
//import templateFunction from '../templates/item-markup.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';

/*const galleryRefs = document.querySelector('.gallery');

(function createMarkup() {
  const itemMarkup = galleryItems.map(templateFunction).join('');
  galleryRefs.insertAdjacentHTML('beforeend', itemMarkup);
})();

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});*/
const galleryEl = document.querySelector(".gallery");
const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
       </li>`;
    })
    .join("");
}
new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
