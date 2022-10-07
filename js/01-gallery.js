import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const markupGallery = createImgEl(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", markupGallery)

function createImgEl(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
}

const onImgClick = (event) => {
    event.preventDefault();

    if (event.target.classList.contains("gallery"))
        return;

    const imgLink = event.target.dataset.source;
    console.log(imgLink);

    const instance = basicLightbox.create(`
    <img src="${imgLink}" width="800" height="600">`);

instance.show()
    
};

galleryEl.addEventListener('click', onImgClick);


console.log(galleryEl);
console.log(galleryItems);
