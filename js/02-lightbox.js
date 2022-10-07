import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const markupGallery = createImgEl(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", markupGallery)

function createImgEl(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",    
    captionDelay: 250,
});

console.log(galleryItems);
