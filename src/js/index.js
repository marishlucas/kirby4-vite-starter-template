// Lightbox
import basicLightbox from "./lightbox.js";

export function initLightbox() {
  Array.from(document.querySelectorAll("[data-lightbox]")).forEach(element => {
    element.onclick = (e) => {
      e.preventDefault();
      basicLightbox.create(`<img src="${element.href}">`).show();
    };
  });
}
