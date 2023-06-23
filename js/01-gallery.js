import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const previewMarkup = galleryItems
  .map(
    ({ description, preview, original }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", previewMarkup);
list.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  list.addEventListener("keydown", closeModal);
  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close(() => list.removeEventListener("keydown", closeModal));
    }
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`
  );
  instance.show();
}
