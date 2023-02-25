import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef =document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML=markup;
galleryRef.addEventListener("click", onbrowsesClickCollection);

function createMarkup(images) {
return images.map(({preview,original,description})=>{
    return `
    <div class="gallery__item">
    <a class="gallery__link href = ${original} onclick="evt.preventDefault()" >
      <img
        class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"
      />
    </a>
  </div>`;
    
}).join('');
}
function onbrowsesClickCollection(evt) {
    if (evt.target.nodeName !== "IMG") {
      return;
    }
    const srcOriginal = evt.target.dataset.source;
  
    const viewedImg = basicLightbox.create(`
      <img src = "${srcOriginal}">
  `);
    viewedImg.show();
  
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        viewedImg.close();
      }
    });
  }